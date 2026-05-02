List of References Pulling in from everywhere: 
#1 Lil-Lenny is a tiny macOS companion that lives above your Dock and lets you chat with Lenny Rachitsky's archive without switching contexts.
Click Lenny to open a terminal-style popover, ask a question about product, growth, pricing, leadership, startups, or AI, and get an answer grounded in either the bundled Starter Pack or the full LennyData archive. When it helps, Lil-Lenny can hand the mic to specific archive guests so the answer reads more like advice from Elena Verna, Jeanne Grosser, Molly Graham, Dr. Becky, and other operators in the archive.
What it does
Renders animated dock-side characters from transparent video assets
Opens a native macOS popover chat instead of a browser tab
Grounds responses in Lenny archive content instead of generic model output
Supports both a local Starter Pack and the full official LennyData archive
Auto-detects Claude Code and Codex when they are installed and logged in
Streams assistant output live while tools are still running
Shows archive-native prompt chips to help users start with realistic questions
Lets Lil-Lenny orchestrate expert-style follow-ups as separate speakers
Answer sources
Lil-Lenny supports two archive modes:
Starter Pack Local, fast, and bundled with the app. Today that means the public Lenny starter dataset: 10 newsletters and 50 podcast transcripts.
Full LennyData Uses the official Lenny archive when available. This requires either native MCP configuration in Claude Code or Codex, or a saved bearer token in Settings.
The app will automatically use the full archive when it detects native MCP config, unless the user explicitly chose Starter Pack in Settings.
https://github.com/hbshih/lenny-lil-agents# 
