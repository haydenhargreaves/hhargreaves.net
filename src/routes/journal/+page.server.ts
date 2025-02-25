import { readdirSync, readFileSync } from 'fs';

// Location of the posts, all md files should be placed here
const journal_path = process.cwd().concat('/src', '/journal');

/**
 * The post object for use in the page.
 * @property {string} title - The title of the post.
 * @property {string} description - The description of the post.
 * @property {string} path - The path to the post for the URL.
 * @property {Date} date - The date the post was created.
*/
type Post = {
  title: string;
  description: string;
  path: string;
  date: Date;
};

// For this use, we do not need the RequestEvent object
export const load = async () => {
  const posts: Post[] = [];

  // Read all the files names in the journal directory.
  readdirSync(journal_path).forEach(file => {
    const content: string = readFileSync(journal_path.concat('/', file), 'utf-8');

    // Date: 2025-02-24 -> date object
    // Desc: ... -> description
    const lines: string[] = content.split("\n");
    let date: Date = new Date();
    let description: string = "";

    // Ensure the meta data is provided
    if (lines.length < 2) {
      return {
        posts,
      }
    }
    if (lines[0].slice(0, 5) == "Date:" || lines[1].slice(0, 5) == "Desc:") {
      date = new Date(lines[0].split("Date:")[1].trim());
      description = lines[1].split("Desc:")[1].trim();
    }

    // Create the post
    const post: Post = {
      title: file.split('.')[0],
      path: '/journal'.concat('/', file.split('.')[0]),
      date,
      description
    }
    posts.push(post);
  });

  return {
    posts,
  };
};
