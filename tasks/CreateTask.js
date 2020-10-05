const global = require('../global')
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')

const { folder, ivry, shell }  = require('../utils')

function  start(projectName) {
    currentPath = path.resolve(process.cwd())
    let projectPath = currentPath
    if((typeof projectName == `boolean`) || !projectName || projectName == `.`) {
        console.log(chalk.green(`Creating project in current folder, ${projectPath}`))
    } else {
        projectName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '')
        projectPath = folder.createProjectFolder(currentPath, projectName)
        console.log(chalk.green(`Creating folder name ${projectPath}`))
    }

    fs.copySync(`${__dirname}/../boilers/initial/`, projectPath)
    ivry.update(projectPath, 'projectName', path.basename(projectPath))
    ivry.update(projectPath, 'projectPath', projectPath)
    global.projectPath = projectPath

    shell.npmInitiate()
        .then(shell.npmInstall(`express`))
        .then(console.log)
}

module.exports = {
    start
}