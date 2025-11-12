# Musuhi

[日本語版 (Japanese)](./README.ja.md)

**Musuhi** is a specialized AI agent installer for **Specification Driven Development (SDD)** supporting Claude Code, GitHub Copilot, Cursor, Windsurf IDE, and AI CLIs (Gemini, Codex, Qwen). It provides 20 professional AI agents designed to support the entire software development lifecycle from requirements analysis to deployment and maintenance.

## What is Specification Driven Development?

Specification Driven Development is a systematic approach where detailed specifications guide the entire development process. Musuhi's agents help you:

1. **Define Clear Requirements** - Requirements Analyst creates comprehensive specifications
2. **Design Robust Architecture** - System Architect and API Designer plan scalable solutions
3. **Implement with Quality** - Software Developer follows SOLID principles and best practices
4. **Ensure Security & Performance** - Security Auditor and Performance Optimizer verify quality
5. **Deploy with Confidence** - DevOps Engineer and Cloud Architect handle infrastructure
6. **Maintain Excellence** - Orchestrator coordinates all agents for continuous improvement

## Features

- 🎯 **20 Specialized Agents** - Complete SDD workflow coverage
- 🧭 **Project Memory System** - Steering context for consistent, context-aware development (v0.3.0)
- 📝 **EARS Format Support** - Testable, verifiable requirements with Easy Approach to Requirements Syntax (v0.3.1)
- 📐 **SDD Workflow Templates** - Comprehensive templates for requirements, design, tasks, and research (v0.3.2)
- 🌐 **Multi-Platform Support** - Works with Claude Code, GitHub Copilot, Cursor, Windsurf IDE, Gemini CLI, Codex CLI, and Qwen Code (NEW in v0.4.0)
- 🚀 **Quick Installation** - One command via `npx`
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
1. Choose your AI tool (Claude Code, GitHub Copilot, Cursor, Windsurf IDE, Gemini CLI, Codex CLI, or Qwen Code)
2. Specify the target directory (defaults to current directory)

### Command Line Mode

Install agents directly with command-line arguments:

```bash
# For Claude Code
npx musuhi install --tool claude-code

# For GitHub Copilot
npx musuhi install --tool github-copilot

# For Cursor
npx musuhi install --tool cursor

# For Windsurf IDE
npx musuhi install --tool windsurf

# For Gemini CLI
npx musuhi install --tool gemini-cli

# For Codex CLI
npx musuhi install --tool codex-cli

# For Qwen Code
npx musuhi install --tool qwen-code

# Specify a different directory
npx musuhi install --tool claude-code --dir /path/to/project
```

## Directory Structure

### Claude Code
Agents are installed to `.claude/agents/`:

```
your-project/
├── CLAUDE.md              # Project configuration for Claude Code
├── steering/              # Project memory (shared context)
│   ├── structure.md       # Architecture patterns & directory organization
│   ├── tech.md            # Technology stack & framework decisions
│   ├── product.md         # Business context & product purpose
│   ├── rules/             # Development guidelines
│   │   ├── ears-format.md      # EARS requirements syntax guide
│   │   ├── workflow.md         # SDD workflow guide (8 stages)
│   │   └── agent-validation-checklist.md  # Agent quality validation
│   └── templates/         # Document templates
│       ├── requirements.md     # Requirements document template
│       ├── design.md           # Technical design template
│       ├── tasks.md            # Implementation plan template
│       └── research.md         # Research document template
└── .claude/
    ├── README.md          # Agent documentation
    └── agents/            # 20 specialized agents
        ├── steering.md            # Project memory manager
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `CLAUDE.md` file (in project root) provides Claude Code with project-specific context, including:
- Available agents and their purposes
- SDD workflow guidance
- Quick reference commands
- Best practices for using agents

### GitHub Copilot
Agents are installed to `.github/agents/`:

```
your-project/
├── steering/                # Project memory (shared context)
│   ├── structure.md         # Architecture patterns & directory organization
│   ├── tech.md              # Technology stack & framework decisions
│   ├── product.md           # Business context & product purpose
│   ├── rules/               # Development guidelines
│   │   ├── ears-format.md        # EARS requirements syntax guide
│   │   ├── workflow.md           # SDD workflow guide (8 stages)
│   │   └── agent-validation-checklist.md  # Agent quality validation
│   └── templates/           # Document templates
│       ├── requirements.md       # Requirements document template
│       ├── design.md             # Technical design template
│       ├── tasks.md              # Implementation plan template
│       └── research.md           # Research document template
└── .github/
    ├── copilot-instructions.md  # Project configuration for GitHub Copilot
    ├── README.md                # Agent documentation
    └── agents/                  # 20 specialized agents
        ├── steering.md              # Project memory manager
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `.github/copilot-instructions.md` file provides GitHub Copilot with project-specific context, including:
- Available agents and their purposes
- SDD workflow guidance
- Quick reference commands
- Best practices for using agents

### Cursor
Agents are installed to `.cursor/agents/`:

```
your-project/
├── .cursorrules           # Project configuration for Cursor
├── steering/              # Project memory (shared context)
│   ├── structure.md       # Architecture patterns & directory organization
│   ├── tech.md            # Technology stack & framework decisions
│   ├── product.md         # Business context & product purpose
│   ├── rules/             # Development guidelines
│   │   ├── ears-format.md      # EARS requirements syntax guide
│   │   ├── workflow.md         # SDD workflow guide (8 stages)
│   │   └── agent-validation-checklist.md  # Agent quality validation
│   └── templates/         # Document templates
│       ├── requirements.md     # Requirements document template
│       ├── design.md           # Technical design template
│       ├── tasks.md            # Implementation plan template
│       └── research.md         # Research document template
└── .cursor/
    ├── README.md          # Agent documentation
    └── agents/            # 20 specialized agents
        ├── steering.md            # Project memory manager
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `.cursorrules` file provides Cursor with project-specific context and agent usage instructions.

### Windsurf IDE
Agents are installed to `.windsurf/agents/`:

```
your-project/
├── .windsurfrules         # Project configuration for Windsurf IDE
├── steering/              # Project memory (shared context)
│   ├── structure.md       # Architecture patterns & directory organization
│   ├── tech.md            # Technology stack & framework decisions
│   ├── product.md         # Business context & product purpose
│   ├── rules/             # Development guidelines
│   │   ├── ears-format.md      # EARS requirements syntax guide
│   │   ├── workflow.md         # SDD workflow guide (8 stages)
│   │   └── agent-validation-checklist.md  # Agent quality validation
│   └── templates/         # Document templates
│       ├── requirements.md     # Requirements document template
│       ├── design.md           # Technical design template
│       ├── tasks.md            # Implementation plan template
│       └── research.md         # Research document template
└── .windsurf/
    ├── README.md          # Agent documentation
    └── agents/            # 20 specialized agents
        ├── steering.md            # Project memory manager
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The `.windsurfrules` file provides Windsurf IDE with project-specific context and agent usage instructions.

### Gemini CLI, Codex CLI, Qwen Code
Agents are installed to `.gemini/agents/`, `.codex/agents/`, or `.qwen/agents/`:

```
your-project/
├── gemini-config.md       # Project configuration (or codex-config.md / qwen-config.md)
├── steering/              # Project memory (shared context)
│   ├── structure.md       # Architecture patterns & directory organization
│   ├── tech.md            # Technology stack & framework decisions
│   ├── product.md         # Business context & product purpose
│   ├── rules/             # Development guidelines
│   │   ├── ears-format.md      # EARS requirements syntax guide
│   │   ├── workflow.md         # SDD workflow guide (8 stages)
│   │   └── agent-validation-checklist.md  # Agent quality validation
│   └── templates/         # Document templates
│       ├── requirements.md     # Requirements document template
│       ├── design.md           # Technical design template
│       ├── tasks.md            # Implementation plan template
│       └── research.md         # Research document template
└── .gemini/               # (or .codex/ or .qwen/)
    ├── README.md          # Agent documentation
    └── agents/            # 20 specialized agents
        ├── steering.md            # Project memory manager
        ├── orchestrator.md
        ├── code-reviewer.md
        ├── software-developer.md
        └── ... (16 more agents)
```

The config markdown file provides the CLI tool with project-specific context and agent usage instructions. Invoke agents using `@` mentions (e.g., `@orchestrator`, `@requirements-analyst`).

## Project Memory (Steering System)

**NEW in v0.3.0**: Musuhi now includes a **Project Memory** system that acts as a shared context for all agents. This ensures consistent, context-aware development across your entire project.

### What is Project Memory?

The `steering/` directory contains three core files that capture your project's "memory":

- **`structure.md`** - Architecture patterns, directory organization, naming conventions
- **`tech.md`** - Technology stack, frameworks, development tools, technical constraints
- **`product.md`** - Business context, product purpose, target users, core capabilities

### How It Works

1. **Initial Setup**: When you install Musuhi, template steering files are created
2. **Bootstrap**: Use the **Steering Agent** to analyze your codebase and generate project-specific steering files
3. **Automatic Reference**: All agents automatically read steering files to understand your project context
4. **Consistency**: Agents follow your architecture patterns, tech stack, and business requirements
5. **Sync**: Update steering files as your project evolves to keep agents aligned

### Steering Agent

The **Steering Agent** manages your project memory:

```bash
# First time: Bootstrap project memory from codebase analysis
@steering   # (in Claude Code)

# Update: Sync steering files with codebase changes
@steering   # Detects drift and suggests updates

# Review: Check current steering context
@steering   # View current project memory
```

**Modes:**
- **Bootstrap**: Analyze codebase → Generate steering files (first time)
- **Sync**: Compare code vs. steering → Detect drift → Update files
- **Review**: Display current steering context

### Benefits

- ✅ **Consistent Architecture** - All agents follow the same patterns
- ✅ **Tech Stack Awareness** - Agents use your project's frameworks and tools
- ✅ **Business Context** - Development aligned with product goals
- ✅ **Reduced Context Switching** - Project knowledge persists across sessions
- ✅ **Team Alignment** - Shared understanding of project structure and decisions

---

## EARS Format for Requirements

**NEW in v0.3.1**: Musuhi now supports **EARS (Easy Approach to Requirements Syntax)**, a standardized format for writing testable, verifiable acceptance criteria.

### What is EARS?

EARS eliminates ambiguous requirements by providing structured patterns that ensure:
- ✅ **Testability** - Every requirement can be verified with automated tests
- ✅ **Clarity** - No ambiguous language like "should", "might", or "user-friendly"
- ✅ **Traceability** - Direct mapping from requirements to test cases
- ✅ **Consistency** - Standardized format across all requirements

### The 5 EARS Patterns

1. **Event-Driven** - `WHEN [event], the [system] SHALL [response]`
   - Example: `WHEN user clicks "Submit", the Order System SHALL validate all form fields`

2. **State-Driven** - `WHILE [state], the [system] SHALL [response]`
   - Example: `WHILE payment is processing, the Checkout UI SHALL display loading indicator`

3. **Unwanted Behavior** - `IF [error condition], THEN the [system] SHALL [response]`
   - Example: `IF invalid card number is entered, THEN the Payment Form SHALL display "Invalid card number" error`

4. **Optional Features** - `WHERE [feature enabled], the [system] SHALL [response]`
   - Example: `WHERE dark mode is enabled, the UI SHALL use dark color scheme`

5. **Ubiquitous** - `The [system] SHALL [response]`
   - Example: `The User Service SHALL encrypt passwords using bcrypt with cost factor 12`

### EARS in Action

```bash
# Requirements Analyst creates requirements in EARS format
@requirements-analyst Create requirements for user authentication

# Result: Acceptance criteria written as:
# - WHEN user submits valid credentials, the Auth Service SHALL return JWT token
# - IF user enters incorrect password 3 times, THEN the System SHALL lock account
# - The Auth Service SHALL enforce password minimum 12 characters

# Test Engineer converts EARS requirements directly to test cases
@test-engineer Generate tests from requirements

# Result: Each EARS requirement becomes a test:
# test_valid_login_returns_jwt()
# test_three_failed_attempts_locks_account()
# test_password_minimum_length_enforced()
```

### Benefits

- ✅ **Direct Req → Test Mapping** - EARS requirements translate 1:1 to test cases
- ✅ **No Ambiguity** - Every requirement is specific and measurable
- ✅ **Better Coverage** - All scenarios (happy path, errors, edge cases) are explicit
- ✅ **Faster Development** - Developers know exactly what to build
- ✅ **Automated Validation** - Acceptance criteria are machine-verifiable

### EARS Resources

- **Guidelines**: `steering/rules/ears-format.md` - Comprehensive EARS format documentation
- **Template**: `steering/templates/requirements.md` - Requirements document template with EARS examples
- **Agents**: Requirements Analyst, System Architect, and Test Engineer all support EARS format

---

## SDD Workflow Templates

**NEW in v0.3.2**: Musuhi now provides comprehensive document templates and workflow guidance to support the complete Specification Driven Development lifecycle.

### 8-Stage SDD Workflow

Musuhi implements a structured 8-stage workflow from research to deployment:

```
Research → Requirements → Design → Tasks → Implementation → Testing → Deployment → Monitoring
```

**Workflow Guide**: `steering/rules/workflow.md` provides complete details on:
- Quality gates for each phase
- Agent handoff procedures
- Requirements traceability matrices
- Document lifecycle management
- Best practices (DO/DON'T lists)

### Document Templates

All templates include bilingual support (English `.md` and Japanese `.ja.md` versions):

#### 1. Research Document (`steering/templates/research.md`)
**Purpose**: Technical research and options analysis
**When to use**: Before starting requirements when technical decisions need investigation

**Sections**:
- Research questions and methodology
- Options analysis with pros/cons
- Comparison matrix
- Recommendation with rationale
- Risk assessment

#### 2. Requirements Document (`steering/templates/requirements.md`)
**Purpose**: Define WHAT the system must do
**Agent**: `@requirements-analyst`

**Sections**:
- Functional requirements in EARS format
- Non-functional requirements (performance, security, scalability)
- User stories with acceptance criteria
- Requirements traceability matrix
- MoSCoW prioritization

#### 3. Design Document (`steering/templates/design.md`)
**Purpose**: Define HOW the system will be built
**Agent**: `@system-architect`

**Sections**:
- Architecture pattern selection (with justification)
- C4 model diagrams (context, container, component)
- Component specifications with EARS mapping
- API design, database schema, security design
- Sequence diagrams for major flows
- Technology stack alignment
- Appendix: EARS requirements cross-reference

#### 4. Tasks Document (`steering/templates/tasks.md`)
**Purpose**: Break design into actionable implementation tasks
**Agent**: `@project-manager` or `@software-developer`

**Sections**:
- Phase-based task organization with dependencies
- Each task includes: Description, EARS-based acceptance criteria, subtasks, requirements mapped, design references
- Requirements coverage matrix (ensures 100% coverage)
- Team assignments and timeline (Gantt chart)
- Definition of Done checklist
- Appendix: EARS-to-test mapping guide

### Traceability Throughout

All templates enforce bidirectional traceability:

```
Requirement ↔ Design Component ↔ Task ↔ Code ↔ Test
```

**Example**:
- `REQ-001`: WHEN user clicks submit, System SHALL validate
  → **Design**: `FormValidator` component (design.md section 4.2)
  → **Task**: Task 2.3 "Implement form validation"
  → **Code**: `src/validators/FormValidator.ts:25`
  → **Test**: `tests/FormValidator.test.ts:test_submit_validation()`

### Quality Gates

Each workflow stage has clear completion criteria:

- **Requirements Gate**: All requirements in EARS format, stakeholder approved
- **Design Gate**: All requirements mapped to design, architecture aligned with steering
- **Implementation Gate**: Code review passed, 80%+ test coverage, no critical bugs
- **Testing Gate**: All EARS requirements tested, all tests passing
- **Deployment Gate**: Staging deployment successful, monitoring configured

### How to Use

```bash
# 1. (Optional) Research technical options
# Create: research.md using template

# 2. Define requirements with Requirements Analyst
@requirements-analyst Create requirements for [feature]
# Output: requirements.md with EARS acceptance criteria

# 3. Design architecture with System Architect
@system-architect Design [feature] based on requirements.md
# Output: design.md with component specifications and EARS mapping

# 4. Create implementation plan
@project-manager Create tasks from design.md
# Output: tasks.md with requirements coverage matrix

# 5. Implement with Software Developer
@software-developer Implement Task 2.1 from tasks.md
# Developers reference requirement IDs in code comments

# 6. Test with Test Engineer
@test-engineer Generate tests from requirements.md
# EARS requirements convert directly to test cases

# 7. Deploy
@devops-engineer Deploy following tasks.md timeline

# 8. Monitor
@performance-optimizer Monitor production metrics
```

### Template Resources

- **Workflow Guide**: `steering/rules/workflow.md` - Complete 8-stage SDD workflow
- **Validation**: `steering/rules/agent-validation-checklist.md` - Agent quality validation framework
- **Templates Directory**: `steering/templates/` - All document templates with examples

### Benefits

- ✅ **Structured Process** - Clear workflow from requirements to deployment
- ✅ **Complete Traceability** - Track every requirement through to code and tests
- ✅ **Quality Assurance** - Quality gates prevent incomplete work from advancing
- ✅ **Team Coordination** - Standardized documents improve handoffs between roles
- ✅ **Comprehensive Coverage** - Requirements coverage matrix ensures nothing is missed
- ✅ **Bilingual Support** - All templates available in English and Japanese

---

## Available Agents (20 Specialists)

### 🎭 Orchestration
- **Orchestrator** - Master coordinator managing all 19 specialized agents for Specification Driven Development workflows, handling task decomposition, agent selection, and result integration
- **Steering Agent** - 🧭 Project memory manager that analyzes codebase to generate and maintain steering context (architecture patterns, tech stack, business context) for consistent development

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
