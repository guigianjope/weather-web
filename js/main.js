
let allinfo = document.querySelector(".app-wrap");
           
let city = allinfo.querySelector(".city");
/* let time = allinfo.querySelector(".hour"); */
let date = allinfo.querySelector(".date");
let now = new Date();
let temp = allinfo.querySelector(".temp");
let weather = allinfo.querySelector(".weather");
let hilow = allinfo.querySelector(".hi-low");



let searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keypress', getCity);

function getCity(event) {
    if (event.keyCode == 13) { //13 = enter
        getWeather(searchbox.value);
    } 
}

function getWeather(searchbox){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbox}&units=metric&APPID=d8f908e013614921f3c899d0f455fdf8`)
    .then(data => {
        return data.json();
    })
    .then(data => {
        city.textContent = `${data.name}, ${data.sys.country}`;
        /* time.textContent = hourBuilder(now); */
        date.textContent = dateBuilder(now);
        temp.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
        weather.textContent = data.weather[0].main;
        hilow.textContent = `${data.main.temp_min.toFixed(0)}°C / ${data.main.temp_max.toFixed(0)}°C`;
    })
    .catch(error => alert ('This city does not exist. Try again!!!'));
}

function dateBuilder (d) {
    let allmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let weekday = week[now.getDay()];
    let day = now.getDate();
    let month = allmonths[now.getMonth()];
    let year = now.getFullYear();

     return `${weekday}, ${day} ${month} ${year}`;
}

/* function hourBuilder (d) {
    let hour = now.getHours();
    let minutes = now.getMinutes();

    return `${hour}:${minutes}`;
} */