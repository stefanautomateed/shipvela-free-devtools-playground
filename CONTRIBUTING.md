# Contributing to Free Dev Tools & Playground

Thanks for wanting to help grow this resource.

## Suggest a Tool

The easiest way to contribute — add a free developer tool to the directory.

### Requirements

- The tool must have a **free tier** or be fully free/open-source
- It must be useful to developers (not just general software)
- It must have an active, working website

### How to Add

1. Fork this repo
2. Open `js/tools-data.js`
3. Add your tool to the correct category array:

```javascript
{
  name: 'Tool Name',
  description: 'One sentence describing what it does.',
  url: 'https://tool-website.com/',
  category: 'category-id',  // must match an existing CATEGORIES id
  tags: ['Tag1', 'Tag2', 'Tag3'],  // 2-3 tags
  emoji: '🔧'  // one emoji that represents the tool
}
```

4. Open a Pull Request with the title: `Add [Tool Name] to [Category]`

### Category IDs

| ID | Category |
|---|---|
| `ai-coding` | AI Coding Assistants |
| `playgrounds` | Code Playgrounds |
| `frontend` | Frontend Libraries |
| `backend` | Backend Frameworks |
| `design` | Design & UI Tools |
| `api-testing` | API & Testing |
| `databases` | Databases & BaaS |
| `devops` | DevOps & Hosting |
| `ai-ml` | AI & ML Platforms |
| `nocode` | No-Code / Low-Code |
| `vcs` | Version Control & Collab |
| `utilities` | Developer Utilities |

## Report Issues

Open a GitHub Issue if you find:
- A broken tool URL
- An incorrect tool description
- A bug in the playground
- A layout or mobile issue

## Code Changes

For changes to the site itself (HTML/CSS/JS):

1. Fork and clone
2. Make changes
3. Test on both desktop and mobile
4. Open a PR describing what you changed and why

Keep it simple — no build tools, no frameworks, no dependencies.
