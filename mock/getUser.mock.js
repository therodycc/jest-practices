module.exports.getUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userId === 1 ?
                resolve({
                    userId: 1,
                    id: 1,
                    title: "delectus aut autem",
                    completed: false,
                })
                :
                reject(new Error('User not found'));
        }, 2000).unref();
    });
}
