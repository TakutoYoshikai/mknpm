#!/usr/bin/env node

const fs = require("fs");

function updatePackageJson(filePath, name) {
  const packageJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
  packageJson.name = name;
  packageJson.bin = {}
  packageJson.bin[name] = "./bin/" + name;
  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, "  "));
}

updatePackageJson(process.argv[2], process.argv[3]);
