# Contributing to Musuhi

Thank you for your interest in contributing to Musuhi!

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/musuhi.git
cd musuhi
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Test locally:
```bash
npm link
musuhi --help
```

## Project Structure

```
musuhi/
├── bin/                  # CLI entry point
├── src/                  # TypeScript source code
│   ├── cli.ts           # CLI logic
│   ├── installer.ts     # Installation logic
│   ├── types.ts         # Type definitions
│   └── templates/       # Agent templates
├── dist/                # Built files
└── README.md
```

## Adding New Agents

To add a new agent template:

1. Create a new markdown file in `src/templates/agents/`
2. Follow the existing agent format
3. Include clear instructions and examples
4. Update the README if necessary

## Code Style

- Use TypeScript strict mode
- Follow the existing code style
- Add JSDoc comments for public functions
- Use meaningful variable and function names

## Testing

Before submitting a PR:

1. Build the project: `npm run build`
2. Test the CLI: `npm link && musuhi install --tool claude-code`
3. Verify the installed files are correct

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Build and test
5. Commit with a clear message
6. Push to your fork
7. Submit a pull request

## Reporting Issues

When reporting issues, please include:

- Node.js version
- npm version
- Operating system
- Steps to reproduce
- Expected behavior
- Actual behavior

## Questions?

Feel free to open an issue for any questions or suggestions!
