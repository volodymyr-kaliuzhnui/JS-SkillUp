const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);

let userKay = Object.keys(user);
console.log(userKay);

for (let item of userKay) {
    console.log(`${item}: ${user[item]}`);
}