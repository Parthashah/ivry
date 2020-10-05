const fs = require('fs');
const path = require('path')


function update(projectPath,key, value) {
    const fileName = `${projectPath}/ivry.json`
    const ivry = JSON.parse(fs.readFileSync(fileName).toString());
    ivry[key] = value
    fs.writeFileSync(fileName, JSON.stringify(ivry, null, 2))
}

module.exports = {
    update
}