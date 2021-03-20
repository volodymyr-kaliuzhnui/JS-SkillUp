let refs = {
    city: document.querySelector('#city'),
    btn: document.querySelector('#btn'),
    icon: document.querySelector('.icon-weather'),
    weather: document.querySelector('.weather'),
    countryName: document.querySelector('.country-name'),
    cityName: document.querySelector('.city-name'),
    temp: document.querySelector('.temp'),
    doscrpIcon: document.querySelector('.icon-about')

}
let {city, btn, icon, weather, countryName, cityName, temp, doscrpIcon} = refs;

let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKay = '5d066958a60d315387d9492393935c19';


function renderWeather (data) {
    let {name, main, sys, weather} = data;
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
    countryName.textContent = `Country: ${sys.country}`;
    cityName.textContent = `City: ${name}`;
    let convertTemp = Math.round((main.temp - 273.15));
    temp.textContent = `Temperature: ${convertTemp}°C`;
    doscrpIcon.textContent = weather[0].main;

}

function getWeather() {
    if (city.value === '' || !isNaN(city.value)) {
        alert('Enter your country!');
        return
    }

    fetch(`${url}${city.value}&appid=${apiKay}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === '404') {
                alert(data.message)
                return
            }
            renderWeather(data)
        })
        .catch(error => {
           console.log(error)
        })
    weather.classList.add('active')
}
btn.addEventListener('click', getWeather)
