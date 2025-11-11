export type ToolType = 'claude-code' | 'github-copilot';

export interface InstallOptions {
  tool: ToolType;
  targetDir: string;
}

export interface AgentTemplate {
  name: string;
  content: string;
  path: string;
}
