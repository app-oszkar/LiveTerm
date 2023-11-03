// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'kiwichat' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'kiwichat' - wordpress plugin.
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
// live webchat
export const webchat = async (args: string[]): Promise<string> => {
  window.open(`https://webchat.kiwichat.eu.org/`);

  return 'Opening live webchat...';
};
//Support WordPress Plugin KiwiChat
export const webchat = async (args: string[]): Promise<string> => {
  window.open(`https://wordpress.org/support/plugin/kiwichat`);

  return 'Opening support wordpress plugin kiwichat...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const root = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const admin = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const cmd = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

//permision dennied
export const chmod = async (args: string[]): Promise<string> => {
  return `a
flags -are the additional options users can set.
permissions -define if the user can read, write, or execute the file. They can be represented using symbolic or octal numbers.
filename -is the name of the file whose permissions are changed.
root`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// KiwiChat WordPress Plugin
export const kiwichat = async (args: string[]): Promise<string> => {
  return `KiwiChat NextClient WordPress plugin 
  
    Description        How to use KiwiChat… Finally there is an IRC plugin for WordPress that works! 
                       KiwiChat is an online chat client, your IRC client based on kiwiirc Add your networks. 
					   Join your channels. To use this plugin:
					   
					   1 simply download and extract it into your plugins folder
                       2 configure your settings in the WordPress dashboard
                       3 then drop the short tag <u style="color:#0080FF">[kiwichat]</u> into your page or post. 
					   Instantly your users will be able to stay connected via IRC.
					   
	Installation	   1 upload the kiwichat folder to the <u style="color:#0080FF"> /wp-content/plugins/ </u> directory.
                       2 activate the plugin through the Plugins menu in WordPress.
                       3 place <u style="color:#0080FF">[kiwichat]</u> shortcode in your pages or posts.
                       4 you can specify channel for a specific page instead of using the default channel configured with: 
					   <u style="color:#0080FF">[kiwichat chan=#WebChat]</u>

	Download		   WordPress Development version <u><a class="text-light-blue dark:text-dark-blue underline" href="https://downloads.wordpress.org/plugin/kiwichat.zip" target="_blank">Download</a></u>
	
	Support            <u><a class="text-light-blue dark:text-dark-blue underline" href="https://wordpress.org/support/plugin/kiwichat/" target="_blank">View support forum</a></u>
	
	Contributing       Bug reports and pull requests are welcome on  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/KiwiChat/wp-kiwichat" target="_blank">GitHub</a></u>
					   `

  ;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗███████╗██╗     ██████╗     ██╗  ██╗██╗██╗    ██╗██╗ ██████╗██╗  ██╗ █████╗ ████████╗
██║  ██║██╔════╝██║     ██╔══██╗    ██║ ██╔╝██║██║    ██║██║██╔════╝██║  ██║██╔══██╗╚══██╔══╝
███████║█████╗  ██║     ██████╔╝    █████╔╝ ██║██║ █╗ ██║██║██║     ███████║███████║   ██║   
██╔══██║██╔══╝  ██║     ██╔═══╝     ██╔═██╗ ██║██║███╗██║██║██║     ██╔══██║██╔══██║   ██║   
██║  ██║███████╗███████╗██║         ██║  ██╗██║╚███╔███╔╝██║╚██████╗██║  ██║██║  ██║   ██║   
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝         ╚═╝  ╚═╝╚═╝ ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                                             

                                                                                           
Type 'help' to see the list of available commands.
Type 'kiwichat' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
