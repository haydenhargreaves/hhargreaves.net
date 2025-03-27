Date: 2025/02/25
Desc: After using Neovim for years, I tried the JetBrains products for a month. Here's what I found.

# 30 Days of JetBrains: My Vim Cleanse

<img src="/journal/JetBrains-Logo.png" alt="Jet Brains Logo" width="500">

###### Author: Hayden Hargreaves

###### Published: 02/25/2025

## Background

I have been using Neovim exclusively for over two years, and in those years I have
become *"blazingly fast"* and my developer experience has increased exponentially.
Inspired by popular Twitch Streamer, [The Primeagen](https://www.twitch.tv/theprimeagen),
I started using Neovim in late 2022. I started with just note-taking using a popular
Neovim distribution called [NVChad](https://nvchad.com), which allowed me to get a feel
for the tool and how it can be used. But it was too hard, the learned curve was too steep.

Eventually, a few months later, I ran into a YouTube video from The Primeagen where he was
programming live on Twitch. While watching this video, I was in awe of his speed, efficiency,
and the tools he was using looked amazing. I decided to give Neovim another try, but this time
I didn't use NVChad. I wanted to learn how to configure the editor myself, because that is a
huge part of why Neovim is so popular, and why I still use it to this day.

After countless hours of configuration and problems, I finally had a tool that I could call my
own and begin writing software with. At first, I struggled to understand the appeal. Vim motions
are confusing and hard to remember. But with time, I became fast, really fast. I started to get
comments from my peers in class asking how I type so fast and what editor I am using. Most people
have the same response to my response: "Eh, Vim? Isn't that old?" My answer, Neovim is new fork
of Vim which is being maintained by a large team of amazing open source developers.

Over the years, I have tried to convince countless peers to "take the vim pill" and give it a
try. But after being rejected by almost everyone, finally realized that the tool each developer
uses really doesn't matter as long as they enjoy it and feel comfortable. However, I strongly
encourage everyone to give Vim a try at some point. You may love it!

That final realization is the fuel for this experiment.

## Why JetBrains?

In my first semesters at Embry-Riddle, I had the pleasure of meeting many experienced professionals
who scoff at my choice of tooling. "To each their own," I say! But after the third or fourth time,
I started to think that maybe I am missing something? In my Neovim editor I have everything I could
ever need, countless language servers (LS or LSP) with autocomplete and other features, database
integration, AI tools like CoPilot, lighting fast navigation via
[Telescope](https://github.com/nvim-telescope/telescope.nvim) and
[Harpoon](https://github.com/ThePrimeagen/harpoon), syntax highlighting via
[TreeSitter](https://github.com/nvim-treesitter/nvim-treesitter), and even git integration from
[Fugitive](https://github.com/tpope/vim-fugitive). Needless to say, if I want something new, I can
get it. Granted, plugins are not exclusive to Neovim. Visual Studio Code (VSC), another popular
integrated development environment (IDE), also has a large plugin ecosystem. However, this argument
is to rebut against the frequent complaint that Neovim is lacking in features and cannot serve as a
modern IDE.

That now begs the question, why JetBrains products? The answer is simple: they are the best.
There is hardly any competition in the proprietary development tools space, the two biggest competitors
being VSCode (as previously mentioned) and the JetBrains suite of tools. I have experience using both
tools. I spent lots of time using IntelliJ from JetBrains when I learned Java, and this experience
opened my eyes to the power of an IDE vs. a typical text editor (Neovim). However, Java is not a simple
language compared to GoLang (my primary language) or Python (what I use in many of my University classes).
For that reason, I avoided using such powerful tools when writing code in languages that I did not see
a huge benefit from. But I have always had a sweet spot for IntelliJ; It was how I was introduced to the
world of software development. For that reason, I decided to choose JetBrains for this experiment.

## Why Change Now?

Another great question! If I love Neovim so much and I am so productive with a tool, why try something
new? A professor who I have grown particularly fond of, has always poked fun at me for my choice of
tooling. He frequently mentions that I should try something else because when I get into the work force,
I will not be able to use Vim. I have finally had enough! Just kidding. He is right, if I am only
competent with a single tool, I will struggle in the future. So I decided to spend 30 days using only
JetBrains products.

With my student email, I qualify for free access to the JetBrains suite, which is a huge factor in this
choice. A subscription for a JetBrains editor is nearly $100 a year, **per editor**. In this experiment,
I will be using **PyCharm**, **WebStorm**, **GoLand**, **CLion**, and **DataGrep**. I do not want to spend
hundreds of dollars on an editor when so many free options exist, but their education benefits, I cannot
use that as an excuse. Furthermore, I may as well take advantage of the benefits while I have them!

## The Migration

Switching from such a personal tool to a proprietary tool is a big jump. My biggest concern was the motions
I have become so accustomed too. Each JetBrains product has a plugin called **IdeaVim** which implements
vim motions natively into the editor. In the past, I have used the **VSCode Neovim** plugin, but it felt
slow, buggy and simply just bad. However, even in just the short time writing this article, I have not noticed
any large issues with the vim motions in the JetBrains plugin.

Another thing I will miss during these 30 days is the plugins I use in my Neovim configuration. Bellow, you
can see a collection of each plugin I use in my setup. Quite a few! Some of my favorites being **Harpoon**
and **Telescope** which allow me to move between buffers (similar but different from files) with ease. During
this experiment, I will not install any of these plugins into my JetBrains editors. I could very easily convert
any of these editors into a copy of my Neovim setup, but that defeats the whole purpose of this trial! I will
use this editor with very few plugins to allow for more native feel, and to take full advantage of the features
provided by the tool without handicapping myself to my comfort zone.

<br>

#### My Neovim Plugins

- [dashboard-nvim](https://github.com/glepnir/dashboard-nvim) - A dashboard for Neovim.
- [emmet-vim](https://github.com/mattn/emmet-vim) - Emmet support for HTML, CSS, etc.
- [github-copilot.vim](https://github.com/github/copilot.vim) - GitHub Copilot integration.
- [Harpoon](https://github.com/ThePrimeagen/harpoon) - Quickly jump between files.
- [hex.nvim](https://github.com/folke/hex.nvim) - Provides hex editing capabilities.
- [lspkind.nvim](https://github.com/simrat39/lspkind.nvim) - Adds icons to LSP completions.
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) - A statusline plugin.
- [LuaSnip](https://github.com/L3MON4D3/LuaSnip) - A snippet engine.
- [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim) - Preview Markdown files.
- [Nixvim](https://github.com/nix-community/nixvim) - Integrates Neovim with the Nix package manager for reproducible
  configurations.
- [noice.nvim](https://github.com/folke/noice.nvim) - Replaces Vim's default notification system.
- [none-ls.nvim](https://github.com/nvim-lua/none-ls.nvim) - A "null-ls" implementation for non-LSP servers.
- [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) - A completion plugin.
- [nvim-colorizer.lua](https://github.com/norcalli/nvim-colorizer.lua) - Displays colors in the editor.
- [nvim-git signs](https://github.com/lewis6991/nvim-git-signs) - Displays Git changes in the sign column.
- [nvim-marks.lua](https://github.com/chentoast/marks.nvim) - Manages marks.
- [nvim-notify](https://github.com/rcarriga/nvim-notify) - Another notification plugin.
- [nvim-smart-splits](https://github.com/mrjones2014/nvim-smart-splits) - Manages window splits.
- [nvim-surround](https://github.com/tpope/nvim-surround) - Easily change surrounding characters (quotes, parentheses,
  etc.).
- [nvim-treesitter-undo](https://github.com/RRRRRRRRRRRRRRRR/nvim-treesitter-undo) - Improves undo/redo with Treesitter.
- [nvim-trouble](https://github.com/folke/nvim-trouble.nvim) - Displays diagnostics in a more user-friendly way.
- [nvim-ufo](https://github.com/folke/nvim-ufo) - Improves code folding.
- [render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim) - Another Markdown renderer.
- [rose-pine](https://github.com/rose-pine/neovim) - Rose pine color theme.
- [lspsaga.nvim](https://github.com/glepnir/lspsaga.nvim) - Enhances the LSP experience.
- [tailwind-tools.nvim](https://github.com/luckasRanarison/tailwind-tools.nvim) - Provides Tailwind CSS integration.
- [Telescope](https://github.com/nvim-telescope/telescope.nvim) - A highly extensible fuzzy finder.
- [vim-fugitive](https://github.com/tpope/vim-fugitive) - Git integration.
- [wakatime.vim](https://github.com/wakatime/vim-wakatime) - WakaTime integration for tracking your coding time.

<br>

To remain some level of productivity, I did install a handful of select plugins in each of the
JetBrains IDEs. They are listed below:

#### JetBrains Plugins

- [IdeaVim](https://plugins.jetbrains.com/plugin/164-ideavim) - Vim motions.
- [GitHub](https://plugins.jetbrains.com/plugin/13115-github) - GitHub integration, installed by default.
- [GitLab](https://plugins.jetbrains.com/plugin/22857-gitlab) - GitLab integration, installed by default.
- [Grazie Pro](https://plugins.jetbrains.com/plugin/16136-grazie-pro) - Grammar help and completion.
- [Rose Pine](https://plugins.jetbrains.com/plugin/18141-ros-pine) - Rose pine color theme.
- [NixIdea](https://plugins.jetbrains.com/plugin/8607-nixidea) - Nix and NixOS tooling.
- [WakaTime](https://plugins.jetbrains.com/plugin/7425-wakatime) - WakaTime integration for tracking your coding time.

## Artificial Intelligence

With AI on the rise, I am posed with the question of using an AI tool in my editor or not. As you've seen above,
I use **GitHub Copilot** in my Neovim config, which has served me well. In my experience, it is bad at generating
complex code, but it does an exceptional job with helping me write comments and boilerplate code. However, I have
found that I think less and rely on Copilot far too much. During these 30 days, I hope to break this habit, which
I have heard called "the Copilot pause." When writing some code, I often wait a second for Copilot to write it for
me. This pause proves my reliance on AI has grown too far.

> "After using copilots for a while, you’ve probably noticed the good ol’ copilot “pause.” You know, that moment when
> you’re just waiting for AI to write what you’re thinking so you can press tab and go on with your life. That’s the pause."
> ~[Eric Zakariasson](https://anyblockers.com/posts/avoid-the-copilot-pause)

So, during this experiment, I will not use any AI integration in my editor. This includes the **Jetbrains AI Assistant**,
which is advertised ad nauseam in the IDEs. But I am no programming master, and I do still see benefit in using
LLMs to help with simple tasks and idea creation. So, I will continue to use chatbots like **ChatGPT** or Google's 
**Gemini** to help me with day-to-day use cases.

## Editor Setup
I have written this entire document in WebStorm, but up to now, its only been a few hours of the switch. But one thing I 
have learned is that the IdeaVim plugin allows for configuration in a `~/.ideavimrc` file. Very similar to Vim, yay! In 
this fill you can configure all kinds of things, however, I tried not to go overboard with the configuration file and tried 
to configure most of the editor in the application settings. Again, to make the feeling less "vim-like" and to have a more
out-of-the-box experience.

```vim
" These do not work very well :(
" However, there is a setting for this in the IDE
" 'Move Line Up/Down' in 'Keymap' settings
"
" vnoremap J :m '>+1<CR>gv=gv<CR>
" vnoremap K :m '<-2<CR>gv=gv<CR>

" These do work! Indent lines with tab and shift-tab
nnoremap <TAB> V>
nnoremap <S-TAB> V<
vnoremap <TAB> >gv
vnoremap <S-TAB> <gv

" Disable the annoying sounds the IdeaVim plugin likes to make
set visualbell
set noerrorbells
```

## Disclaimer
The following sections will review my findings and the results of this experiment. Keep in mind, anything I say is 
100% my own opinion, and every user will likely have a different experience. Nothing here is **fact** just simply
how I feel about each tool.

## What is Missing 
After using the JetBrains products for a month, I have noticed a few things that were missing that made my development
experience slightly more cumbersome. For example, I did not find a very good way to search for files, options like
**class search** or **symbol search** are powerful, but sometimes I want to search for a file or navigate quickly between
files. I was not able to find this functionality using the default tooling in the Idea products. 

Another thing I was not a huge fan of is the `.idea` folder that is created in the root of each project. This is a small
complaint, but in large projects, it can create more bloat in the source. Many times I experienced issues with files 
loading properly due to a corrupted `.idea` folder.

Finally, the biggest issue I noticed was the LSP and syntax highlighting was very slow and at times would crash. At 
times, I would have to stop working and wait for my editor to "catch up" and highlight my code or generate LSP completions.
Furthermore, in multi-language projects, the tools struggle pretty badly too, due to the single language nature of the 
tools. Of course, there are solutions to this problem through plugins, but throughout this experience I did not install 
them as mentioned previously.

## What JetBrains Does Better
Of course, the JetBrains suite is industry grade software, which comes along with lots of powerful built-in tools. Such
as Git integration. The source control integration is exceptional and allows for easy switching between branches using their
**smart checkout** feature. There were times when I still needed to pull out the command line to solve complex git issues,
but for the most part, the UI/UX was good and fairly easy to learn. I also really liked that `// TODO: ...` comments were
highlighted to stand out and when commits containing TODOS were created, a notification was pushed to the user. Small 
things like this really help the tools stand out and feel user-friendly.

Other features like the LSP and syntax highlighting are installed out of the box. This is a huge win for those who do not
want to spend hours configuring their system and tools before working. However, that is *exactly* who I am, so this was 
not a huge benefit to me, but it definitely made the migration much faster. Another smaller feature that can be included
in that list is the **markdown previewer**, which was a nice feature to see. Most modern editors have this feature, so I 
am sure this is nothing new, but vim is not able to achieve this functionality natively.

Finally, the last feature I really enjoyed was the project sessionizer. The ability to switch between projects with the 
click of a button is amazing. However, I did not find myself using it very often. Usually, the only time I needed to use
it was when I first opened the editor and had to select or create a project.

## The Verdict