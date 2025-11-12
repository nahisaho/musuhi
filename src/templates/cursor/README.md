# Musuhi Agents for Cursor

This directory contains 20 specialized AI agents for Specification Driven Development (SDD).

## Configuration

The `.cursorrules` file in your project root provides Cursor with:
- Available agents and their purposes
- SDD workflow guidance
- EARS format requirements syntax
- Project memory (steering) system instructions
- Quick reference commands

## Agents Directory

All 20 agents are installed in `.cursor/agents/`:
- `orchestrator.md` - Master coordinator
- `steering.md` - Project memory manager
- `requirements-analyst.md`
- `system-architect.md`
- ... (16 more agents)

## Usage

Invoke agents using the `@` mention in Cursor:

```
@orchestrator Create a task management system
@requirements-analyst Define requirements for user authentication
@software-developer Implement the login API
```

## Steering System

Before starting work, agents will check for project memory in `steering/`:
- `steering/structure.md` - Architecture patterns
- `steering/tech.md` - Technology stack
- `steering/product.md` - Business context

Generate steering files with:
```
@steering
```

## Resources

- **Workflow**: `steering/rules/workflow.md`
- **EARS Format**: `steering/rules/ears-format.md`
- **Templates**: `steering/templates/`

---

**Powered by Musuhi** - Specification Driven Development for AI-assisted coding
