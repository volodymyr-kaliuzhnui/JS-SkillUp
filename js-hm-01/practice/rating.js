let rating = prompt('Введіть оцінку студента');


if (rating === '' || isNaN(rating) || rating >= 101) {
    alert('Введено невірні наді');
} else {
    if (rating >= 89 && rating <=100) {
        alert(`У болонському форматі оцінка студента це A`)
    } else if (rating >=75 && rating <= 88) {
        alert(`У болонському форматі оцінка студента це B`)
    } else if (rating >= 60 && rating <=74) {
        alert(`У болонському форматі оцінка студента це C`)
    } else if (rating >= 45 && rating <= 59) {
        alert(`У болонському форматі оцінка студента це D`)
    } else if (rating >= 20 && rating <= 44) {
        alert(`У болонському форматі оцінка студента це E`)
    } else {
        alert(`У болонському форматі оцінка студента це F`)
    }
}
console.log('my name');