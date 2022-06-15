const prompt = require("./bash");
const pwd = () => {
  if (cmd === "pwd") {
    console.log(`${cwd()}`);
  }
};
