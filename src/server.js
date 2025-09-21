import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import slugify from 'slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const POSTS_DIR = path.join(__dirname, '..', 'posts');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, '..', 'public')));

// Basic HTML layout helper
function page({ title, content }) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="/static/style.css" />
  </head>
  <body>
    <header><h1><a href="/">Posty</a></h1><nav><a href="/new">New Post</a></nav></header>
    <main>${content}</main>
    <footer><p>Posty Example &copy; ${new Date().getFullYear()}</p></footer>
  </body>
  </html>`;
}

async function listPosts() {
  const files = await fs.readdir(POSTS_DIR);
  const posts = [];
  for (const file of files.filter(f => f.endsWith('.md'))) {
    const full = path.join(POSTS_DIR, file);
    try {
      const data = await fs.readFile(full, 'utf-8');
      const firstLine = data.split('\n').find(l => l.trim().length > 0) || '';
      const title = firstLine.replace(/^#\s*/, '').trim() || file.replace(/\.md$/, '');
      const slug = file.replace(/\.md$/, '');
      posts.push({ slug, title });
    } catch (e) {
      console.error('Error reading', file, e);
    }
  }
  return posts.sort((a, b) => a.title.localeCompare(b.title));
}

async function readPost(slug) {
  const filePath = path.join(POSTS_DIR, slug + '.md');
  const raw = await fs.readFile(filePath, 'utf-8');
  const html = marked.parse(raw);
  const safe = sanitizeHtml(html, { allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'code', 'pre']) });
  const firstLine = raw.split('\n').find(l => l.trim().length > 0) || '';
  const title = firstLine.replace(/^#\s*/, '').trim() || slug;
  return { title, safeHtml: safe };
}

app.get('/', async (req, res) => {
  try {
    const posts = await listPosts();
    const list = posts.map(p => `<li><a href="/post/${p.slug}">${p.title}</a></li>`).join('');
    res.send(page({ title: 'Posts', content: `<h2>Posts</h2><ul class="post-list">${list || '<li>No posts yet.</li>'}</ul>` }));
  } catch (e) {
    res.status(500).send(page({ title: 'Error', content: `<p>Error listing posts.</p>` }));
  }
});

app.get('/post/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, safeHtml } = await readPost(slug);
    res.send(page({ title, content: `<article class="post">${safeHtml}</article>` }));
  } catch (e) {
    res.status(404).send(page({ title: 'Not Found', content: `<p>Post not found.</p>` }));
  }
});

app.get('/new', (req, res) => {
  const form = `
    <h2>New Post</h2>
    <form method="POST" action="/new">
      <label>Title<br><input name="title" required maxlength="120" /></label><br>
      <label>Content (Markdown)<br><textarea name="content" rows="12" required></textarea></label><br>
      <button type="submit">Create</button>
    </form>`;
  res.send(page({ title: 'New Post', content: form }));
});

app.post('/new', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send(page({ title: 'Error', content: '<p>Title and content required.</p>' }));
    }
    const slug = slugify(title, { lower: true, strict: true });
    const filename = slug + '.md';
    const target = path.join(POSTS_DIR, filename);
    try {
      await fs.access(target);
      return res.status(409).send(page({ title: 'Exists', content: '<p>A post with that title already exists.</p>' }));
    } catch {}

    const body = `# ${title}\n\n${content.trim()}\n`;
    await fs.writeFile(target, body, 'utf-8');
    res.redirect('/post/' + slug);
  } catch (e) {
    console.error(e);
    res.status(500).send(page({ title: 'Error', content: '<p>Could not create post.</p>' }));
  }
});

app.listen(PORT, () => {
  console.log(`Posty listening on http://localhost:${PORT}`);
});
