/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let file = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(file);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should be present", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});