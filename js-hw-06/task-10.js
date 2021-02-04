import users from "./users.js";

const getSortedUniqueSkills = users => {
    let skills = [];
    users.forEach(user => {
        user.skills.forEach(skill => {
            if (!skills.includes(skill)) {
                skills.push(skill)
            }
        })
    })
    return skills.sort();

};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]