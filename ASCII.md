[用户思路整理]
            │
            ▼
[ChatGPT]
  （生成 Claude Vibe Coding 指令）
            │
            ▼
[Claude Vibe Coding]
  （生成网页 App 和小程序代码）
            │
    ┌───────┴────────┐
    ▼                ▼
[网页 App]        [微信小程序]
  │                   │
  │                   │
  └───────> [DeepSeek API / DeepSeek 翻译 API] <───────┘
                  │
                  ▼
        [翻译文本]
                  │
                  ▼
        [文化注释]
                  │
                  ▼
        [界面与交互功能]
                  ├─ 语言选择
                  │    ├─ 源语言: 中文, 英文, 日文, 韩文, 泰文
                  │    └─ 目标语言: 英文, 日文, 韩文, 泰文, 中文
                  │    └─ 双击语言 → 设置为界面背景语言
                  ├─ API Key 输入（前端，当前）
                  └─ 界面优化（参考 Google 机票，极简）

             未来改进方向
                  ├─ 将 API Key 放到服务器（安全 + 数据监控）
                  ├─ 语音输入/输出（STT/TTS，成本高）
                  └─ 后端数据库（记录使用量、限流、日志）











[User Idea]
      │
      ▼
[ChatGPT]
  (Generates Claude Vibe Coding instructions)
      │
      ▼
[Claude Vibe Coding]
  (Generates Web App & Mini Program code)
      │
  ┌───┴───┐
  ▼       ▼
[Web App]        [WeChat Mini Program]
  │                   │
  │                   │
  └───────> [DeepSeek API] <───────┘
                  │
                  ▼
        [Translated Text]
                  │
                  ▼
        [Cultural Notes]
                  │
                  ▼
        [UI & Interaction Features]
                  ├─ Language Selection
                  │    ├─ Source: Chinese, English, Japanese, Korean, Thai
                  │    └─ Target: English, Japanese, Korean, Thai, Chinese
                  │    └─ Double-click language → set as interface background
                  ├─ API Key Input (frontend, current)
                  └─ UI optimized (Google Flights inspired, minimalist)

             Future Enhancements
                  ├─ Move API Key to Server (security + monitoring)
                  ├─ Voice Input/Output (STT/TTS, cost high)
                  └─ Backend database for usage, limits & logging
