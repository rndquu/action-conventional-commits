const {execSync} = require('child_process');

// Remove dist
execSync("rm -rf ./dist");
execSync("yarn cache clean --force");
execSync("yarn install --loglevel=error");

const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
console.log(output.toString());