describe("OBJECTS", () => {
    // for objects use toEqual
    test('object assignment', () => {
        const data = { one: 1 };;
        expect({ ...data, two: 2 }).toEqual({ one: 1, two: 2 });
    });
})