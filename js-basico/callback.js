

const getUserById = (id, callback) => {
    const users = {
        id,
        name: 'David',
        lastName: 'Cerchiaro'
    };
    setTimeout(() => {
        callback(users);
    }, 2000);
}


getUserById(10, (users) => {
    console.log(users)
});