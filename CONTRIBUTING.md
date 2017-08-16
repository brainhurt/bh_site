# Contributor Guidelines

Thinking about contributing to Brainhurt's Website? Awesome! We just ask you follow these steps to correctly setup your development environment. 

## Building Development Brainhurt Site

#### First time installation

1) Install [Git](https://git-scm.com/).
2) Install [Node.js](https://nodejs.org).
3) [Clone this repository](https:/help.github.com/articles/cloning-a-repository/).
4) Run `npm install` in that folder.

#### Branch schema

- `master`: Current production build live at [Brainhurt.org](https://brainhurt.org).
- `develop`: Current working branch.

When creating a new branch, you should always target `develop` as this is our working branch.  All changes will be merged into this branch, which will become the new `master` after testing is complete and verified. You should name your branch after your Github username.


#### Build Commands
**`gulp`** will clean `app/`, then build Brainhurt.org (dev mode).

**`gulp --production`** will clean `app/`, then build Brainhurt.org (production mode) with Minified CSS/Javascript

</br>

## Project Structure

#### Top Level Files and Folders

- `app/`: Build output
- `lib/`: All source Files and Images
- `node_modules/`: Brainhurt.org Node modules
- `.gitignore`: Gitignore File
- `gulpfile.js`: Gulp build script
- `package-lock.json`: package info, dependencies
- `package.json`: package info, dependencies

</br>

## Adding New Files

#### Adding New HTML Pages 
Create new folder(s) for the URL path you want to create an index.html page for

Example: Your `index.html` is for the page `/example` with the full URL: `https://brainhurt.org/example/index.html`

You would create a new folder `lib/html/example` and add your index.html file there.
Full path for your file would then be: `lib/html/example/index.html`

#### Adding New CSS Pages

Add your file to `lib/styles`.  

If not page-specific CSS: Add your CSS file as another include to the `app.addStyle()` main method in Gulpfile.js

If it is a page-specific CSS: Create another `app.addStyle()` entry inside the `styles` Gulp task (you should also have a good reason why you are doing this!!!)

#### Adding New Javascript Files

Add your file to `lib/scripts`.

If not page-specific Javascript: Your Javascript file will automatically be included in the compiled, singular, Javascript file. `app.addScripts()` takes care of this for you.

If it is page-specific Javascript: Create another `app.addScript()` entry inside the 'scripts' Gulp task (Not as harmful as page-specific CSS... but still you better have a good reason!)
