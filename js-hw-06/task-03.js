import users from "./users.js";

const getUsersWithGender = (users, gender) => {
    let genderUsers = users.filter(user => {return user.gender === gender}); // получив всіх юзерів із статью male
    let gendersMale = genderUsers.map(user => {return  user.name}) // вивів імена всії юзерів цієї статі
    return gendersMale
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]