# Contributing

This project follows a simplified **Git Flow** branching model. This document
explains how branches are named, how commits are written, and how changes get
merged. If you're new here, reading this top to bottom should be enough to make
your first change correctly.

---

## Branches

Two branches live forever:

| Branch | Purpose |
|---|---|
| `main` | Production-ready code. Everything here should work. |
| `develop` | Integration branch. Finished features land here before release. |

Everything else is short-lived and deleted after merging:

| Pattern | Branch from | Merge into | Use for |
|---|---|---|---|
| `feature/<description>` | `develop` | `develop` | New functionality |
| `hotfix/<description>` | `main` | `main`, then `develop` | Urgent fix to live code |
| `release/<version>` | `develop` | `main`, then `develop` | Final polish before a release |

`<description>` is two or three words in **kebab-case** — lowercase, hyphens
instead of spaces:

- ✅ `feature/header-banner`
- ❌ `feature/HeaderBanner`, `feature/add_the_new_header`, `feature/stuff`

**Why hotfixes branch from `main`:** `develop` may contain unfinished work. A
fix for a live bug has to be based on what's actually live, then copied back
into `develop` so the next release doesn't reintroduce the bug.

---

## Commit messages

Format:

    <type>(<scope>): <subject>

Only `<type>` and `<subject>` are required.

### Type

What kind of change this is. Use exactly one of:

| Type | Use when you... | Example |
|---|---|---|
| `feat` | add functionality the user can see or use | `feat: add dark mode toggle` |
| `fix` | correct broken behaviour | `fix: stop nav overlapping on mobile` |
| `docs` | change documentation only | `docs: explain theme toggle in README` |
| `style` | change formatting only — indentation, whitespace, quotes | `style: reindent styles.css` |
| `refactor` | restructure code without changing what it does | `refactor: extract toggle into a function` |
| `chore` | change tooling, config, or housekeeping | `chore: add .gitignore` |

Two that get confused:

- `style` means **code formatting**, not CSS. A change to colours is `feat` or
  `fix`, even though it's in `styles.css`.
- `refactor` means behaviour is **identical** afterwards. If anything the user
  experiences changed, it's `feat` or `fix`.

### Scope

Optional. Names the area of the project affected, in parentheses:

    feat(header): add banner with nav links
         ^^^^^^

Use one of these and only these:

| Scope | Covers |
|---|---|
| `header` | the header element and its navigation |
| `theme` | dark/light mode — toggle logic and themed styles |
| `layout` | page structure and spacing outside the header |
| `readme` | README.md |
| `config` | .gitignore, editor settings, tooling |

Omit it when a change spans several areas, or when the subject is already clear
(`chore: add .gitignore` needs no scope).

**Adding a new scope is fine — add it to this table in the same commit.** The
table is the source of truth. Without it, one person writes `header`, the next
writes `nav`, and the field stops meaning anything.

### Subject

The short description after the colon. Four rules:

1. **Imperative mood** — write it as an instruction, as if completing the
   sentence *"this commit will ___"*.
   ✅ `add`, `fix`, `remove` ❌ `added`, `adds`, `adding`
2. **Lowercase first letter.** ✅ `feat: add header` ❌ `feat: Add header`
3. **No trailing period.** ✅ `fix: correct contrast` ❌ `fix: correct contrast.`
4. **Under ~50 characters**, so it stays readable in `git log --oneline`.

Full example, good and bad:

- ✅ `feat(theme): add dark mode toggle to header`
- ❌ `Added a new button that lets you switch the theme to dark mode.`

### Longer messages

When the subject isn't enough, run `git commit` with no `-m`. Your editor opens
with a template. Write the subject, leave a blank line, then explain **what
changed and why** — not how, since the diff already shows that:

    feat(theme): add dark mode toggle

    Users reading at night reported eye strain. Stores the choice in a
    data-theme attribute on <body> so CSS can react to it.

    Closes #12

---

## Pull requests

- **Title** follows the same format as a commit subject: `feat: add header banner`
- **Base branch**: features target `develop`; hotfixes target `main`
- Fill in the template that appears in the description box
- **Merge with a merge commit**, not squash or rebase — squashing flattens the
  history, and this project's branch structure is meant to stay visible in
  `git log --graph --oneline --all`
- Delete the branch after merging

---

## First change, start to finish

```bash
git checkout develop            # start from the integration branch
git pull                        # make sure it's current
git checkout -b feature/header-banner
# ...edit files...
git add .
git commit -m "feat(header): add banner with nav links"
git push -u origin feature/header-banner
```

Then open a pull request on GitHub targeting `develop`.