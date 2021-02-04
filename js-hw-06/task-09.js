import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
    return users.sort((a, b) => {
        return a.friends.length - b.friends.length;
    }).map(user => { return user.name});
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]