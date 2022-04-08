module.exports = function override(config, env) {
  config.module.rules = config.module.rules.map(rule => {
    // if (rule.oneOf instanceof Array) {
    //   return {
    //     ...rule,
    //     oneOf: [
    //       {
    //         test: /\.(png|jpg|gif|svg|webp)$/i,
    //         loader: "optimized-images-loader",
    //         options: {
    //           // Images larger than 10 KB won’t be inlined
    //           limit: 10 * 1024
    //         },
    //         enforce: 'pre'
    //       },
    //       ...rule.oneOf
    //     ]
    //   };
    // }

    return rule;
  });

  return config;
};