import * as fs from 'fs/promises';
import * as path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import type { InstallOptions, AgentTemplate } from './types';

/**
 * エージェントをインストールする
 */
export async function installAgents(options: InstallOptions): Promise<void> {
  const { tool, targetDir } = options;

  const spinner = ora('Installing agents...').start();

  try {
    // ターゲットディレクトリの決定
    const targetPath = getAgentsPath(tool, targetDir);

    // ディレクトリが存在するか確認
    const exists = await directoryExists(targetPath);
    if (exists) {
      spinner.warn(chalk.yellow(`Directory ${targetPath} already exists`));

      // 既存ファイルがある場合は上書き確認（後で実装可能）
      // 今は単純に進める
    }

    // ディレクトリを作成
    await fs.mkdir(targetPath, { recursive: true });

    // テンプレートディレクトリのパス
    const templatesDir = path.join(__dirname, 'templates');
    const agentsTemplateDir = path.join(templatesDir, 'agents');
    const toolTemplateDir = path.join(templatesDir, getToolTemplateName(tool));

    // エージェントテンプレートをコピー
    await copyDirectory(agentsTemplateDir, targetPath);

    // Steeringディレクトリを作成してテンプレートをコピー
    const steeringDir = path.join(targetDir, 'steering');
    const steeringTemplateDir = path.join(templatesDir, 'steering');

    spinner.text = 'Creating steering directory...';

    // Steering ディレクトリ全体を再帰的にコピー（rules/, templates/ サブディレクトリも含む）
    if (await directoryExists(steeringTemplateDir)) {
      await copyDirectory(steeringTemplateDir, steeringDir);
    }

    // ツール固有の設定ファイルをコピー
    if (await directoryExists(toolTemplateDir)) {
      const entries = await fs.readdir(toolTemplateDir, { withFileTypes: true });
      const rootConfigFiles = getToolRootConfigFiles(tool);

      for (const entry of entries) {
        if (entry.isFile()) {
          const srcPath = path.join(toolTemplateDir, entry.name);
          let destPath: string;

          // ツール固有のルート設定ファイルはプロジェクトルートにコピー
          if (rootConfigFiles.includes(entry.name)) {
            destPath = path.join(targetDir, entry.name);
          } else {
            // その他のファイル（README.md等）はツールディレクトリにコピー
            const toolTargetDir = getToolConfigDir(tool, targetDir);
            await fs.mkdir(toolTargetDir, { recursive: true });
            destPath = path.join(toolTargetDir, entry.name);
          }

          await fs.copyFile(srcPath, destPath);
        }
      }
    }

    spinner.succeed(chalk.green('Agents installed successfully!'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to install agents'));
    throw error;
  }
}

/**
 * ディレクトリが存在するかチェック
 */
async function directoryExists(dirPath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

/**
 * ディレクトリを再帰的にコピー
 */
async function copyDirectory(src: string, dest: string): Promise<void> {
  try {
    // srcディレクトリが存在するかチェック
    const srcExists = await directoryExists(src);
    if (!srcExists) {
      // テンプレートが存在しない場合はスキップ（警告のみ）
      console.warn(chalk.yellow(`Template directory ${src} does not exist, skipping...`));
      return;
    }

    // destディレクトリを作成
    await fs.mkdir(dest, { recursive: true });

    // ディレクトリ内のファイルを取得
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        // ディレクトリの場合は再帰的にコピー
        await copyDirectory(srcPath, destPath);
      } else {
        // ファイルの場合はコピー
        await fs.copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error copying directory from ${src} to ${dest}:`), error);
    throw error;
  }
}

/**
 * ファイルが存在するかチェック
 */
async function fileExists(filePath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

/**
 * ツールに応じたエージェントディレクトリパスを取得
 */
function getAgentsPath(tool: string, targetDir: string): string {
  const paths: Record<string, string> = {
    'claude-code': path.join(targetDir, '.claude', 'agents'),
    'github-copilot': path.join(targetDir, '.github', 'agents'),
    'cursor': path.join(targetDir, '.cursor', 'agents'),
    'windsurf': path.join(targetDir, '.windsurf', 'agents'),
    'gemini-cli': path.join(targetDir, '.gemini', 'agents'),
    'codex-cli': path.join(targetDir, '.codex', 'agents'),
    'qwen-code': path.join(targetDir, '.qwen', 'agents'),
  };
  return paths[tool] || paths['claude-code'];
}

/**
 * ツールに応じた設定ディレクトリを取得
 */
function getToolConfigDir(tool: string, targetDir: string): string {
  const dirs: Record<string, string> = {
    'claude-code': path.join(targetDir, '.claude'),
    'github-copilot': path.join(targetDir, '.github'),
    'cursor': path.join(targetDir, '.cursor'),
    'windsurf': path.join(targetDir, '.windsurf'),
    'gemini-cli': path.join(targetDir, '.gemini'),
    'codex-cli': path.join(targetDir, '.codex'),
    'qwen-code': path.join(targetDir, '.qwen'),
  };
  return dirs[tool] || dirs['claude-code'];
}

/**
 * ツールに応じたテンプレート名を取得
 */
function getToolTemplateName(tool: string): string {
  const names: Record<string, string> = {
    'claude-code': 'claude',
    'github-copilot': 'copilot',
    'cursor': 'cursor',
    'windsurf': 'windsurf',
    'gemini-cli': 'gemini',
    'codex-cli': 'codex',
    'qwen-code': 'qwen',
  };
  return names[tool] || 'claude';
}

/**
 * ツールに応じたルート設定ファイル名のリストを取得
 */
function getToolRootConfigFiles(tool: string): string[] {
  const configs: Record<string, string[]> = {
    'claude-code': ['CLAUDE.md'],
    'github-copilot': ['copilot-instructions.md'],
    'cursor': ['.cursorrules'],
    'windsurf': ['.windsurfrules'],
    'gemini-cli': ['gemini-config.md'],
    'codex-cli': ['codex-config.md'],
    'qwen-code': ['qwen-config.md'],
  };
  return configs[tool] || [];
}
