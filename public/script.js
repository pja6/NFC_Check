const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';
const cityName=document.querySelector("h1");
const cityTemp=document.getElementById("temp"); 
const weatherDesc=document.getElementById("desc");
const windSpeed=document.getElementById("wind");
const feelsLike=document.getElementById("feels");
const weatherIcon = document.querySelector("img");

//weather
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;
console.log(url);

fetch(url)
.then(response => response.json())
.then( weatherData => {
  //check
  console.log( weatherData );
  console.log( weatherData.name );
  console.log( weatherData.main.temp );
  console.log(weatherData.weather[0].description)
 
  cityName.textContent = weatherData.name;
  weatherDesc.textContent=
    weatherData.weather[0].description;
  cityTemp.textContent = weatherData.main.temp+"°F"; ;
  feelsLike.textContent = weatherData.main.feels_like+"°F";
  windSpeed.textContent="Wind Speed: "+weatherData.wind.speed+" mph";
  weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
}); 
//https://api.openweathermap.org/data/2.5/weather?q=chicago
navigator.geolocation.getCurrentPosition(function(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
  console.log(lat, long);
})

//Clock
/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran
const theClockApp = () => {
    // Get and store current date and time with `new Date()` object
    const timeNow = new Date();
    // Check-Check: See all `Date()` methods and properties
    // console.log( timeNow );
  
    // Get current hours
    let gotHours = timeNow.getHours();
    // Get current minutes
    let gotMinutes = timeNow.getMinutes();
    // Get current seconds
    let gotSeconds = timeNow.getSeconds();
  
    // Check-Check: Is the data correct?
    // console.log(gotHours, gotMinutes, gotSeconds);
  
    /************
  Format Data
  ************/
    // Get AM or PM
    const gotAmOrPM = gotHours >= 12 ? "PM" : "AM";
    // Get 12 hour format
    gotHours = gotHours % 12 || 12;
    // Optionally, append zero to single digit hours
    gotHours = gotHours < 10 ? `${gotHours}` : gotHours;
    // Optionally, append zero to single digit minutes
    gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
    // Optionally, append zero to single digit seconds
    gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;
  
    /************
  Get DOM Elements
  ************/
    // Get Time
    const time = document.querySelector("time");
    // Get Hours
    const hours = document.querySelector(".hours");
    // Get minutes
    const minutes = document.querySelector(".minutes");
    // Get seconds
    const seconds = document.querySelector(".seconds");
    // Get AM or PM
    const amOrPM = document.querySelector(".amOrPM");
  
    /************
  Set DOM Elements
  ************/
    // Set the hours
    hours.innerText = gotHours;
    // Set the minutes
    minutes.innerText = gotMinutes;
    // Set the seconds
    seconds.innerText = gotSeconds;
    // Set AM or PM
    amOrPM.innerText = gotAmOrPM;
    // Set `datetime` attribute
    time.setAttribute("datetime", `${gotHours}:${gotMinutes}`);
  };
  
  /************
  Run App
  ************/
  // Re-run `theClockApp` every 1 second (1000 ms)
  setInterval(theClockApp, 1000);
  
//Date
/************
Static Data
************/
const allTheMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "November",
    "December"
  ];
  const allTheDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  /************
  Dynamic Data
  ************/
  // Get and store current date and time with `new Date()` object
  const dateNow = new Date();
  // Check-Check: See all `Date()` methods and properties
  console.log(dateNow);
  
  const gotMonth = dateNow.getMonth();
  // Get current day of the month
  let gotDayOfMonth = dateNow.getDate();
  // Get current year
  const gotYear = dateNow.getFullYear();
  // Get current day of the week
  const gotDayOfWeek = dateNow.getDay();
  
  // Check-Check: Is the data correct?
  console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);
  
  /************
  Get DOM Elements
  ************/
  // Get the month
  const month = document.querySelector(".month");
  // Get day of the month
  const dayOfMonth = document.querySelector(".dayOfMonth");
  // Get year
  const year = document.querySelector(".year");
  // Get Day of Week
  const dayOfWeek = document.querySelector(".dayOfWeek");
  
  /************
  Set DOM Elements
  ************/
  // Set the month
  month.innerText = allTheMonths[gotMonth];
  // Set day of the month
  dayOfMonth.innerText = gotDayOfMonth;
  // Set the year
  year.innerText = gotYear;
  // Set the day of the week
  dayOfWeek.innerText = allTheDays[gotDayOfWeek];

  //BizSpeak of the day

  const bizURL = 'https://corporatebs-generator.sameerkumar.website/';

  const bizSpeakOutput = document.getElementById('bizPhrase');
  console.log(bizURL);

  bizSpeakOutput.innerText=bizURL;
  fetch(bizURL)
  .then(response => response.json())
  .then( bizSpeak => {
    //check
    console.log( bizSpeak );
    console.log( bizSpeak.phrase );
    bizSpeakOutput.innerText = bizSpeak.phrase;
  });
