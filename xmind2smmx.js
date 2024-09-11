#!/usr/bin/env node
const { program } = require('commander');
const {convert,logXmindJSON,logSmmxJSON} = require('./lib/index.js');
program
  .version('0.0.1')
  .argument('<file>', 'XMind file to convert')
  .argument('[output]', 'SMMX output file (optional)')
  .option('-x', 'only output  JSON content for debugging')
  .action((file, output, options) => {
    if (options.x) {
      if (file.endsWith('.xmind')) {
        logXmindJSON(file);
      } else if (file.endsWith('.smmx')) {
        logSmmxJSON(file);
      } else {
        console.log('Unknown file type');      
      }
    } else {
      convert(file, output);
   }});
   program.parse();

