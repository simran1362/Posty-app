# Posty

Minimal Node.js Markdown blog.

## Features
- List posts from `posts/` directory
- Render Markdown with safe HTML sanitization
- Create new posts via web form (`/new`)
- Auto slug generation from title
- No database, just files

## Requirements
- Node.js 18+

## Install

```powershell
npm install
```

## Run

```powershell
npm run dev
```
Then open: http://localhost:3000

## Create a Post (File)
Add a file like `posts/my-post.md`:
```md
# My Post Title

Content here...
```
The filename (without `.md`) becomes the slug.

## Create a Post (Browser)
Visit http://localhost:3000/new fill form and submit.

## Directory Structure
```
posts/          # Markdown files
public/style.css
src/server.js
```

## Notes
- First H1 line is used as the title.
- Basic sanitization is applied; allowed tags include standard formatting, headings, code blocks, and images.

## Future Ideas
- Basic search
- Tag front-matter
- Static export
