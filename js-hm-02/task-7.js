const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <=16) {
        return true;
    }

    return false;
};



const isLoginUnique = function(allLogins, login) {
    for (let elem of allLogins) {
        if (elem === login) {
            return false;
        }
    }
    return true;
};



const addLogin = function(allLogins, login) {
    let valid = isLoginValid(login);
    if (!valid) {
        console.log('Логін повинен містити більше 4 символів і менше 16 включно!')
    }

    let unique = isLoginUnique(allLogins, login);
    if (!unique) {
        console.log('Такий логін вже існує!');
    }

    if(valid && unique) {
        allLogins.push(login);
        console.log('Логін успішно добавлено');
    }
};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'