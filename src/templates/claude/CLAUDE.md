# Project Configuration for Claude Code

This project uses **Musuhi** - a Specification Driven Development (SDD) agent system with 19 specialized AI agents.

## Available Agents

This project has 19 specialized agents installed in `.claude/agents/`. Each agent is an expert in a specific domain of software development.

### 🎭 Start Here: Orchestrator

The **Orchestrator** is your main entry point for complex tasks. It automatically:
- Selects the right agents for your task
- Coordinates their execution
- Manages dependencies between tasks
- Integrates and validates all outputs

**Usage**: `@orchestrator [describe your task]`

**Language Support**: The Orchestrator will ask you to choose between English or Japanese for console output when you first invoke it.

---

## Agent Categories

### 📋 Requirements & Planning
- `@requirements-analyst` - Requirements analysis, user stories, SRS documents
- `@project-manager` - Project planning, scheduling, risk management

### 🏗️ Architecture & Design
- `@system-architect` - System architecture, C4 diagrams, ADR
- `@api-designer` - REST/GraphQL/gRPC API design, OpenAPI specs
- `@database-schema-designer` - Database design, ER diagrams, DDL
- `@ui-ux-designer` - UI/UX design, wireframes, prototypes

### 💻 Development & Implementation
- `@software-developer` - Multi-language code implementation
- `@test-engineer` - Unit, integration, E2E testing

### 🔍 Quality & Review
- `@code-reviewer` - Code review, SOLID principles, best practices
- `@bug-hunter` - Bug investigation, root cause analysis
- `@quality-assurance` - QA strategy, test planning

### 🔐 Security & Performance
- `@security-auditor` - OWASP Top 10, vulnerability detection
- `@performance-optimizer` - Performance analysis, optimization

### ☁️ Infrastructure & Operations
- `@devops-engineer` - CI/CD pipelines, Docker/Kubernetes
- `@cloud-architect` - AWS/Azure/GCP, IaC (Terraform/Bicep)
- `@database-administrator` - Database operations, tuning

### 📚 Documentation & Specialized
- `@technical-writer` - Technical documentation, API docs
- `@ai-ml-engineer` - ML model development, MLOps

---

## Specification Driven Development Workflow

### Typical Project Flow

```
1. Requirements → @requirements-analyst
2. Architecture → @system-architect
3. API Design → @api-designer
4. Database Design → @database-schema-designer
5. Implementation → @software-developer
6. Testing → @test-engineer
7. Security Review → @security-auditor
8. Deployment → @devops-engineer
```

### Using Individual Agents

Each agent follows a structured 5-phase dialogue:

1. **Initial Hearing** - Ask basic questions one by one
2. **Detailed Hearing** - Dig deeper based on responses
3. **Confirmation** - Verify collected information
4. **Deliverable Generation** - Create artifacts
5. **Completion Report** - Summarize and suggest next steps

### Using the Orchestrator

For complex tasks that require multiple agents:

```
@orchestrator Create a complete task management system with:
- User authentication
- Task CRUD operations
- Real-time updates
- RESTful API
- PostgreSQL database
- React frontend
Start from requirements and create a full implementation plan.
```

The Orchestrator will:
1. Ask for your language preference (English/Japanese)
2. Analyze your request
3. Select appropriate agents
4. Create an execution plan
5. Coordinate agent execution
6. Integrate all outputs
7. Generate a comprehensive report

---

## Documentation Standards

All agents follow these documentation standards:

- **Primary Language**: English (`.md` files)
- **Translation**: Japanese versions (`.ja.md` files)
- **File Naming**:
  - English: `document-name.md`
  - Japanese: `document-name.ja.md`
- **References**: Always reference English versions in code and documentation

---

## Output Directory Structure

Agents organize their outputs in structured directories:

```
project-root/
├── requirements/          # Requirements Analyst outputs
├── architecture/          # System Architect outputs
├── api-design/           # API Designer outputs
├── database/             # Database Schema Designer outputs
├── code-review/          # Code Reviewer reports
├── security-audit/       # Security Auditor reports
├── performance/          # Performance Optimizer reports
├── orchestrator/         # Orchestrator execution plans and reports
│   ├── plans/
│   ├── logs/
│   └── reports/
└── docs/                 # Technical Writer outputs
```

---

## Best Practices

### 1. Start with Requirements
Always begin with `@requirements-analyst` for new features to ensure clear specifications.

### 2. Use the Orchestrator for Complex Tasks
Let the Orchestrator coordinate multiple agents for complex workflows.

### 3. Review Before Implementation
Use `@code-reviewer` to review existing code before starting refactoring.

### 4. Security First
Run `@security-auditor` before deploying any authentication or data handling code.

### 5. Document as You Go
Invoke `@technical-writer` to document features as they're completed.

---

## Quick Reference

### Common Commands

```bash
# Requirements Analysis
@requirements-analyst Create specifications for [feature]

# Architecture Design
@system-architect Design architecture for [system]

# API Design
@api-designer Create REST API for [resource]

# Database Design
@database-schema-designer Design schema for [domain]

# Code Implementation
@software-developer Implement [feature] using [technology]

# Code Review
@code-reviewer Review [file/directory]

# Testing
@test-engineer Create tests for [component]

# Security Audit
@security-auditor Audit [component] for vulnerabilities

# Performance Optimization
@performance-optimizer Optimize [component]

# Deployment
@devops-engineer Create CI/CD pipeline for [project]

# Full Workflow (Orchestrator)
@orchestrator [Complete task description]
```

---

## Customization

You can customize agent behavior by editing the markdown files in `.claude/agents/`:

1. **Add Company Guidelines** - Edit agents to include your coding standards
2. **Modify Dialogue Flow** - Adjust the 5-phase conversation structure
3. **Change Output Directories** - Update file management rules
4. **Add Custom Checklists** - Include project-specific verification steps

---

## Support

- **Documentation**: See `.claude/README.md` for agent details
- **Agent Files**: Browse `.claude/agents/*.md` for individual agent prompts
- **Project Repository**: https://github.com/nahisaho/musuhi

---

*This project uses Musuhi for Specification Driven Development. Learn more about SDD and Musuhi at the project repository.*
