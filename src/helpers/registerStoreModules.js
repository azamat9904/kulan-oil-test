const context = require.context("../store/modules", true, /[\w-]+\.js$/);
const modules = {};
context.keys().forEach(filePath => {
  const moduleName = filePath.split("/")[1].split(".")[0];
  modules[moduleName] = context(filePath).default || context(filePath);
});
export default modules;
