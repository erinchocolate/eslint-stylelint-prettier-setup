# Stylelint and Prettier Setup

This setup is inspired by [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos). 

These are my settings for Stylelint and Prettier. The settings is still very basic now. 

## What it does

- Lints CSS/SCSS based on the common conventions found in the specifications and styleguidelines
- Fixes issues and formatting errors with Prettier

## Installing

Personally I install and use stylelint locally once per project so I can change the settings based on the requirement of the project.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Install everything needed by the config

   `npx install-peerdeps --dev style-config-erinchoco`

3. You can see there are some devDependencies in your package.json

4. Create a `.stylelintrc` in the root of your project's directory. Your `.stylelintrc` should look like this:

```json
{  
    "extends": [ "stylelint-config-meiqiao" ] 
}
```

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
	"style": "stylelint *.css *.scss",
  	"style:fix": "stylelint *.css *.scss --fix"
},
```

6. Now you can manually lint your stylesheet by running `npm run style` and fix all fixable issues with `npm run style:fix`. 

## Settings

If you want to overwrite stylelint or prettier settings, you can add the rules in your `.stylelintrc` file.

```json
{
  "extends": [
    "stylelint-config-erinchoco"
  ],
  "rules": {
    "prettier/prettier": [
      true,
      {
        "singleQuote": false,
        "tabWidth": 8,
        "semi": false,
        "endOfLine": "auto"
      }
    ]
  }
}
```

## With VS Code

I set up VS code so it lint and fix for me every time when I save my file. Here is how I set up:

1. Install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
2. Go to the `setting.json`file and enter these settings:

```json
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"editor.formatOnSave": true,
// tell the Linter(ESlint and Stylelint) plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
"stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss"
  ],
"stylelint.snippet": [
    "css",
    "less",
    "postcss",
    "scss"
  ]
```

## JavaScript

With JavaScript, I use [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos).