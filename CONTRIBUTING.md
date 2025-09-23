# Contributing to Posty App

Thank you for your interest in contributing to Posty App! This guide will help you get started with adding posts and contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Git
- A GitHub account

### Setting Up the Project

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Posty-app.git
   cd Posty-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`

## 📝 Adding Posts

### Post Structure

Posts are stored in the `posts/` directory as Markdown files. Each post should follow this format:

```markdown
---
title: "Your Post Title"
author: "Your Name"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
summary: "A brief summary of your post"
---

# Your Post Title

Your post content goes here. You can use standard Markdown syntax including:

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Images

## Sections

Use headers to organize your content.
```

### Post Guidelines

1. **File Naming**: Use lowercase with hyphens for spaces
   - ✅ `my-awesome-post.md`
   - ❌ `My Awesome Post.md`

2. **Front Matter**: Always include the required metadata at the top
   - `title`: The post title (required)
   - `author`: Your name (required)
   - `date`: Publication date in YYYY-MM-DD format (required)
   - `tags`: Array of relevant tags (optional)
   - `summary`: Brief description for previews (recommended)

3. **Content Quality**
   - Write clear, engaging content
   - Use proper grammar and spelling
   - Include code examples where relevant
   - Add images to `public/images/` if needed

### Example Post

See `posts/hello-world.md` for a complete example.

## 🔄 Development Workflow

### Branch Naming Convention

Create descriptive branch names using this format:
- `feature/post-title` - for new posts
- `feature/description` - for new features
- `fix/issue-description` - for bug fixes
- `docs/description` - for documentation updates

Examples:
- `feature/javascript-tips-post`
- `feature/dark-mode`
- `fix/broken-links`

### Commit Message Style

Use clear, imperative commit messages:
- ✅ `Add JavaScript tips post`
- ✅ `Fix broken navigation links`
- ✅ `Update README with setup instructions`
- ❌ `Added a post`
- ❌ `Fixed stuff`

### Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-post-title
   ```

2. **Make Your Changes**
   - Add your post to the `posts/` directory
   - Test locally to ensure everything works

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add [your post title] post"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/your-post-title
   ```

## 📋 Pull Request Process

### Before Submitting

- [ ] Post follows the required structure
- [ ] Front matter is complete and accurate
- [ ] Content is well-written and error-free
- [ ] Local testing shows post displays correctly
- [ ] Branch is up-to-date with main

### Creating a Pull Request

1. **Navigate to the Repository** on GitHub
2. **Click "New Pull Request"**
3. **Select Your Branch** as the source
4. **Write a Clear Title**: `Add [Post Title]` or `Feature: [Description]`
5. **Include Description**:
   ```markdown
   ## Summary
   Brief description of changes
   
   ## Post Details (if applicable)
   - **Title**: Your Post Title
   - **Author**: Your Name
   - **Topics Covered**: List main topics
   
   ## Checklist
   - [ ] Post follows contributing guidelines
   - [ ] Front matter is complete
   - [ ] Content is proofread
   - [ ] Local testing completed
   ```

### Review Process

- Maintainers will review your PR within 2-3 business days
- Address any requested changes promptly
- Once approved, your post will be merged and published

## 🎨 Style Guidelines

### Writing Style
- Use clear, concise language
- Write in second person when giving instructions
- Use active voice when possible
- Include examples and code snippets where helpful

### Code Style
- Use 2 spaces for indentation in JavaScript/JSON
- Follow existing patterns in the codebase
- Comment complex logic
- Use meaningful variable names

### Markdown Style
- Use `#` for main title (should match front matter title)
- Use `##` for major sections
- Use `###` for subsections
- Leave blank lines around headers and code blocks

## 🤝 Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Ask questions if you're unsure
- Report issues or suggest improvements

## 🐛 Reporting Issues

Found a bug or have a suggestion? Please:

1. Check existing issues first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Environment details

## 📞 Getting Help

- **Issues**: Open a GitHub issue for bugs or questions
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Contact maintainers at [maintainer-email]

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Posty App! 🎉