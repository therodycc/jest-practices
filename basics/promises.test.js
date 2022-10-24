const { getUser } = require("../user/getUser");
const axios = require("axios");

const user1 = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};

jest.mock("axios")

describe("PROMISES", () => {

    beforeAll(() => {
        axios.get.mockReturnValueOnce({ data: user1 })
    })

    test("Is user 1 - then ", () => {
        getUser(1).then((data) => {
            expect(data).toEqual(user1);
        });
    });

    test("getting user 1 with axios - await ", async () => {
        const result = await axios.get();
        expect(result.data).toEqual(user1);
        expect(result).not.toBeNull();
    });

    test('the fetch fails with an error', async () => {
        expect.assertions(2);
        try {
            await getUser()
        } catch (e) {
            expect(typeof e).toEqual(typeof {});
        }
    });
});

