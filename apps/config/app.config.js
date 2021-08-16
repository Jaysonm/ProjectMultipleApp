module.exports = () => {
  let commonConfig = require("./common.config.json");

  let env = require("./app1.json");
  if (process.env.APP_ENV === "app2")
    env = require("./app2.json");

  return {
    ...commonConfig,
    name: env.appName,
    version: env.version,
    scheme: env.scheme,
    slug: env.scheme,
    icon: env.icon,
    splash: {
      ...commonConfig.splash,
      backgroundColor: env.splashBkColor
    },
    ios: {
      ...commonConfig.ios,
      bundleIdentifier: env.iosIdentifier,
    },
    android: {
      ...commonConfig.android,
      package: env.androidIdentifier,
      versionCode: env.versionCode,
    },
  }
};
