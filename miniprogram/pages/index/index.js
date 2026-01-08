/**
 * Translation Mini Program - Main Page Logic
 * 
 * SETUP: 
 * 1. Copy utils/config.example.js to utils/config.js
 * 2. Add your DeepSeek API key in config.js
 * 3. Add "api.deepseek.com" to domain whitelist in WeChat Console
 * 
 * API key is loaded from config.js which is GITIGNORED
 */

const app = getApp()
const languages = require('../../utils/languages.js')
const config = require('../../utils/config.js')

Page({
  data: {
    // Language selections
    sourceLangIndex: 0,
    targetLangIndex: 0,
    sourceLanguageLabels: [],
    targetLanguageLabels: [],
    currentSourceLabel: '',
    currentTargetLabel: '',
    
    // Input/Output
    inputText: '',
    outputText: '',
    outputState: 'empty',
    culturalNote: '',
    
    // UI State
    isTranslating: false,
    swapAnimating: false,
    copyButtonText: '',
    
    // Interface language
    uiText: {},
    interfaceLang: 'en-US',
    isFirstSelection: true,
    lastClickedLanguage: null,
    consecutiveClickCount: 0,
    
    // Current translation for swap
    currentTranslation: ''
  },

  onLoad: function() {
    const sourceLabels = languages.sourceLanguageOptions.map(opt => opt.label)
    const targetLabels = languages.targetLanguageOptions.map(opt => opt.label)
    const savedInterfaceLang = wx.getStorageSync('interface_language') || 'en-US'
    const uiText = languages.getInterfaceText(savedInterfaceLang)
    
    this.setData({
      sourceLanguageLabels: sourceLabels,
      targetLanguageLabels: targetLabels,
      currentSourceLabel: sourceLabels[0],
      currentTargetLabel: targetLabels[0],
      interfaceLang: savedInterfaceLang,
      uiText: uiText,
      outputText: uiText.outputEmpty,
      copyButtonText: uiText.copy
    })
  },

  // Language Selection Handlers
  onSourceLangChange: function(e) {
    const index = parseInt(e.detail.value)
    const selectedOption = languages.sourceLanguageOptions[index]
    const selectedLang = selectedOption.value
    
    this.setData({
      sourceLangIndex: index,
      currentSourceLabel: selectedOption.label
    })
    
    this.handleInterfaceLanguageSwitch(selectedLang)
  },

  onTargetLangChange: function(e) {
    const index = parseInt(e.detail.value)
    const selectedOption = languages.targetLanguageOptions[index]
    
    this.setData({
      targetLangIndex: index,
      currentTargetLabel: selectedOption.label
    })
  },

  handleInterfaceLanguageSwitch: function(selectedLang) {
    if (this.data.isFirstSelection) {
      this.updateInterfaceLanguage(selectedLang)
      this.setData({
        interfaceLang: selectedLang,
        isFirstSelection: false,
        lastClickedLanguage: selectedLang,
        consecutiveClickCount: 1
      })
      wx.setStorageSync('interface_language', selectedLang)
      return
    }
    
    if (selectedLang === this.data.lastClickedLanguage) {
      const newCount = this.data.consecutiveClickCount + 1
      if (newCount >= 2) {
        this.updateInterfaceLanguage(selectedLang)
        this.setData({
          interfaceLang: selectedLang,
          consecutiveClickCount: 1
        })
        wx.setStorageSync('interface_language', selectedLang)
      } else {
        this.setData({ consecutiveClickCount: newCount })
      }
    } else {
      this.setData({
        lastClickedLanguage: selectedLang,
        consecutiveClickCount: 1
      })
    }
  },

  updateInterfaceLanguage: function(lang) {
    const uiText = languages.getInterfaceText(lang)
    const updates = { uiText: uiText, copyButtonText: uiText.copy }
    
    if (this.data.outputState === 'empty') {
      updates.outputText = uiText.outputEmpty
    }
    
    this.setData(updates)
  },

  // Swap Languages
  onSwapLanguages: function() {
    this.setData({ swapAnimating: true })
    setTimeout(() => { this.setData({ swapAnimating: false }) }, 300)
    
    const currentSourceValue = languages.sourceLanguageOptions[this.data.sourceLangIndex].value
    const currentTargetValue = languages.targetLanguageOptions[this.data.targetLangIndex].value
    
    const newSourceIndex = languages.sourceLanguageOptions.findIndex(opt => opt.value === currentTargetValue)
    const newTargetIndex = languages.targetLanguageOptions.findIndex(opt => opt.value === currentSourceValue)
    
    if (newSourceIndex !== -1 && newTargetIndex !== -1) {
      this.setData({
        sourceLangIndex: newSourceIndex,
        targetLangIndex: newTargetIndex,
        currentSourceLabel: languages.sourceLanguageOptions[newSourceIndex].label,
        currentTargetLabel: languages.targetLanguageOptions[newTargetIndex].label
      })
      
      if (this.data.currentTranslation && this.data.outputState === 'success') {
        this.setData({
          inputText: this.data.currentTranslation,
          outputText: this.data.uiText.outputEmpty,
          outputState: 'empty',
          culturalNote: ''
        })
        setTimeout(() => { this.onTranslate() }, 50)
      }
    }
  },

  // Input Handler
  onInputChange: function(e) {
    this.setData({ inputText: e.detail.value })
  },

  // Translation - Calls DeepSeek API directly
  onTranslate: function() {
    const sourceText = this.data.inputText.trim()
    const sourceLang = languages.sourceLanguageOptions[this.data.sourceLangIndex].value
    const targetLang = languages.targetLanguageOptions[this.data.targetLangIndex].value
    const uiText = this.data.uiText
    
    // Validation
    if (!sourceText) { 
      this.showError(uiText.errorInput)
      return 
    }
    if (sourceLang === targetLang) { 
      this.showError(uiText.errorSameLang)
      return 
    }
    
    // Check if API key is configured
    if (!config.apiKey || config.apiKey === 'YOUR_API_KEY_HERE') {
      this.showError('Please configure your API key in utils/config.js')
      return
    }
    
    this.showLoading()
    
    const sourceLangName = languages.languageNames[sourceLang]
    const targetLangName = languages.languageNames[targetLang]
    
    // Build translation prompt with bilingual cultural notes
    const prompt = `You are a professional translation engine.

Tasks:
1. Translate the input text naturally and accurately from ${sourceLangName} to ${targetLangName}.
2. IMPORTANT: Adapt the translation based on the specific country/region context:
   - Use country-specific expressions, slang, and cultural references
   - Apply appropriate spelling conventions (e.g., US vs UK English, Brazilian vs European Portuguese)
   - Consider regional cultural nuances and idioms
   - Reflect the natural speech patterns of that specific region
3. Detect explicit or implicit context and incorporate it if present.
4. Detect whether the input contains a popular phrase, slang, meme, or cultural reference that cannot be fully understood via literal translation.

If a cultural reference exists:
- Add a short, neutral explanation.
- IMPORTANT: Write the culturalNote in BOTH languages - first in ${sourceLangName}, then a newline, then in ${targetLangName}.
- Do NOT over-explain.
- Do NOT assume the user does not know it.
- Keep explanation concise and factual.

Input text: "${sourceText}"

Output format:
- JSON only
- No extra text
- No markdown
- No code blocks

Required fields:
- translation (string) - in ${targetLangName}
- hasContext (boolean)
- hasCulturalReference (boolean)

Optional field (ONLY if hasCulturalReference is true):
- culturalNote (string) - MUST contain BOTH languages: first ${sourceLangName}, then newline, then ${targetLangName}

Example:
For "Break a leg!" from English (US) to Chinese (Mainland): {"translation":"祝你好运！","hasContext":true,"hasCulturalReference":true,"culturalNote":"This is a theatrical expression meaning 'good luck', originating from the superstition that wishing someone good luck directly would bring bad luck.\\n这是一个戏剧用语，意思是"祝你好运"，源于一种迷信，认为直接祝人好运会带来厄运。"}`

    const that = this
    
    // Call DeepSeek API
    wx.request({
      url: config.apiUrl,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + config.apiKey
      },
      data: {
        model: config.model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 1000,
        stream: false
      },
      success: function(res) {
        if (res.statusCode !== 200) {
          const errorMsg = res.data.error ? res.data.error.message : 'Request failed: ' + res.statusCode
          that.showError(errorMsg)
          return
        }
        
        try {
          const content = res.data.choices[0].message.content
          const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim()
          const result = JSON.parse(cleanContent)
          that.showResult(result)
        } catch (parseErr) {
          that.showError('Response format unexpected')
        }
      },
      fail: function(err) {
        that.showError(err.errMsg || 'Network error')
      }
    })
  },

  // UI State Handlers
  showLoading: function() {
    this.setData({
      outputText: this.data.uiText.translating,
      outputState: 'loading',
      culturalNote: '',
      isTranslating: true
    })
  },

  showResult: function(result) {
    this.setData({
      currentTranslation: result.translation,
      outputText: result.translation,
      outputState: 'success',
      culturalNote: result.hasCulturalReference && result.culturalNote ? result.culturalNote : '',
      isTranslating: false
    })
  },

  showError: function(message) {
    this.setData({
      outputText: message,
      outputState: 'error',
      culturalNote: '',
      isTranslating: false
    })
  },

  // Copy to Clipboard
  onCopyTranslation: function() {
    if (!this.data.currentTranslation) return
    
    const that = this
    wx.setClipboardData({
      data: this.data.currentTranslation,
      success: function() {
        that.setData({ copyButtonText: that.data.uiText.copied })
        setTimeout(() => {
          that.setData({ copyButtonText: that.data.uiText.copy })
        }, 2000)
      }
    })
  }
})
