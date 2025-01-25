const { describe } = require("yargs");
const {formSubmit}= require("../script");
const { test } = require("picomatch");
const expectExport = require("expect");

beforeAll(() => {
    let fs =require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("form contain correct keys", () => {
    test("UserName key exists", () => {
    expectExport("UserName", in form).toBe(true);

    });
});