import users from "./users.js";

//Filter - повертає масив обєктів
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => {return  user.eyeColor === color})
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]