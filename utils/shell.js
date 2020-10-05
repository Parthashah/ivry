const fs = require('fs')
const { exec } = require('child_process');
const { basename } = require('path')
const global = require('../global')


function npmInitiate() {
    return new Promise(( resolve, reject ) => {
        const projectPath = global.projectPath || __dirname
        const fileName = `${projectPath}/package.json`
        const package = JSON.parse(fs.readFileSync(fileName)
            .toString()
            .replace('$name',basename(projectPath)));
        fs.writeFileSync(fileName, JSON.stringify(package, null, 2))
    })
}

function npmInstall(package) {
    return new Promise(( resolve, reject ) => {
        const command = `npm --prefix ${global.projectPath || __dirname}/ i ${package}`
        console.log(`Running ${command}`)
        exec(command,
        (error, stdout, stderr) => {
            if (error) reject(`error: ${error.message}`)
            if (stderr) resolve(`stderr: ${stderr}`)
        })
    })
}

module.exports = {
    npmInitiate,
    npmInstall
}