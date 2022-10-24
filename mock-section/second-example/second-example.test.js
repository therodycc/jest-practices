const { storage } = require('../../lib/storage')
const { saveUsername, getUsername } = require('../../user')

jest.mock('../../lib/storage')

describe("second example with mocks", () => {
    it("saving user correctly", () => {
        let username = "john doe"
        saveUsername(username)

        expect(storage.save).toHaveBeenCalledWith({ key: "username", value: username })
        expect(storage.save).toHaveBeenCalledTimes(1)
        expect(storage.save).toHaveBeenCalled()
    })

    it("getting username correctly", () => {
        let username = "john doe"
        storage.get.mockReturnValueOnce(username)
        const name = getUsername()

        expect(storage.get).toHaveBeenCalled()
        expect(storage.get).toHaveBeenCalledTimes(1)
        expect(name).toBe(username)
    })
})