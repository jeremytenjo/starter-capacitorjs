const fs = require('fs-extra')
const prettier = require('prettier')

const prettierConfig = require('../prettier/config')

const addTimestamp = (fileContent) => {
  const fileContentWithTimestamp = `
  /**
 * DON'T EDIT THIS FILE
 * This file is auto generated
 */
  
  ${fileContent}
  `
  return fileContentWithTimestamp
}

module.exports = async function createFile(
  filePath,
  fileContent,
  { nojs, noTimestamp } = {},
) {
  const formateed = nojs
    ? fileContent
    : prettier.format(noTimestamp ? fileContent : addTimestamp(fileContent), {
        ...prettierConfig,
        parser: 'babel',
      })

  fs.outputFileSync(filePath, formateed, (err) => {
    if (err) throw err
  })
}
