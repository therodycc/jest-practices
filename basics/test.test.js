const sum = require("../helpers/sum")

describe("GLOBAL", () => {

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    test("Test could be equal to test", () => {
        expect("test").toBe("test");
    })

    test("verify sum", () => {
        expect(sum(1, 2)).toBe(3);
    })

    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });

})