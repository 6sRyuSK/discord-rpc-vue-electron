module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/electron/background.js',
      // electron上で使用するnode_moduleを記述する。
      externals: ['discord-rpc']
    }
  }
}