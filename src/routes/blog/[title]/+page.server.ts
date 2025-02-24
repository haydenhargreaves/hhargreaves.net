import type { RequestEvent } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

// Root of the project
const cwd = process.cwd();

/**
 * Load the blog post from the file system when the page is requested.
 * @param {RequestEvent} event
 */
export const load = async ({ url }: RequestEvent) => {
  // Create the path
  // ./src/[url].md
  const blogPath = cwd.concat("/src", url.pathname, ".md");

  // Read the file and get the data
  const data = readFileSync(blogPath, 'utf-8');

  const marked = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

  return {
    post: {
      // Convert the markdown to HTML
      content: marked.parse(data),
    }
  };
};
