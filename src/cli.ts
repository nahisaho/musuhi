#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { installAgents } from './installer';
import type { ToolType } from './types';

const program = new Command();

program
  .name('musuhi')
  .description('Agent installer for Claude Code, GitHub Copilot, Cursor, Windsurf, and AI CLIs')
  .version('0.4.6');

program
  .command('install')
  .description('Install agents for supported AI tools')
  .option('-t, --tool <tool>', 'Tool type (claude-code, github-copilot, cursor, windsurf, gemini-cli, codex-cli, qwen-code)')
  .option('-d, --dir <directory>', 'Target directory', process.cwd())
  .action(async (options) => {
    try {
      let tool: ToolType;

      if (options.tool) {
        const validTools: ToolType[] = ['claude-code', 'github-copilot', 'cursor', 'windsurf', 'gemini-cli', 'codex-cli', 'qwen-code'];
        if (!validTools.includes(options.tool as ToolType)) {
          console.error(chalk.red(`Error: Tool must be one of: ${validTools.join(', ')}`));
          process.exit(1);
        }
        tool = options.tool;
      } else {
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'tool',
            message: 'Which tool do you want to install agents for?',
            choices: [
              { name: 'Claude Code', value: 'claude-code' },
              { name: 'GitHub Copilot', value: 'github-copilot' },
              { name: 'Cursor', value: 'cursor' },
              { name: 'Windsurf IDE', value: 'windsurf' },
              { name: 'Gemini CLI', value: 'gemini-cli' },
              { name: 'Codex CLI', value: 'codex-cli' },
              { name: 'Qwen Code', value: 'qwen-code' },
            ],
          },
        ]);
        tool = answers.tool;
      }

      await installAgents({
        tool,
        targetDir: options.dir,
      });

      console.log(chalk.green('\n✓ Agents installed successfully!'));

      const installPaths: Record<ToolType, string> = {
        'claude-code': '.claude/agents/',
        'github-copilot': '.github/agents/',
        'cursor': '.cursor/agents/',
        'windsurf': '.windsurf/agents/',
        'gemini-cli': '.gemini/agents/',
        'codex-cli': '.codex/agents/',
        'qwen-code': '.qwen/agents/',
      };

      console.log(chalk.cyan(`\nAgents have been installed to ${installPaths[tool]}`));
    } catch (error) {
      console.error(chalk.red('\nError:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

// デフォルトコマンド（引数なしで実行された場合）
program.action(async () => {
  console.log(chalk.cyan.bold('\n🌊 Welcome to Musuhi!\n'));
  console.log('Musuhi helps you install AI agents for Claude Code, GitHub Copilot, Cursor, Windsurf, and AI CLIs.\n');

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'tool',
      message: 'Which tool do you want to install agents for?',
      choices: [
        { name: 'Claude Code', value: 'claude-code' },
        { name: 'GitHub Copilot', value: 'github-copilot' },
        { name: 'Cursor', value: 'cursor' },
        { name: 'Windsurf IDE', value: 'windsurf' },
        { name: 'Gemini CLI', value: 'gemini-cli' },
        { name: 'Codex CLI', value: 'codex-cli' },
        { name: 'Qwen Code', value: 'qwen-code' },
      ],
    },
    {
      type: 'input',
      name: 'targetDir',
      message: 'Target directory:',
      default: process.cwd(),
    },
  ]);

  try {
    await installAgents({
      tool: answers.tool,
      targetDir: answers.targetDir,
    });

    console.log(chalk.green('\n✓ Agents installed successfully!'));

    const installPaths: Record<ToolType, string> = {
      'claude-code': '.claude/agents/',
      'github-copilot': '.github/agents/',
      'cursor': '.cursor/agents/',
      'windsurf': '.windsurf/agents/',
      'gemini-cli': '.gemini/agents/',
      'codex-cli': '.codex/agents/',
      'qwen-code': '.qwen/agents/',
    };

    console.log(chalk.cyan(`\nAgents have been installed to ${installPaths[answers.tool as ToolType]}`));
  } catch (error) {
    console.error(chalk.red('\nError:'), error instanceof Error ? error.message : error);
    process.exit(1);
  }
});

program.parse();
