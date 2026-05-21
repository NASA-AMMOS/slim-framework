---
sidebar_position: 1
---

# About

> _Modernizing software through the automated infusion of best practices._

## What is this?

This is a **Best Practices Marketplace** — a catalog of automated solutions that
AI coding agents can discover and apply. Instead of lengthy documentation, best
practices are delivered as **skills, agents, and MCP servers** that install and
configure themselves in seconds.

It is built on an open-source, reusable framework, so any team can stand up its
own marketplace and customize it for its domain.

**What makes it useful:**
- 🤖 **AI-powered automation** — best practices that apply themselves
- 🎯 **One-command installation** — works with multiple AI tools
- 🔄 **Always up-to-date** — the catalog evolves with industry standards
- 🌐 **Open source** — free to use, fork, and contribute

---

## What it provides

Browse and install automated solutions from the [marketplace](/):

**🎯 Skills**
AI-powered workflows for specialized tasks (README generation, license setup,
security scanning, etc.)

**🔌 MCP Servers**
Integrations with external services (GitHub, Slack, APIs)

**🤖 Agents**
Autonomous multi-step operations (security audits, documentation maintenance,
compliance checks)

The catalog can also **federate** other marketplaces — remote registries appear
alongside the local catalog in a registry picker.

---

## How it works

### For users

1. **Browse** the [marketplace](/)
2. **Install** via your AI tool (e.g. for Claude Code:
   `/plugin install <name>@<marketplace-name>`)
3. **Use** by asking your AI assistant

**Compatible AI tools:** Claude Code, Cursor, Windsurf, Aider, and other AI
assistants with skill / MCP support.

### For contributors

This is a community-driven project. [Contribute](/docs/contribute/submit-best-practice)
by creating new skills or agents, improving existing best practices, or sharing
your expertise.

---

## How it is built

The marketplace follows a **single source of truth** philosophy: everything is
driven from `static/data/registry.json`. The Claude Code plugin manifest
(`.claude-plugin/marketplace.json`) is generated from it automatically by the
build. See the [contributing guide](/docs/contribute/submit-best-practice) for
details.
