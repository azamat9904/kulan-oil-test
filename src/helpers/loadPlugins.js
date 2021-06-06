const loadPlugins = filenames => {
  const requirePlugin = require.context("@/plugins", false, /\.js$/);
  let fileMap = {};

  for (const filename of requirePlugin.keys()) {
    fileMap[filename.replace("./", "")] = true;
  }

  for (const filename of filenames) {
    const filenameWithExt = `${filename}.js`;
    if (Object.prototype.hasOwnProperty.call(fileMap, filenameWithExt))
      requirePlugin(`./${filenameWithExt}`);
    else
      throw new Error(
        `No plugin found for ${filename}. Did you spell the plugin filename correctly?`
      );
  }
};

export default loadPlugins;
