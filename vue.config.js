const path = require('path')
const WebpackBar = require('webpackbar')
const { donation } = require('./src/config')
const { webpackBanner, webpackBarName, donationConsole } = require('vab-config')

if(donation) donationConsole()
module.exports = {
    configureWebpack() {
        return {
          performance: {
            hints: false
          },
          plugins: [
            new WebpackBar({
              name: webpackBarName
            })
          ]
        }
    }
}
