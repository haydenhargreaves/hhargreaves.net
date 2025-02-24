import type { RequestEvent } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

// Root of the project
const cwd = process.cwd();

/**
 * Load the journal post from the file system when the page is requested.
 * @param {RequestEvent} event
 */
export const load = async ({ url }: RequestEvent) => {
  // Create the path
  // ./src/[url].md
  const journalPath = cwd.concat("/src", url.pathname, ".md");
  const cleanPath = journalPath.replaceAll("%20", " ");

  // Read the file and get the data
  let content: string = "";
  try {
    content = readFileSync(cleanPath, 'utf-8');
  } catch {
    // Catch and return any errors
    return {
      post: {
        content: "",
        date: new Date(),
        error: "Sorry, this post could not be found. If you think this is an error, please contact me!"
      }
    };
  }

  // Date: 2025-02-24 -> date object
  // Desc: ... -> description
  // We are not using the description for now, so it can be ignored.
  let lines: string[] = content.split("\n");
  let date: Date = new Date();
  // let description: string = "";

  // Ensure the meta data is provided
  if (lines[0].slice(0, 5) == "Date:" || lines[1].slice(0, 5) == "Desc:") {
    date = new Date(lines[0].split("Date:")[1].trim());
    // description = lines[1].split("Desc:")[1].trim();

    // Remove meta data from final content
    lines = lines.slice(2);
  }

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
      // The second line is the description of the post.
      // Any other meta data that needs to be cut can be removed by increasing the '1' in the slice.
      content: marked.parse(lines.join("\n")),
      date: date,
      error: null,
    }
  };
};
