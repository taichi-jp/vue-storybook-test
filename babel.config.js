module.exports = {
  presets: [
    '@vue/app',
    "es2015",
    [
      "env",
      {
        "modules": false
      }
    ],
    "vue"
  ],
  "env": {
    "test": {
      "plugins": ["require-context-hook"]
    }
  }
}
