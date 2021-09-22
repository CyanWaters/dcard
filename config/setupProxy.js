const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const _ = require('lodash')

module.exports = app => {
  const uiPathArray = ['public', 'ui-schemas', 'ui']
  const uiPath = path.join(...uiPathArray)
  const uiPathPOSIX = uiPathArray.join('/')
  app.get('/dev-api/uijson-list', (req, res) => {
    const files = shell.find(uiPath).filter(file => file.match(/\.json$/))
    const data = files.sort().map(filePath => {
      const relativePath = _.trimStart(
        path
          .dirname(filePath)
          .replace(/\\/g, '/')
          .replace(uiPathPOSIX, ''),
        '/',
      )
      const content = fs.readFileSync(filePath, 'utf8')
      let multiDataSource = false
      let schema = []
      try {
        const json = JSON.parse(content)
        schema = json.schema
        multiDataSource = Array.isArray(schema) && schema.length > 1
      } catch (e) {
        // pass
      }
      return {
        hasCustomForm: content.includes('CustomForms/'),
        multiDataSource,
        path: relativePath,
        schema,
      }
    })
    res.json({
      'uijson-list': data,
    })
  })
}
