const fs = require('fs');

function createProjectFolder(folderPath, name) {
    const dir = `${folderPath.trimEnd('/')}/${name.trim()}`
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    } else {
        throw new Error("Directory is already exist.")
    }
    return dir
}

module.exports = {
    createProjectFolder
}
