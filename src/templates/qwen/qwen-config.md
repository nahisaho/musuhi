# Project Configuration for Qwen Code

This project uses **Musuhi** - a Specification Driven Development (SDD) agent system with 20 specialized AI agents.

## 🧭 Project Memory (Steering System)

**CRITICAL - Read This First**: Before starting any task, check if steering files exist:
- `steering/structure.md` - Architecture patterns, directory organization, naming conventions
- `steering/tech.md` - Technology stack, frameworks, development tools, technical constraints
- `steering/product.md` - Business context, product purpose, target users, core capabilities

**If these files exist, ALWAYS read them first** to understand project context. These files are the project's "memory" and are essential for consistent development.

If steering files don't exist yet, you can generate them by analyzing the codebase.

---

## Available Agents

This project has 20 specialized agents installed in `.qwen/agents/`. Each agent is an expert in a specific domain of software development.

### 🎭 Orchestration

**Orchestrator** (`@orchestrator`)
- Master coordinator managing all 19 specialized agents
- Automatically selects the right agents for your task
- Coordinates their execution and manages dependencies
- Integrates and validates all outputs
- **Usage**: `@orchestrator [describe your complete task]`

**Steering Agent** (`@steering`)
- 🧭 Project memory manager
- Analyzes codebase to generate/maintain steering context
- Three modes: Bootstrap (first time), Sync (update), Review (view current state)
- **Usage**: `@steering` (will detect which mode is appropriate)

---

## Agent Categories

### 📋 Requirements & Planning
- `@requirements-analyst` - Requirements analysis, user stories, EARS format, SRS documents, acceptance criteria
- `@project-manager` - Project planning, scheduling, risk management, progress tracking, team coordination

### 🏗️ Architecture & Design
- `@system-architect` - System architecture, C4 diagrams, ADR, tradeoff analysis, EARS requirements mapping
- `@api-designer` - REST/GraphQL/gRPC API design, OpenAPI specs, API best practices, endpoint documentation
- `@database-schema-designer` - Database design, ER diagrams, DDL generation, normalization, indexing strategies
- `@ui-ux-designer` - UI/UX design, wireframes, prototypes, design systems, usability testing

### 💻 Development & Implementation
- `@software-developer` - Multi-language code implementation (TypeScript, Python, Java, Go, etc.), SOLID principles, design patterns, clean architecture
- `@test-engineer` - Unit, integration, E2E testing (Jest, Pytest, Cypress, Playwright), EARS-to-test mapping

### 🔍 Quality & Review
- `@code-reviewer` - Comprehensive code review, SOLID principles, best practices, security, performance
- `@bug-hunter` - Bug investigation, root cause analysis, systematic debugging, fix generation
- `@quality-assurance` - QA strategy, test planning, quality metrics, comprehensive testing coordination

### 🔐 Security & Performance
- `@security-auditor` - OWASP Top 10 checks, authentication/authorization review, encryption validation, vulnerability detection
- `@performance-optimizer` - Performance analysis, bottleneck detection, optimization strategies, profiling, benchmarking

### ☁️ Infrastructure & Operations
- `@devops-engineer` - CI/CD pipelines, Docker/Kubernetes deployment, infrastructure automation, monitoring setup
- `@cloud-architect` - AWS/Azure/GCP architecture, IaC (Terraform/Bicep), cost optimization, cloud-native design
- `@database-administrator` - Database operations, performance tuning, backup/recovery, monitoring, high availability

### 📚 Documentation & Specialized
- `@technical-writer` - Technical documentation, API docs, user guides, README files, comprehensive project documentation
- `@ai-ml-engineer` - Machine learning model development, training, evaluation, deployment, MLOps practices

---

## Specification Driven Development Workflow

### 8-Stage SDD Workflow

Musuhi implements a structured workflow from research to deployment:

```
Research → Requirements → Design → Tasks → Implementation → Testing → Deployment → Monitoring
```

**Complete Guide**: See `steering/rules/workflow.md` for:
- Quality gates for each phase
- Agent handoff procedures
- Requirements traceability matrices
- Document lifecycle management
- Best practices (DO/DON'T lists)

### Document Templates

All templates support bilingual documentation (English `.md` and Japanese `.ja.md`):

1. **Research Document** (`steering/templates/research.md`)
   - Technical research and options analysis
   - Use before requirements when technical decisions need investigation

2. **Requirements Document** (`steering/templates/requirements.md`)
   - Define WHAT the system must do
   - EARS-format functional requirements
   - Non-functional requirements (performance, security, scalability)
   - User stories with acceptance criteria
   - Requirements traceability matrix
   - **Agent**: `@requirements-analyst`

3. **Design Document** (`steering/templates/design.md`)
   - Define HOW the system will be built
   - Architecture pattern selection with justification
   - C4 model diagrams (context, container, component)
   - Component specifications with EARS mapping
   - API design, database schema, security design
   - **Agent**: `@system-architect`

4. **Tasks Document** (`steering/templates/tasks.md`)
   - Break design into actionable implementation tasks
   - Phase-based task organization with dependencies
   - EARS-based acceptance criteria for each task
   - Requirements coverage matrix (ensures 100% coverage)
   - Team assignments and timeline (Gantt chart)
   - **Agent**: `@project-manager` or `@software-developer`

### Requirements Traceability

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

---

## EARS Format (Easy Approach to Requirements Syntax)

Musuhi supports **EARS** - a standardized format for writing testable, verifiable acceptance criteria.

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

### EARS Resources

- **Guidelines**: `steering/rules/ears-format.md` - Comprehensive EARS format documentation
- **Template**: `steering/templates/requirements.md` - Requirements document template with EARS examples
- **Agents**: Requirements Analyst, System Architect, and Test Engineer all support EARS format

### Benefits

- ✅ Direct Req → Test Mapping - EARS requirements translate 1:1 to test cases
- ✅ No Ambiguity - Every requirement is specific and measurable
- ✅ Better Coverage - All scenarios (happy path, errors, edge cases) are explicit
- ✅ Faster Development - Developers know exactly what to build

---

## Typical Project Flow

```
# 1. (Optional) Research technical options
# Output: research.md

# 2. Define requirements
@requirements-analyst Create requirements for [feature]
# Output: requirements.md with EARS acceptance criteria

# 3. Design architecture
@system-architect Design [feature] based on requirements.md
# Output: design.md with component specifications and EARS mapping

# 4. Create implementation plan
@project-manager Create tasks from design.md
# Output: tasks.md with requirements coverage matrix

# 5. Implement
@software-developer Implement Task 2.1 from tasks.md
# Developers reference requirement IDs in code comments

# 6. Test
@test-engineer Generate tests from requirements.md
# EARS requirements convert directly to test cases

# 7. Deploy
@devops-engineer Deploy following tasks.md timeline

# 8. Monitor
@performance-optimizer Monitor production metrics
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
@orchestrator Create a complete e-commerce platform with:
- User authentication
- Product catalog
- Shopping cart
- Payment integration
Start from requirements and create a full implementation plan.
```

The Orchestrator will automatically:
1. Ask for your language preference (English/Japanese)
2. Select appropriate agents (Requirements Analyst → System Architect → API Designer → Software Developer → Test Engineer → Security Auditor)
3. Coordinate their execution
4. Manage dependencies between tasks
5. Integrate and validate all outputs

---

## Quality Gates

Each workflow stage has clear completion criteria:

- **Requirements Gate**: All requirements in EARS format, stakeholder approved
- **Design Gate**: All requirements mapped to design, architecture aligned with steering
- **Implementation Gate**: Code review passed, 80%+ test coverage, no critical bugs
- **Testing Gate**: All EARS requirements tested, all tests passing
- **Deployment Gate**: Staging deployment successful, monitoring configured

---

## Documentation Standards

### Language Policy

**CRITICAL: Create both English and Japanese versions**

1. **Primary Language**: Create all documentation in **English** first
2. **Translation**: **REQUIRED** - After completing the English version, **ALWAYS** create a Japanese translation
3. **Both versions are MANDATORY** - Never skip the Japanese version
4. **File Naming Convention**:
   - English version: `filename.md`
   - Japanese version: `filename.ja.md`

### Document Reference

**CRITICAL: Always reference English documentation**

1. **Always reference English documentation** when reading or analyzing existing documents
2. When citing documentation in your deliverables, reference the English version

**Examples:**
```
✅ Correct: requirements/srs/srs-project-v1.0.md
❌ Wrong: requirements/srs/srs-project-v1.0.ja.md
```

---

## Quick Reference Commands

### First Time Setup
```
@steering               # Analyze codebase and generate project memory
```

### Complex Multi-Agent Tasks
```
@orchestrator [task]    # Automatically coordinates multiple agents
```

### Specific Agent Tasks
```
@requirements-analyst   # Requirements analysis
@system-architect       # Architecture design
@api-designer           # API design
@software-developer     # Implementation
@test-engineer          # Testing
@security-auditor       # Security review
@devops-engineer        # Deployment
```

---

## Best Practices

### DO:
- ✅ Always start with requirements (EARS format)
- ✅ Reference `steering/` context in every stage
- ✅ Maintain traceability from requirements to code
- ✅ Write tests based on EARS acceptance criteria
- ✅ Update documents when changes occur
- ✅ Use templates from `steering/templates/`

### DON'T:
- ❌ Skip requirements documentation
- ❌ Write code before design
- ❌ Ignore EARS format guidelines
- ❌ Break traceability links
- ❌ Deploy without testing
- ❌ Forget to update steering context

---

## Resources

- **Workflow Guide**: `steering/rules/workflow.md` - Complete 8-stage SDD workflow
- **EARS Format**: `steering/rules/ears-format.md` - Requirements syntax guide
- **Templates**: `steering/templates/` - All document templates with examples
- **Validation**: `steering/rules/agent-validation-checklist.md` - Agent quality framework

---

**Powered by Musuhi** - Specification Driven Development for AI-assisted coding

**Installation**: `npx musuhi@latest`
**GitHub**: https://github.com/nahisaho/musuhi
