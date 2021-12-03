var createFolders = require('create-empty-folders')
const findRemoveSync = require('find-remove')

createFolders(['src/components','src/context', 'src/helpers', 'src/hooks', 'src/lib', 'src/services', 'src/utils'])

var result = findRemoveSync('./', {files: 'setup.js'})

console.log(result)