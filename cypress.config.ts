const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: 'https://api.realworld.io/api'
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: "http://angularjs.realworld.io/",
    apiURL:"https://api.realworld.io/api",
  },
});
