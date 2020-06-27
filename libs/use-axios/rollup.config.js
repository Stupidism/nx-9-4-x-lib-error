const nodeResolve = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json')

module.exports = function(config) {

  return config;
  // return {
  //   ...config,
  //   plugins: [
  //     ...config.plugins.map((plugin) => {
  //       if (plugin.name !== 'node-resolve') return plugin;
  
  //       return nodeResolve();
  //     }),
  //     json()
  //   ]
  // }
}
