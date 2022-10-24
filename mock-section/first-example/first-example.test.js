describe("first example", () => {
    test('jest mock basics', () => {
        const myMock = jest.fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce("Hello world!")
            .mockReturnValueOnce(1)
            
        const result1 = myMock()
        const result2 = myMock()
        const result3 = myMock()

        expect(myMock).toHaveBeenCalled()
        expect(myMock).toHaveBeenCalledTimes(3)

        expect(result1).toBe(true)
        expect(result2).toBe("Hello world!")
        expect(result3).toBe(1)
    })
})