# Musuhi Agents for Gemini CLI

This directory contains 20 specialized AI agents for Specification Driven Development (SDD).

## Configuration

The `gemini-config.md` file in your project root provides Gemini CLI with:
- Available agents and their purposes
- SDD workflow guidance (8 stages)
- EARS format requirements syntax
- Project memory (steering) system instructions
- Document templates and traceability guidelines
- Quality gates for each development phase

## Agents Directory

All 20 agents are installed in `.gemini/agents/`:
- `orchestrator.md` - Master coordinator
- `steering.md` - Project memory manager
- `requirements-analyst.md`
- `system-architect.md`
- ... (16 more agents)

## Usage

Invoke agents using the `@` mention in Gemini CLI:

```
@orchestrator Create a task management system
@requirements-analyst Define requirements for user authentication
@software-developer Implement the login API
```

## Steering System (Project Memory)

Before starting work, agents will check for project memory in `steering/`:
- `steering/structure.md` - Architecture patterns, directory organization
- `steering/tech.md` - Technology stack, frameworks, development tools
- `steering/product.md` - Business context, product purpose, target users

Generate steering files by analyzing your codebase:
```
@steering
```

## Document Templates

Use templates from `steering/templates/`:
- `research.md` - Technical research and options analysis
- `requirements.md` - EARS-format requirements
- `design.md` - Technical design with EARS mapping
- `tasks.md` - Implementation plan with coverage matrix

## EARS Format

All requirements use EARS (Easy Approach to Requirements Syntax):
- `WHEN [event], the [system] SHALL [response]`
- `WHILE [state], the [system] SHALL [response]`
- `IF [error], THEN the [system] SHALL [response]`
- `WHERE [feature enabled], the [system] SHALL [response]`
- `The [system] SHALL [requirement]`

**Guide**: `steering/rules/ears-format.md`

## Resources

- **Workflow**: `steering/rules/workflow.md` - 8-stage SDD workflow
- **EARS Format**: `steering/rules/ears-format.md` - Requirements syntax guide
- **Templates**: `steering/templates/` - All document templates
- **Validation**: `steering/rules/agent-validation-checklist.md`

---

**Powered by Musuhi** - Specification Driven Development for AI-assisted coding

**Installation**: `npx musuhi@latest`
**GitHub**: https://github.com/nahisaho/musuhi
