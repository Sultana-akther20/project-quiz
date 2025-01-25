
const {formSubmit}= require("../script");


beforeAll(() => {
    let fs =require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("formSubmit contain correct keys", () => {
    test("username key exists", () => {
    expectExport("username" in formSubmit).toBe(true);

    });
});