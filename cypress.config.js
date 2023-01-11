const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {

      excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
      viewportWidth: 1280,
      viewportHeight: 720,
      video:false
  }
})
