# AonFrontend

This project uses node version 11.15.0

To prevent local dev system wide node version conflicts ensure you have  nvm (node version manager) installed  https://github.com/coreybutler/nvm-windows/releases (nvm-setup.zip)
Check by typing 'nvm' to see if it is recognized.
If you dont have nvm and already have node installed you will need to:
1. uninstall node, 
2. install nvm from the zip exe, 
3. then run 'nvm install 11.15.0' in the cmd
4. cd to your project folder and run cmd 'nvm use 11.15.0'
5. If the package.json is missing, run npm init and go through the process
5. run 'npm i' in the cmd to install dependencies 

If you need to install a new package, be sure to include '--save-dev'

Once all of the packages are installed, you can run 'npm run dev' to run the dev server, or 'npm run dist' to build.

Css is managed by updating or adding files in the src/scss folder. THe main.scss file manages the scss files generated into the output/css folder. There are 2 files generated. main.css and criticalpath.css. Critical path css goes in the master head and is the styles for above the fold content while main.css is the below the fold content.

Javascript is managed in src/js. The scripts in this folder are compiled and minified and placed in output/js main.js

When making changes, you need to use the cmd prompt. cd into the folder that the gulpfile.js is in, and run gulp watch. This will build the js and css as you make changes. If there is an error in the build it will appear in the cmd and kill the process.