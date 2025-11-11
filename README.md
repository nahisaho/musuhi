# Musuhi (結び)

[日本語版 (Japanese)](./README.ja.md)

**Musuhi** is a specialized AI agent installer for **Specification Driven Development (SDD)** with Claude Code and GitHub Copilot. It provides 19 professional AI agents designed to support the entire software development lifecycle from requirements analysis to deployment and maintenance.

## What is Specification Driven Development?

Specification Driven Development is a systematic approach where detailed specifications guide the entire development process. Musuhi's agents help you:

1. **Define Clear Requirements** - Requirements Analyst creates comprehensive specifications
2. **Design Robust Architecture** - System Architect and API Designer plan scalable solutions
3. **Implement with Quality** - Software Developer follows SOLID principles and best practices
4. **Ensure Security & Performance** - Security Auditor and Performance Optimizer verify quality
5. **Deploy with Confidence** - DevOps Engineer and Cloud Architect handle infrastructure
6. **Maintain Excellence** - Orchestrator coordinates all agents for continuous improvement

## Features

- 🎯 **19 Specialized Agents** - Complete SDD workflow coverage
- 🚀 **Quick Installation** - One command via `npx`
- 🔄 **Claude Code & GitHub Copilot** - Works with both platforms
- 📋 **Orchestrator Agent** - Coordinates multi-agent workflows
- 🔧 **Fully Customizable** - Adapt agents to your project needs
- 📚 **Best Practices Built-in** - SOLID, OWASP, C4 Model, ADR, and more

## Installation

You can use Musuhi directly with `npx` without installing it globally:

```bash
npx musuhi
```

Or install it globally:

```bash
npm install -g musuhi
```

## Usage

### Interactive Mode

Run Musuhi without arguments for an interactive setup:

```bash
npx musuhi
```

You'll be prompted to:
1. Choose between Claude Code or GitHub Copilot
2. Specify the target directory (defaults to current directory)

### Command Line Mode

Install agents directly with command-line arguments:

```bash
# For Claude Code
npx musuhi install --tool claude-code

# For GitHub Copilot
npx musuhi install --tool github-copilot

# Specify a different directory
npx musuhi install --tool claude-code --dir /path/to/project
```

## Directory Structure

### Claude Code
Agents are installed to `.claude/agents/`:

```
your-project/
└── .claude/
    ├── CLAUDE.md          # Project configuration for Claude Code
    ├── README.md          # Agent documentation
    └── agents/            # 19 specialized agents
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `CLAUDE.md` file provides Claude Code with project-specific context, including:
- Available agents and their purposes
- SDD workflow guidance
- Quick reference commands
- Best practices for using agents

### GitHub Copilot
Agents are installed to `.github/agents/`:

```
your-project/
└── .github/
    ├── copilot-instructions.md  # Project configuration for GitHub Copilot
    ├── README.md                # Agent documentation
    └── agents/                  # 19 specialized agents
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `copilot-instructions.md` file provides GitHub Copilot with project-specific context, including:
- Available agents and their purposes
- SDD workflow guidance
- Quick reference commands
- Best practices for using agents

## Available Agents (19 Specialists)

### 🎭 Orchestration
- **Orchestrator** - Master coordinator managing all 18 specialized agents for Specification Driven Development workflows, handling task decomposition, agent selection, and result integration

### 📋 Requirements & Planning
- **Requirements Analyst** - Requirements analysis, user story creation, specification definition, SRS documents, and acceptance criteria
- **Project Manager** - Project planning, scheduling, risk management, progress tracking, and team coordination

### 🏗️ Architecture & Design
- **System Architect** - Architecture design, C4 model diagrams, ADR creation, tradeoff analysis, and technology selection
- **API Designer** - REST/GraphQL/gRPC API design, OpenAPI specifications, API best practices, and endpoint documentation
- **Database Schema Designer** - ER diagrams, normalization, DDL generation, indexing strategies, and schema optimization
- **UI/UX Designer** - User interface design, wireframes, prototypes, design systems, and usability testing

### 💻 Development & Implementation
- **Software Developer** - Multi-language code implementation (TypeScript, Python, Java, Go, etc.), SOLID principles, design patterns, and clean architecture
- **Test Engineer** - Unit, integration, and E2E testing across Jest, Pytest, Cypress, Playwright, and other frameworks

### 🔍 Quality & Review
- **Code Reviewer** - Comprehensive code review focusing on quality, security, SOLID principles, performance, and best practices
- **Bug Hunter** - Bug investigation, root cause analysis, systematic debugging, and fix generation
- **Quality Assurance** - QA strategy, test planning, quality metrics, and comprehensive testing coordination

### 🔐 Security & Performance
- **Security Auditor** - OWASP Top 10 checks, authentication/authorization review, encryption validation, and vulnerability detection
- **Performance Optimizer** - Performance analysis, bottleneck detection, optimization strategies, profiling, and benchmarking

### ☁️ Infrastructure & Operations
- **DevOps Engineer** - CI/CD pipelines, Docker/Kubernetes deployment, infrastructure automation, and monitoring setup
- **Cloud Architect** - AWS/Azure/GCP architecture, IaC (Terraform/Bicep), cost optimization, and cloud-native design
- **Database Administrator** - Database operations, performance tuning, backup/recovery, monitoring, and high availability

### 📚 Documentation & Specialized
- **Technical Writer** - Technical documentation, API docs, user guides, README files, and comprehensive project documentation
- **AI/ML Engineer** - Machine learning model development, training, evaluation, deployment, and MLOps practices

### Key Capabilities
- **Interactive Dialogue** - Each agent uses structured 5-phase conversations to gather requirements
- **Documentation Standards** - English-first documentation with Japanese translations (`.md` and `.ja.md`)
- **Best Practices** - Built-in adherence to SOLID, OWASP, C4 Model, ADR, TDD, DDD, and more
- **File Management** - Organized output directories with progress tracking and traceability

## Usage Examples

### Starting a New Project (Specification Driven Development Workflow)

```
# 1. Requirements Analysis
@requirements-analyst I need to build a task management web application

# 2. Architecture Design
@system-architect Design architecture for the task management system based on requirements-specification.md

# 3. API Design
@api-designer Create REST API specifications for the task management endpoints

# 4. Database Design
@database-schema-designer Design database schema based on the API specifications

# 5. Implementation
@software-developer Implement the task API endpoints using TypeScript and Express

# 6. Testing
@test-engineer Create comprehensive tests for the task management API

# 7. Security Review
@security-auditor Audit the authentication and authorization implementation

# 8. Deployment
@devops-engineer Set up CI/CD pipeline for the task management application
```

### Using the Orchestrator for Complex Tasks

```
@orchestrator Create a complete e-commerce platform with user authentication,
product catalog, shopping cart, and payment integration. Start from requirements.
```

**Language Selection**: When you first invoke the Orchestrator, it will ask you to choose your preferred language (English or Japanese) for console output. Your choice will be remembered throughout the session.

```
🎭 Orchestrator AI

Welcome! / ようこそ！

Which language would you like to use for console output?
コンソール出力にどちらの言語を使用しますか？

Please select / 選択してください:
a) English
b) 日本語 (Japanese)
```

The Orchestrator will automatically:
- Select appropriate agents (Requirements Analyst → System Architect → API Designer → Software Developer → Test Engineer → Security Auditor)
- Coordinate their execution
- Manage dependencies between tasks
- Integrate and validate outputs

### Code Review Workflow

```
@code-reviewer Review the authentication module in src/auth/

@bug-hunter Investigate the intermittent login failure issue

@performance-optimizer Analyze and optimize the product search query performance
```

### Documentation Workflow

```
@technical-writer Create API documentation based on the OpenAPI specification

@technical-writer Generate user guide for the task management features
```

## Customization

After installation, you can customize the agent templates by editing the markdown files in the `agents/` directory. Add project-specific guidelines, coding standards, or modify the agent behavior to suit your needs.

### Example Customizations

1. **Add Company-Specific Guidelines**
   - Edit `code-reviewer.md` to include your coding standards
   - Update `security-auditor.md` with company security policies

2. **Configure Agent Behavior**
   - Adjust the 5-phase dialogue flow
   - Modify output directory structures
   - Add custom checklists

3. **Language Preferences**
   - All agents support English and Japanese documentation
   - Customize the language policy in each agent file

## Development

To contribute or modify Musuhi:

```bash
# Clone the repository
git clone https://github.com/nahisaho/musuhi.git
cd musuhi

# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm link
musuhi --help
```

## Why "Musuhi"?

"Musuhi" (結び) is a Japanese word meaning "connection" or "binding". It represents the tool's purpose of connecting developers with AI agents, binding useful templates to your projects.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
