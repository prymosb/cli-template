#!/usr/bin/env node

import { Argv } from "yargs";
import chalk = require('chalk');

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('yargs')
    .usage('$0 <cmd> args')
    .command('action', '- does something awesome', (yargs: Argv) => {
        yargs.positional('action', {
            type: 'string',
            choices: ['action1', 'action2'],
            describe: '- one of the actions you want to do'
        })
    }, function (argv: Argv) {
        console.log(
            chalk.blue('Hello') + ' World' + chalk.red('!')
        );        
        console.log('here are the arguments', argv)
    })
    .help()
    .argv
