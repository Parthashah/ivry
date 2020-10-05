#!/usr/bin/env node
/*
Comment: Above line called shebang: http://unix.stackexchange.com/a/87600
require to run this script as command line executable
*/

const program = require('commander')
const createFlow = require('./tasks/CreateTask.js')
const path = require('path')
const fs = require('fs')
const { create } = require('domain')
const global = require('./global')

program
    .version(`0.0.1`)
    .option('-d, --debug', 'output extra debugging')
    .option(`-n, --new [name]`, `Name of the project`)
    .parse(process.argv)


if (program.debug) {
    console.log(program.opts())
    global.debug = true
}

if(program.new) {
    createFlow.start(program.new)
} else if (program.add) {

} else if (program.remove) {

}
