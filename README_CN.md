# decent_translation_app
极简智能翻译  使用 DeepSeek AI 提供自然、流畅且带文化背景的翻译。支持中文、英文、日文、韩文、泰文等。Minimalist AI Translation  Provides natural, fluent, and culturally aware translations using DeepSeek AI. Supports Chinese, English, Japanese, Korean, Thai, and more.



# 翻译应用 — 使用 Claude Vibe Coding


一款个人开发的翻译应用，使用 **Claude Vibe Coding** 生成前端代码，并调用 **DeepSeek API** 提供自然、流畅且带文化背景的翻译。前端保留 API Key 输入功能，本版本未使用后端代理。


---


## 功能特点


- **高质量 AI 翻译**，使用 DeepSeek API
- **多语言支持**：中文、英文、日文、韩文、泰文
- **区域化适配**：台湾和香港中文表达（如“靠北”）能被正确理解并翻译
- **文化注释**：底部显示翻译背景和文化说明，保证理解与地道表达
- **灵活语言选择**：
- 源语言：中文、英文、日文、韩文、泰文
- 目标语言：英文、日文、韩文、泰文、中文
- 双击语言可设置为界面背景语言
- **极简界面**：借鉴 Google 机票设计，按钮和布局直观
- **前端 API Key 输入**：方便测试或临时替换 Key


---


## 核心流程


1. 用户整理思路
2. 输入到 **ChatGPT**
3. ChatGPT 生成 **Claude Vibe Coding** 指令
4. Claude 生成网页 App 与小程序代码
5. 前端调用 **DeepSeek API** 进行翻译


---


## 开发细节


### 网页翻译 App


- **初版功能**：
- 输入/输出框
- 源语言/目标语言选择
- 翻译按钮
- 文化注释
- API Key 输入框


- **修改点**：
- 控制语言顺序
- 双击语言 → 设置界面背景语言
- 支持台湾/香港中文区域表达
- 文化注释显示为源语言
- UI 优化，参考 Google 机票设计
- 极简界面，注重细节


### 微信小程序 App


- 改造自网页 App
- 小程序直接调用 **DeepSeek API**，使用前端 API Key


- **保留功能**：
- 翻译、语言选择/交换、文化注释
- API Key 输入与切换
- **UI 调整**：
- 极简设计，操作直观
- 布局参考 Google 机票设计
- 细节优化，提高用户体验


---


## 目前可能存在的问题


- 翻译由 DeepSeek AI 控制，前端无法干预
- **解决方案**：底部文化注释提供额外解释与背景信息


---


## 未来改进方向


- 将 API Key 移至服务器，提高安全性并可监控使用情况
- 增加语音输入/输出功能（STT/TTS），目前因成本过高未开放
- 后端可逐步增加功能：
- 数据库记录用户操作或翻译记录
- 限流、成本控制、日志功能
- 安全错误处理


---


## 许可


本项目仅供个人使用
