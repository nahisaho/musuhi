export type ToolType =
  | 'claude-code'
  | 'github-copilot'
  | 'cursor'
  | 'windsurf'
  | 'gemini-cli'
  | 'codex-cli'
  | 'qwen-code';

export interface InstallOptions {
  tool: ToolType;
  targetDir: string;
}

export interface AgentTemplate {
  name: string;
  content: string;
  path: string;
}
