
const { defineConfig } = require('@vue/cli-service')
const publicPath = '';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/bestlog/" : "/",
  pluginOptions: {
    i18n: {
      locale: 'hu',
      fallbackLocale: 'hu',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
