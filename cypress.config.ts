import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'railflow-cypress-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/test-results-[hash].xml',
    attachments: true,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
