import users from "./users.js";

// Find - повертає обєкт, НЕ МАСИВ;
const getUserWithEmail = (users, email) => {
    return  users.find(user => {return  user.email === email});
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}