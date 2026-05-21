# Frequently Asked Questions (FAQ)

> _Common questions about the marketplace and how to get started with AI-powered
> best practices._

---

### Q: What is this marketplace for?

It automates best practices across the software development lifecycle. Use it to:

- Generate and maintain changelogs, READMEs, and documentation
- Create meeting agendas and summaries with action items
- Set up project governance (codes of conduct, contributing guidelines, issue templates)
- Implement security audits and vulnerability scanning
- Add licensing and intellectual property documentation
- Configure testing frameworks and continuous integration
- Connect to external services (GitHub, Slack, Jira) via MCP servers
- Create custom workflows and skill templates
- and more...

It is ideal for standardizing practices across projects, onboarding teams
faster, and modernizing codebases without manual implementation.

---

### Q: What do I need to use these best practices?

You're recommended to have an _agentic_ AI tool installed, such as:

- **Claude Code** — command-line AI agent by Anthropic
- **Cursor** — AI-powered code editor
- **Windsurf** — agentic IDE
- **Aider** — AI pair programming in your terminal
- Other AI assistants with skill / MCP support

**Important:** the AI tool needs to be an _agentic_ tool — not a browser-based
chatbot. It should be able to read/write files, execute commands, and automate
workflows.

**Using an individual best practice:** browse the [marketplace](/), select a
best practice, and click **Install** to see installation instructions. After
installing, use it by following the **example usage** provided.

**Combining best practices:** the real power comes from combining multiple best
practices in a single request. Your AI agent intelligently invokes the
appropriate tools and skills — e.g. _"Set up my project with a README,
changelog, and MIT license."_

---

### Q: What's the difference between Skills, Agents, and MCP Servers?

**Skills** are specialized instruction sets that guide AI agents through specific
tasks — "recipes" for workflows like creating changelogs or generating docs.

**Agents** are autonomous systems that execute complex, multi-step workflows
independently, making decisions and orchestrating entire processes.

**MCP Servers** (Model Context Protocol) are integrations that connect AI agents
to external services and APIs — GitHub, Slack, Jira, databases, and more.

These artifacts can be combined: a skill might depend on an MCP server, or an
agent might leverage multiple skills.

---

### Q: How do I run my own marketplace?

This site is built on a reusable, open-source framework. To run your own:

1. **Fork or clone** the repository.
2. **Customize** `docusaurus.config.js` (title, URLs, branding) and the
   `marketplace` block in `static/data/registry.json`.
3. **Add your best practices** — see
   [Submit a Best Practice](/docs/contribute/submit-best-practice).
4. **Deploy** for free with GitHub Pages.

You can also **federate** other marketplaces by adding their registry URLs to
`marketplaceConfig.registries` in `docusaurus.config.js`.

---

### Q: How do I contribute my own best practice?

1. **Review the guidelines:** see
   [Submit a Best Practice](/docs/contribute/submit-best-practice).
2. **Create your artifact:** develop your skill, agent, or MCP server.
3. **Test thoroughly.**
4. **Submit a pull request** adding it to `static/marketplace/` and an entry to
   `static/data/registry.json`.

---

### Q: Can I use these best practices with my CI/CD pipeline?

Yes. Best practices are designed to complement existing workflows — they can be
integrated into GitHub Actions, run as pre-commit hooks, executed in automated
testing pipelines, and incorporated into release processes.

---

## Still have questions?

Open an issue or start a discussion on the project's GitHub repository.
