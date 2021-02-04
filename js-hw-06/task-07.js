import users from "./users.js";

const calculateTotalBalance = users => {
    let total =0;
    users.forEach(user => {total+= user.balance})
    return total;
};
console.log(calculateTotalBalance(users)); // 20916