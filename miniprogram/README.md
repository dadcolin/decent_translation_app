# 正经翻译软件 (Translation Mini Program)

A WeChat Mini Program for translating text between multiple languages with cultural context awareness.

## Features

- 🌍 **23 Languages** - Support for English, Chinese, Japanese, Korean, Thai, Spanish, French, German, Russian, Arabic, Portuguese, Italian with regional variants
- 🎯 **Regional Adaptation** - Translations adapted to specific country/region expressions
- 📚 **Cultural Notes** - Bilingual explanations for cultural references, idioms, and slang
- 🔄 **Language Swap** - Quick swap between source and target languages
- 🌐 **Adaptive UI** - Interface language changes based on your selections

## Screenshots

[Add your screenshots here]

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/translation-miniprogram.git
cd translation-miniprogram
```

### 2. Configure API Key

⚠️ **Important**: Never commit your API key to GitHub!

```bash
# Copy the example config file
cp utils/config.example.js utils/config.js

# Edit config.js and add your DeepSeek API key
```

Edit `utils/config.js`:
```javascript
module.exports = {
  apiKey: 'your-actual-api-key-here',  // Get from https://platform.deepseek.com/
  apiUrl: 'https://api.deepseek.com/v1/chat/completions',
  model: 'deepseek-chat'
};
```

### 3. Configure WeChat DevTools

1. Open WeChat DevTools (微信开发者工具)
2. Import this project
3. Add domain whitelist:
   - Go to WeChat Console (mp.weixin.qq.com)
   - 开发 → 开发设置 → 服务器域名
   - Add `https://api.deepseek.com` to request合法域名

**For Development Testing:**
- In DevTools: 详情 → 本地设置
- Check: 不校验合法域名、web-view、TLS版本以及HTTPS证书

### 4. Run

Click "Compile" (编译) in WeChat DevTools

## Project Structure

```
miniprogram/
├── app.js                 # App entry
├── app.json               # App config
├── app.wxss               # Global styles
├── pages/
│   └── index/
│       ├── index.js       # Main page logic
│       ├── index.wxml     # Page template
│       ├── index.wxss     # Page styles
│       └── index.json     # Page config
├── utils/
│   ├── config.js          # ⚠️ API key (GITIGNORED)
│   ├── config.example.js  # Config template
│   └── languages.js       # Language definitions
└── project.config.json    # Project config
```

## Supported Languages

| Language | Variants |
|----------|----------|
| English | US 🇺🇸, Canada 🇨🇦, UK 🇬🇧, Australia 🇦🇺 |
| Chinese | Mainland 🇨🇳, Taiwan 🇹🇼, Hong Kong 🇭🇰 |
| Spanish | Spain 🇪🇸, Mexico 🇲🇽, Argentina 🇦🇷 |
| French | France 🇫🇷, Canada 🇨🇦 |
| German | Germany 🇩🇪, Austria 🇦🇹 |
| Portuguese | Brazil 🇧🇷, Portugal 🇵🇹 |
| Arabic | Saudi Arabia 🇸🇦, Egypt 🇪🇬 |
| Japanese | Japan 🇯🇵 |
| Korean | South Korea 🇰🇷 |
| Thai | Thailand 🇹🇭 |
| Russian | Russia 🇷🇺 |
| Italian | Italy 🇮🇹 |

## API

This app uses [DeepSeek API](https://platform.deepseek.com/) for translations.

Get your API key at: https://platform.deepseek.com/

## Security Notes

- ✅ API key stored in `config.js` which is gitignored
- ✅ `config.example.js` provided as template
- ❌ Never hardcode API keys in committed files
- ❌ Never share your `config.js` file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file

## Acknowledgments

- [DeepSeek](https://deepseek.com/) for the translation API
- WeChat Mini Program platform
