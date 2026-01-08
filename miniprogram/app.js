/**
 * Translation Mini Program - Main App Entry
 * 
 * This Mini Program provides multi-language translation functionality
 * using DeepSeek API via wx.request (no cloud functions needed)
 * 
 * IMPORTANT: You must add "api.deepseek.com" to your Mini Program's
 * request domain whitelist in WeChat Mini Program Console:
 * 开发 → 开发设置 → 服务器域名 → request合法域名
 * 
 * Layout Optimizations:
 * - Apple-style light gray background (#F2F2F7)
 * - Square buttons instead of rounded
 * - Adjusted spacing for better mobile experience
 */

App({
  onLaunch: function () {
    // No cloud initialization needed
    console.log('Translation Mini Program initialized')
  },

  globalData: {
    // Current interface language (default English US)
    interfaceLang: 'en-US',
    // DeepSeek API key (stored in local storage for security)
    apiKey: '',
    // Current translation result
    currentTranslation: '',
    // Track first selection for interface language change
    isFirstSelection: true,
    // Track consecutive clicks for language switching
    lastClickedLanguage: null,
    consecutiveClickCount: 0
  }
})
