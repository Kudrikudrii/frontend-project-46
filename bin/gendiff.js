#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/index.js';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .helpOption('-h, --help', 'display help for command')
  .action((filepath1, filepath2) => {
    const diff = getDiff(filepath1, filepath2);
    console.log(diff);
  });

program.parse();
