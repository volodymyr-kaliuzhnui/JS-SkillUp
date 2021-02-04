import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    let result = [];
    users.forEach(user => {
        if (user.friends.includes(friendName)) {
            result.push(user.name)
        }
    })
    return result
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]