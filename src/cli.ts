#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { installAgents } from './installer';
import type { ToolType } from './types';

const program = new Command();

program
  .name('musuhi')
  .description('Agent installer for Claude Code and GitHub Copilot')
  .version('0.1.0');

program
  .command('install')
  .description('Install agents for Claude Code or GitHub Copilot')
  .option('-t, --tool <tool>', 'Tool type (claude-code or github-copilot)')
  .option('-d, --dir <directory>', 'Target directory', process.cwd())
  .action(async (options) => {
    try {
      let tool: ToolType;

      if (options.tool) {
        if (options.tool !== 'claude-code' && options.tool !== 'github-copilot') {
          console.error(chalk.red('Error: Tool must be either "claude-code" or "github-copilot"'));
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

      if (tool === 'claude-code') {
        console.log(chalk.cyan('\nAgents have been installed to .claude/agents/'));
      } else {
        console.log(chalk.cyan('\nAgents have been installed to .github/agents/'));
      }
    } catch (error) {
      console.error(chalk.red('\nError:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

// デフォルトコマンド（引数なしで実行された場合）
program.action(async () => {
  console.log(chalk.cyan.bold('\n🌊 Welcome to Musuhi!\n'));
  console.log('Musuhi helps you install AI agents for Claude Code and GitHub Copilot.\n');

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'tool',
      message: 'Which tool do you want to install agents for?',
      choices: [
        { name: 'Claude Code', value: 'claude-code' },
        { name: 'GitHub Copilot', value: 'github-copilot' },
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

    if (answers.tool === 'claude-code') {
      console.log(chalk.cyan('\nAgents have been installed to .claude/agents/'));
    } else {
      console.log(chalk.cyan('\nAgents have been installed to .github/agents/'));
    }
  } catch (error) {
    console.error(chalk.red('\nError:'), error instanceof Error ? error.message : error);
    process.exit(1);
  }
});

program.parse();
