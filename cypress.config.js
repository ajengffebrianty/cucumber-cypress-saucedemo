const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    projectId: "ponkd3",
    'baseUrl': 'https://saucedemo.com/',
    watchForFileChanges: false,
    //Uncomment the specPatter to run BDD
    specPattern: 'cypress/e2e/BDD/*.feature',
    setupNodeEvents,
  },
});
