# CLI Tool Template
This is template for a a CLI tool written in Typescript. This is just a template. It doesn't do anything. I just use this when i need to write a new cli tool for myself. After setting everything up multiple times, i desided to create this template.

## How to use
- [NodeJS](https://nodejs.org/en/) and [Typescript](https://www.typescriptlang.org/) should be already available on your machine
- run `npm i` to install all the dependencies
- run `npm run build` to transpile Typescript to JS
- run `npm link` to create a symlink locally and be able to call this cli tool
- run `mycli --help` to get tool's documentation. It is using [yargs](https://www.npmjs.com/package/yargs) to handle command line arguments 
- to get details about a specific action run `mycli action --help`
- to run without symlinkig `ts-node src/index.ts --help`

## To customize
- search for every occurrence of the word `mycli` in this repo and change it to whatever you want your tool to be called
- rerun `npm run build` and `npm link`
- the tool with your name should be available for you to use
