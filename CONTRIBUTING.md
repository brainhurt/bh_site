# Contributor Guidelines

Thinking about contributing to Brainhurt's Website? Awesome! We just ask you follow these steps to correctly setup your development environment. 

## Building Development Version

#### First time installation

1) Install [Git](https://git-scm.com/).
2) Install [Node.js](https://nodejs.org).
3) Install [Bower](https://bower.io).
4) [Clone this repository](https:/help.github.com/articles/cloning-a-repository/).
5) Run `npm install` in that folder.
6) Run `bower install` in that folder.

#### Branch schema

- `master`: Current production build live at [Brainhurt.org](https://brainhurt.org).
- `develop`: Current working branch.

When creating a new branch, you should always target `develop` as this is our working branch.  All changes will be merged into this branch, which will become the new `master` after testing is complete and verified.


#### Build Commands
**`gulp`** will clean `app/`, then build Brainhurt.org (dev mode).

**`gulp --production`** will clean `app/`, then build Brainhurt.org (production mode) with Minified CSS/Javascript


## Project Structure

#### Top Level Files and Folders

- `app/`: Build output
- `node_modules`: Brainhurt.org Node modules
- `src`: All source Files and Images
- `vendor`: Contains Bower's install of Bootstrap4, JQuery, Tether,  and Popper
- `.bowerrc`: Bower install directory 
- `.gitignore`: Gitignore File
- `bower.json`: package info, dependencies
- `gulpfile.js`: Gulp build script
- `package-lock.json`: package info, dependencies
- `package.json`: package info, dependencies



## Adding New Files

#### Adding New HTML Pages 
Create new folder(s) for the URL path you want to create an index.html page for

Example: Your `index.html` is for the page `/example` with the full path: `https:brainhurt.org/example/index.html`
	You would create a new folder `lib/html/example` and add your index.html file there.
	Full path would then be: `lib/html/example/index.html`

#### Adding New CSS Pages
Add your file to `lib/styles`.  
If not page-specific CSS: Then add your CSS file as another include to the `app.addStyle()` main method in Gulpfile.js if it is not a page-specific CSS
If it is a page-specific CSS, you will have to create another `app.addStyle()` entry inside the `styles` Gulp task (you should also have a good reason why you are doing this!!!)

#### Adding New Javascript