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
  const cleanPath = blogPath.replaceAll("%20", " ");

  // Read the file and get the data
  let data: string = "";
  try {
    data = readFileSync(cleanPath, 'utf-8');
  } catch {
    // Catch and return any errors
    return {
      post: {
        content: "",
        date: new Date(),
        error: "Sorry, this post could not be found."
      }
    };
  }

  // Date: 2025-02-24 -> date object
  const date: Date = new Date(data.split("\n")[0].split(":")[1].trim());

  // Create a marked object that can parse the data
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
      // Convert the markdown to HTML. Slice off the first line which is the date of publication.
      // Any other meta data that needs to be cut can be removed by increasing the '1' in the slice.
      content: marked.parse(data.split("\n").slice(1).join("\n")),
      date: date,
      error: null,
    }
  };
};
