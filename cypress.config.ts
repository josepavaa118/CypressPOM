const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ghkhiq",
  env: {  
    apiUrl: 'https://api.realworld.io/api',
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: "http://angularjs.realworld.io/",
  },
})
