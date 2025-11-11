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
    const targetPath = tool === 'claude-code'
      ? path.join(targetDir, '.claude', 'agents')
      : path.join(targetDir, '.github', 'agents');

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
    const toolTemplateDir = path.join(templatesDir, tool === 'claude-code' ? 'claude' : 'copilot');

    // エージェントテンプレートをコピー
    await copyDirectory(agentsTemplateDir, targetPath);

    // ツール固有の設定ファイルをコピー
    if (await directoryExists(toolTemplateDir)) {
      const toolTargetDir = tool === 'claude-code'
        ? path.join(targetDir, '.claude')
        : path.join(targetDir, '.github');

      await copyDirectory(toolTemplateDir, toolTargetDir);
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
