# decent_translation_app

**Minimalist AI Translation / 极简智能翻译**

Provides natural, fluent, and culturally aware translations using **DeepSeek AI**. Supports Chinese, English, Japanese, Korean, Thai, and more.
使用 DeepSeek AI 提供自然、流畅且带文化背景的翻译。支持中文、英文、日文、韩文、泰文等。

---

# Translation App — Using Claude Vibe Coding

A personal translation app using **Claude Vibe Coding** to generate frontend code and calling **DeepSeek API** for natural, fluent, and culturally aware translations. Frontend retains API Key input; no backend proxy is used in this version.

---

## Features

- **High-quality AI translation** using DeepSeek API
- **Multi-language support**: Chinese, English, Japanese, Korean, Thai
- **Regional adaptation**: Taiwan and Hong Kong Chinese expressions (e.g., “靠北”) are correctly interpreted and translated
- **Cultural notes**: Displayed at the bottom to provide context and cultural background
- **Flexible language selection**:
  - Source languages: Chinese, English, Japanese, Korean, Thai
  - Target languages: English, Japanese, Korean, Thai, Chinese
  - Double-click a language to set it as interface background
- **Minimalist UI**: Inspired by Google Flights, with intuitive buttons and layout
- **Frontend API Key input**: Convenient for testing or temporary key replacement

---

## Core Workflow

1. User organizes ideas
2. Input to **ChatGPT**
3. ChatGPT generates **Claude Vibe Coding** instructions
4. Claude generates web app & mini program code
5. Frontend calls **DeepSeek API** for translations

---

## Development Details

### Web Translation App

- **Initial Features**:
  - Input/output boxes
  - Source/target language selection
  - Translate button
  - Cultural notes
  - API Key input field

- **Modifications**:
  - Language order control
  - Double-click language → sets interface background language
  - Regional adaptation for Taiwan/Hong Kong Chinese
  - Cultural notes displayed in source language
  - UI optimization inspired by Google Flights
  - Minimalist interface with attention to detail

### WeChat Mini Program

- Adapted from web app
- Directly calls **DeepSeek API** using frontend API Key

- **Retained Features**:
  - Translation, language selection/swap, cultural notes
  - API Key input and switching
- **UI Adjustments**:
  - Minimalist, intuitive design
  - Layout inspired by Google Flights
  - Detail optimization to improve user experience

---

## Current Potential Issues

- Translation is AI-controlled via DeepSeek API; frontend cannot intervene
- **Solution**: Bottom cultural notes provide extra explanation and context

---

## Future Improvements

- Move API Key to server for security and usage monitoring
- Add voice input/output (STT/TTS), currently disabled due to high cost
- Backend enhancements:
  - Record user actions or translation history in database
  - Rate limiting, cost control, logging
  - Secure error handling

---

## License

This project is for personal use only
