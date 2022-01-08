const { marked } = require("marked");
const puppeteer = require("puppeteer");
const util = require("util");
const ora = require("ora");
const fs = require("fs");
const path = require("path");
const paths = path.resolve("./marked/index.md");
console.log(paths);
const md = fs.readFileSync(paths, "utf-8");
const ret = marked(md);
console.log(ret);
const spinner = ora("Loading clone");
// puppeteer
console.log(process.platform);
console.log(process.env["HOME"]);

(async () => {
  spinner.start();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //page.setContent(ret);
  await page.goto("https://github.com/puppeteer/puppeteer/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
  spinner.succeed("拉取成功");
})();
