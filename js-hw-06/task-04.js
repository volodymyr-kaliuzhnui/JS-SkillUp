import users from "./users.js";

const getInactiveUsers = users => {
    return users.filter(user => { return !user.isActive})// !user.isActive - юзери які НЕ мають активності
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]