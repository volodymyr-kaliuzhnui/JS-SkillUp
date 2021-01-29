let country = prompt('Введите вашу страну').toLowerCase();
let countryUpCase = country[0].toUpperCase() + country.slice(1);

switch (country) {
    case 'китай':
        alert(`Доставка в ${countryUpCase} будет стоить 150 кредитов`);
        break;
    case 'чили':
        alert(`Доставка в ${countryUpCase} будет стоить 250 кредитов`);
        break;
    case 'австралия':
        alert(`Доставка в ${countryUpCase} будет стоить 165 кредитов`);
        break;
    case 'индия':
        alert(`Доставка в ${countryUpCase} будет стоить 90 кредитов`);
        break;
    case 'ямайка':
        alert(`Доставка в ${countryUpCase} будет стоить 130 кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}