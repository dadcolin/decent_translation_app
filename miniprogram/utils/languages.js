/**
 * Language Configuration Module
 * 
 * Contains:
 * - languageNames: Display names for API prompts
 * - languageOptions: Options for picker components
 * - interfaceText: Localized UI strings for all supported languages
 * 
 * UPDATE: Added Thai language (th-TH) and enforced specific initial ordering:
 * - Source (left): Chinese → English → Japanese → Korean → Thai → others
 * - Target (right): English → Japanese → Korean → Thai → Chinese → others
 */

// Language names for translation prompts
// ADDED: 'th-TH' for Thai language support
const languageNames = {
  'en-US': 'English (US)',
  'en-CA': 'English (Canada)',
  'en-GB': 'English (UK)',
  'en-AU': 'English (Australia)',
  'zh-CN': 'Chinese (Mainland)',
  'zh-TW': 'Chinese (Taiwan)',
  'zh-HK': 'Chinese (Hong Kong)',
  'es-ES': 'Spanish (Spain)',
  'es-MX': 'Spanish (Mexico)',
  'es-AR': 'Spanish (Argentina)',
  'fr-FR': 'French (France)',
  'fr-CA': 'French (Canada)',
  'de-DE': 'German (Germany)',
  'de-AT': 'German (Austria)',
  'ja-JP': 'Japanese (Japan)',
  'ko-KR': 'Korean (South Korea)',
  'ru-RU': 'Russian (Russia)',
  'ar-SA': 'Arabic (Saudi Arabia)',
  'ar-EG': 'Arabic (Egypt)',
  'pt-BR': 'Portuguese (Brazil)',
  'pt-PT': 'Portuguese (Portugal)',
  'it-IT': 'Italian (Italy)',
  'th-TH': 'Thai (Thailand)'  // ADDED: Thai language
}

/**
 * Source language options (LEFT side picker)
 * 
 * ENFORCED ORDER:
 * 1. Chinese (zh-CN, zh-TW, zh-HK)
 * 2. English (en-US, en-CA, en-GB, en-AU)
 * 3. Japanese (ja-JP)
 * 4. Korean (ko-KR)
 * 5. Thai (th-TH) - ADDED
 * 6. Remaining languages
 */
const sourceLanguageOptions = [
  // 1. Chinese first
  { value: 'zh-CN', label: '中文（中国大陆）' },
  { value: 'zh-TW', label: '中文（台灣）' },
  { value: 'zh-HK', label: '中文（香港）' },
  // 2. English second
  { value: 'en-US', label: 'English (US)' },
  { value: 'en-CA', label: 'English (Canada)' },
  { value: 'en-GB', label: 'English (UK)' },
  { value: 'en-AU', label: 'English (Australia)' },
  // 3. Japanese third
  { value: 'ja-JP', label: '日本語（日本）' },
  // 4. Korean fourth
  { value: 'ko-KR', label: '한국어（대한민국）' },
  // 5. Thai fifth - ADDED
  { value: 'th-TH', label: 'ไทย (ประเทศไทย)' },
  // 6. Remaining languages
  { value: 'es-ES', label: 'Español (España)' },
  { value: 'es-MX', label: 'Español (México)' },
  { value: 'es-AR', label: 'Español (Argentina)' },
  { value: 'fr-FR', label: 'Français (France)' },
  { value: 'fr-CA', label: 'Français (Canada)' },
  { value: 'de-DE', label: 'Deutsch (Deutschland)' },
  { value: 'de-AT', label: 'Deutsch (Österreich)' },
  { value: 'ru-RU', label: 'Русский (Россия)' },
  { value: 'ar-SA', label: 'العربية（السعودية）' },
  { value: 'ar-EG', label: 'العربية（مصر）' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'pt-PT', label: 'Português (Portugal)' },
  { value: 'it-IT', label: 'Italiano (Italia)' }
]

/**
 * Target language options (RIGHT side picker)
 * 
 * ENFORCED ORDER:
 * 1. English (en-US, en-CA, en-GB, en-AU)
 * 2. Japanese (ja-JP)
 * 3. Korean (ko-KR)
 * 4. Thai (th-TH) - ADDED
 * 5. Chinese (zh-CN, zh-TW, zh-HK)
 * 6. Remaining languages
 */
const targetLanguageOptions = [
  // 1. English first
  { value: 'en-US', label: 'English (US)' },
  { value: 'en-CA', label: 'English (Canada)' },
  { value: 'en-GB', label: 'English (UK)' },
  { value: 'en-AU', label: 'English (Australia)' },
  // 2. Japanese second
  { value: 'ja-JP', label: '日本語（日本）' },
  // 3. Korean third
  { value: 'ko-KR', label: '한국어（대한민국）' },
  // 4. Thai fourth - ADDED
  { value: 'th-TH', label: 'ไทย (ประเทศไทย)' },
  // 5. Chinese fifth
  { value: 'zh-CN', label: '中文（中国大陆）' },
  { value: 'zh-TW', label: '中文（台灣）' },
  { value: 'zh-HK', label: '中文（香港）' },
  // 6. Remaining languages
  { value: 'es-ES', label: 'Español (España)' },
  { value: 'es-MX', label: 'Español (México)' },
  { value: 'es-AR', label: 'Español (Argentina)' },
  { value: 'fr-FR', label: 'Français (France)' },
  { value: 'fr-CA', label: 'Français (Canada)' },
  { value: 'de-DE', label: 'Deutsch (Deutschland)' },
  { value: 'de-AT', label: 'Deutsch (Österreich)' },
  { value: 'ru-RU', label: 'Русский (Россия)' },
  { value: 'ar-SA', label: 'العربية（السعودية）' },
  { value: 'ar-EG', label: 'العربية（مصر）' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'pt-PT', label: 'Português (Portugal)' },
  { value: 'it-IT', label: 'Italiano (Italia)' }
]

// Interface text translations for all supported languages
const interfaceText = {
  'en-US': {
    apiPlaceholder: 'DeepSeek API Key',
    inputPlaceholder: 'Enter text to translate',
    translate: 'Translate',
    translating: 'Processing...',
    copy: 'Copy',
    copied: 'Copied',
    outputEmpty: 'Translation will appear here',
    errorApiKey: 'API key required',
    errorInput: 'Input text required',
    errorSameLang: 'Source and target languages must differ',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.'
  },
  'en-CA': {
    apiPlaceholder: 'DeepSeek API Key',
    inputPlaceholder: 'Enter text to translate',
    translate: 'Translate',
    translating: 'Processing...',
    copy: 'Copy',
    copied: 'Copied',
    outputEmpty: 'Translation will appear here',
    errorApiKey: 'API key required',
    errorInput: 'Input text required',
    errorSameLang: 'Source and target languages must differ',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.'
  },
  'en-GB': {
    apiPlaceholder: 'DeepSeek API Key',
    inputPlaceholder: 'Enter text to translate',
    translate: 'Translate',
    translating: 'Processing...',
    copy: 'Copy',
    copied: 'Copied',
    outputEmpty: 'Translation will appear here',
    errorApiKey: 'API key required',
    errorInput: 'Input text required',
    errorSameLang: 'Source and target languages must differ',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.'
  },
  'en-AU': {
    apiPlaceholder: 'DeepSeek API Key',
    inputPlaceholder: 'Enter text to translate',
    translate: 'Translate',
    translating: 'Processing...',
    copy: 'Copy',
    copied: 'Copied',
    outputEmpty: 'Translation will appear here',
    errorApiKey: 'API key required',
    errorInput: 'Input text required',
    errorSameLang: 'Source and target languages must differ',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.'
  },
  'zh-CN': {
    apiPlaceholder: 'DeepSeek API 密钥',
    inputPlaceholder: '输入要翻译的文本',
    translate: '翻译',
    translating: '处理中...',
    copy: '复制',
    copied: '已复制',
    outputEmpty: '翻译结果将显示在这里',
    errorApiKey: '需要 API 密钥',
    errorInput: '需要输入文本',
    errorSameLang: '源语言和目标语言必须不同',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\n根据地区习惯调整翻译，包括地方表达、俚语和文化背景。检测并解释文化相关内容。'
  },
  'zh-TW': {
    apiPlaceholder: 'DeepSeek API 金鑰',
    inputPlaceholder: '輸入要翻譯的文字',
    translate: '翻譯',
    translating: '處理中...',
    copy: '複製',
    copied: '已複製',
    outputEmpty: '翻譯結果將顯示在這裡',
    errorApiKey: '需要 API 金鑰',
    errorInput: '需要輸入文字',
    errorSameLang: '來源語言和目標語言必須不同',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\n根據地區習慣調整翻譯，包括地方表達、俚語和文化背景。偵測並解釋文化相關內容。'
  },
  'zh-HK': {
    apiPlaceholder: 'DeepSeek API 金鑰',
    inputPlaceholder: '輸入要翻譯的文字',
    translate: '翻譯',
    translating: '處理中...',
    copy: '複製',
    copied: '已複製',
    outputEmpty: '翻譯結果將顯示在這裡',
    errorApiKey: '需要 API 金鑰',
    errorInput: '需要輸入文字',
    errorSameLang: '來源語言和目標語言必須不同',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\n根據地區習慣調整翻譯，包括地方表達、俚語和文化背景。偵測並解釋文化相關內容。'
  },
  'es-ES': {
    apiPlaceholder: 'Clave API de DeepSeek',
    inputPlaceholder: 'Introduce el texto a traducir',
    translate: 'Traducir',
    translating: 'Procesando...',
    copy: 'Copiar',
    copied: 'Copiado',
    outputEmpty: 'La traducción aparecerá aquí',
    errorApiKey: 'Se requiere clave API',
    errorInput: 'Se requiere texto de entrada',
    errorSameLang: 'Los idiomas de origen y destino deben ser diferentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapta las traducciones a expresiones regionales, jerga y contexto cultural. Detecta y explica referencias culturales.'
  },
  'es-MX': {
    apiPlaceholder: 'Clave API de DeepSeek',
    inputPlaceholder: 'Introduce el texto a traducir',
    translate: 'Traducir',
    translating: 'Procesando...',
    copy: 'Copiar',
    copied: 'Copiado',
    outputEmpty: 'La traducción aparecerá aquí',
    errorApiKey: 'Se requiere clave API',
    errorInput: 'Se requiere texto de entrada',
    errorSameLang: 'Los idiomas de origen y destino deben ser diferentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapta las traducciones a expresiones regionales, jerga y contexto cultural. Detecta y explica referencias culturales.'
  },
  'es-AR': {
    apiPlaceholder: 'Clave API de DeepSeek',
    inputPlaceholder: 'Introduce el texto a traducir',
    translate: 'Traducir',
    translating: 'Procesando...',
    copy: 'Copiar',
    copied: 'Copiado',
    outputEmpty: 'La traducción aparecerá aquí',
    errorApiKey: 'Se requiere clave API',
    errorInput: 'Se requiere texto de entrada',
    errorSameLang: 'Los idiomas de origen y destino deben ser diferentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapta las traducciones a expresiones regionales, jerga y contexto cultural. Detecta y explica referencias culturales.'
  },
  'fr-FR': {
    apiPlaceholder: 'Clé API DeepSeek',
    inputPlaceholder: 'Entrez le texte à traduire',
    translate: 'Traduire',
    translating: 'Traitement...',
    copy: 'Copier',
    copied: 'Copié',
    outputEmpty: 'La traduction apparaîtra ici',
    errorApiKey: 'Clé API requise',
    errorInput: 'Texte d\'entrée requis',
    errorSameLang: 'Les langues source et cible doivent être différentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapte les traductions aux expressions régionales, à l\'argot et au contexte culturel. Détecte et explique les références culturelles.'
  },
  'fr-CA': {
    apiPlaceholder: 'Clé API DeepSeek',
    inputPlaceholder: 'Entrez le texte à traduire',
    translate: 'Traduire',
    translating: 'Traitement...',
    copy: 'Copier',
    copied: 'Copié',
    outputEmpty: 'La traduction apparaîtra ici',
    errorApiKey: 'Clé API requise',
    errorInput: 'Texte d\'entrée requis',
    errorSameLang: 'Les langues source et cible doivent être différentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapte les traductions aux expressions régionales, à l\'argot et au contexte culturel. Détecte et explique les références culturelles.'
  },
  'de-DE': {
    apiPlaceholder: 'DeepSeek API-Schlüssel',
    inputPlaceholder: 'Zu übersetzenden Text eingeben',
    translate: 'Übersetzen',
    translating: 'Verarbeitung...',
    copy: 'Kopieren',
    copied: 'Kopiert',
    outputEmpty: 'Die Übersetzung wird hier angezeigt',
    errorApiKey: 'API-Schlüssel erforderlich',
    errorInput: 'Eingabetext erforderlich',
    errorSameLang: 'Quell- und Zielsprache müssen unterschiedlich sein',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nPasst Übersetzungen an regionale Ausdrücke, Slang und kulturellen Kontext an. Erkennt und erklärt kulturelle Bezüge.'
  },
  'de-AT': {
    apiPlaceholder: 'DeepSeek API-Schlüssel',
    inputPlaceholder: 'Zu übersetzenden Text eingeben',
    translate: 'Übersetzen',
    translating: 'Verarbeitung...',
    copy: 'Kopieren',
    copied: 'Kopiert',
    outputEmpty: 'Die Übersetzung wird hier angezeigt',
    errorApiKey: 'API-Schlüssel erforderlich',
    errorInput: 'Eingabetext erforderlich',
    errorSameLang: 'Quell- und Zielsprache müssen unterschiedlich sein',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nPasst Übersetzungen an regionale Ausdrücke, Slang und kulturellen Kontext an. Erkennt und erklärt kulturelle Bezüge.'
  },
  'ja-JP': {
    apiPlaceholder: 'DeepSeek APIキー',
    inputPlaceholder: '翻訳するテキストを入力',
    translate: '翻訳',
    translating: '処理中...',
    copy: 'コピー',
    copied: 'コピー済み',
    outputEmpty: '翻訳結果がここに表示されます',
    errorApiKey: 'APIキーが必要です',
    errorInput: '入力テキストが必要です',
    errorSameLang: '元の言語と対象言語は異なる必要があります',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\n地域の表現、スラング、文化的背景に合わせて翻訳を調整します。文化的な参照を検出して説明します。'
  },
  'ko-KR': {
    apiPlaceholder: 'DeepSeek API 키',
    inputPlaceholder: '번역할 텍스트 입력',
    translate: '번역',
    translating: '처리 중...',
    copy: '복사',
    copied: '복사됨',
    outputEmpty: '번역 결과가 여기에 표시됩니다',
    errorApiKey: 'API 키 필요',
    errorInput: '입력 텍스트 필요',
    errorSameLang: '원본 언어와 대상 언어는 달라야 합니다',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\n지역 표현, 속어 및 문화적 맥락에 맞게 번역을 조정합니다. 문화적 참조를 감지하고 설명합니다.'
  },
  'ru-RU': {
    apiPlaceholder: 'Ключ API DeepSeek',
    inputPlaceholder: 'Введите текст для перевода',
    translate: 'Перевести',
    translating: 'Обработка...',
    copy: 'Копировать',
    copied: 'Скопировано',
    outputEmpty: 'Перевод появится здесь',
    errorApiKey: 'Требуется ключ API',
    errorInput: 'Требуется входной текст',
    errorSameLang: 'Исходный и целевой языки должны отличаться',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nАдаптирует переводы к региональным выражениям, сленгу и культурному контексту. Обнаруживает и объясняет культурные отсылки.'
  },
  'ar-SA': {
    apiPlaceholder: 'مفتاح DeepSeek API',
    inputPlaceholder: 'أدخل النص للترجمة',
    translate: 'ترجمة',
    translating: 'جارٍ المعالجة...',
    copy: 'نسخ',
    copied: 'تم النسخ',
    outputEmpty: 'ستظهر الترجمة هنا',
    errorApiKey: 'مفتاح API مطلوب',
    errorInput: 'النص المدخل مطلوب',
    errorSameLang: 'يجب أن تختلف اللغة المصدر والهدف',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nيكيّف الترجمات مع التعبيرات الإقليمية والعامية والسياق الثقافي. يكتشف ويشرح المراجع الثقافية.'
  },
  'ar-EG': {
    apiPlaceholder: 'مفتاح DeepSeek API',
    inputPlaceholder: 'أدخل النص للترجمة',
    translate: 'ترجمة',
    translating: 'جارٍ المعالجة...',
    copy: 'نسخ',
    copied: 'تم النسخ',
    outputEmpty: 'ستظهر الترجمة هنا',
    errorApiKey: 'مفتاح API مطلوب',
    errorInput: 'النص المدخل مطلوب',
    errorSameLang: 'يجب أن تختلف اللغة المصدر والهدف',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nيكيّف الترجمات مع التعبيرات الإقليمية والعامية والسياق الثقافي. يكتشف ويشرح المراجع الثقافية.'
  },
  'pt-BR': {
    apiPlaceholder: 'Chave API DeepSeek',
    inputPlaceholder: 'Digite o texto a traduzir',
    translate: 'Traduzir',
    translating: 'Processando...',
    copy: 'Copiar',
    copied: 'Copiado',
    outputEmpty: 'A tradução aparecerá aqui',
    errorApiKey: 'Chave API necessária',
    errorInput: 'Texto de entrada necessário',
    errorSameLang: 'Os idiomas de origem e destino devem ser diferentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapta traduções a expressões regionais, gírias e contexto cultural. Detecta e explica referências culturais.'
  },
  'pt-PT': {
    apiPlaceholder: 'Chave API DeepSeek',
    inputPlaceholder: 'Digite o texto a traduzir',
    translate: 'Traduzir',
    translating: 'Processando...',
    copy: 'Copiar',
    copied: 'Copiado',
    outputEmpty: 'A tradução aparecerá aqui',
    errorApiKey: 'Chave API necessária',
    errorInput: 'Texto de entrada necessário',
    errorSameLang: 'Os idiomas de origem e destino devem ser diferentes',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdapta traduções a expressões regionais, gírias e contexto cultural. Detecta e explica referências culturais.'
  },
  'it-IT': {
    apiPlaceholder: 'Chiave API DeepSeek',
    inputPlaceholder: 'Inserisci il testo da tradurre',
    translate: 'Traduci',
    translating: 'Elaborazione...',
    copy: 'Copia',
    copied: 'Copiato',
    outputEmpty: 'La traduzione apparirà qui',
    errorApiKey: 'Chiave API richiesta',
    errorInput: 'Testo di input richiesto',
    errorSameLang: 'Le lingue di origine e destinazione devono essere diverse',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nAdatta le traduzioni a espressioni regionali, slang e contesto culturale. Rileva e spiega i riferimenti culturali.'
  },
  // ADDED: Thai language interface text
  'th-TH': {
    apiPlaceholder: 'DeepSeek API Key',
    inputPlaceholder: 'ป้อนข้อความที่ต้องการแปล',
    translate: 'แปล',
    translating: 'กำลังประมวลผล...',
    copy: 'คัดลอก',
    copied: 'คัดลอกแล้ว',
    outputEmpty: 'คำแปลจะปรากฏที่นี่',
    errorApiKey: 'ต้องใช้ API Key',
    errorInput: 'ต้องป้อนข้อความ',
    errorSameLang: 'ภาษาต้นทางและภาษาปลายทางต้องแตกต่างกัน',
    buttonExplanation: 'Adapts translations to regional expressions, slang, and cultural context. Detects and explains cultural references when present.\nปรับการแปลให้เข้ากับสำนวนท้องถิ่น คำแสลง และบริบททางวัฒนธรรม ตรวจจับและอธิบายการอ้างอิงทางวัฒนธรรม'
  }
}

/**
 * Get interface text for a specific language
 * Falls back to base language or English if exact match not found
 * @param {string} lang - Language code (e.g., 'en-US', 'zh-CN', 'th-TH')
 * @returns {object} Interface text object
 */
function getInterfaceText(lang) {
  const baseLang = lang.split('-')[0]
  return interfaceText[lang] || 
         interfaceText[`${baseLang}-${baseLang.toUpperCase()}`] || 
         interfaceText['en-US']
}

module.exports = {
  languageNames,
  sourceLanguageOptions,
  targetLanguageOptions,
  interfaceText,
  getInterfaceText
}
