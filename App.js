// Api Key : f7a60a2c5bef423690c135010221512
const DefaultPlace = "Delhi";
const CheckCity = /^[A-Za-z]+$/;

let WeatherContainer = document.querySelector(".Weather_Container")
let CurrentDate = document.getElementById("Date");
let CurrentTime = document.getElementById("Time");
let City = document.getElementById("Place_Name");
let SearchCity = document.getElementById("Search_Place");
let SearchButton = document.getElementById('SearchButton');
let Temperature = document.getElementById("Temperature");
let Condition = document.getElementById("Condition");
let Humidity = document.getElementById("Humidity");
let WindSpeed = document.getElementById("WindSpeed");
let ErrorMsg = document.getElementById("ErrorMsg");


let Day1= document.getElementById("Day1")
let Day1Temperature = document.getElementById("Day1Temperature");
let Day1Humidity = document.getElementById("Day1Humidity");
let Day1Wind = document.getElementById("Day1Wind");
let Day1ConditionBox = document.getElementById("Day1ConditionBox");

let Day2= document.getElementById("Day2")
let Day2Temperature = document.getElementById("Day2Temperature");
let Day2Humidity = document.getElementById("Day2Humidity");
let Day2Wind = document.getElementById("Day2Wind");
let Day2ConditionBox = document.getElementById("Day2ConditionBox");

let Day3= document.getElementById("Day3")
let Day3ConditionBox = document.getElementById("Day3ConditionBox");
let Day3Temperature = document.getElementById("Day3Temperature");
let Day3Humidity = document.getElementById("Day3Humidity");
let Day3Wind = document.getElementById("Day3Wind");


let Day4= document.getElementById("Day4")
let Day4ConditionBox = document.getElementById("Day4ConditionBox");
let Day4Temperature = document.getElementById("Day4Temperature");
let Day4Humidity = document.getElementById("Day4Humidity");
let Day4Wind = document.getElementById("Day4Wind");


let Day5= document.getElementById("Day5")
let Day5ConditionBox = document.getElementById("Day5ConditionBox");
let Day5Temperature = document.getElementById("Day5Temperature");
let Day5Humidity = document.getElementById("Day5Humidity");
let Day5Wind = document.getElementById("Day5Wind");


let Day6= document.getElementById("Day6")
let Day6ConditionBox = document.getElementById("Day6ConditionBox");
let Day6Temperature = document.getElementById("Day6Temperature");
let Day6Humidity = document.getElementById("Day6Humidity");
let Day6Wind = document.getElementById("Day6Wind");

let ConditionIconBox = document.getElementById("ConditionIcon");


SearchButton.addEventListener('click', (event)=>{
    let len= SearchCity.value
    if(SearchCity.value.match(CheckCity) && len.length != 0){
        GetWeather(SearchCity.value);
    }
    else{
        ErrorMsg.style.opacity = 1;
        ErrorMsg.innerHTML ="Kindly Enter Valid Place Name !";
        ErrorMsg.style.backgroundColor ="red";
        HideErrorMsg();
        SearchCity.focus();
        SearchCity.value="";
    }

   
})

const GetWeather =  (city) =>{
    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ef6c520e86f78c747a590411d51c38ab`;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ef6c520e86f78c747a590411d51c38ab`;
    
    fetch(url).then((resp) => resp.json())
    .then(data =>{ 
        ErrorMsg.style.opacity = 1;
        ErrorMsg.style.backgroundColor ="green";
        ErrorMsg.innerHTML =`${city}'s Weather Details Show`;
        HideErrorMsg();
        return ShowWeather(data)

    })
    .catch(()=>{
        ErrorMsg.style.opacity = 1;
        ErrorMsg.style.backgroundColor ="red";
        ErrorMsg.innerHTML =`${city} not found`;
        SearchCity.focus();
        SearchCity.value = "";
        HideErrorMsg();
    })

}

const ShowWeather = (WeatherData) =>{
    console.log(WeatherData);

    City.innerHTML = `${WeatherData.city.name}`; 
    Temperature.innerHTML =`${WeatherData.list[0].main.temp}`;
    Condition.innerHTML = `${WeatherData.list[0].weather[0].description}`;
    Humidity.innerHTML = `${WeatherData.list[0].main.humidity}`; 
    WindSpeed.innerHTML = `${WeatherData.list[0].wind.speed}`;
    ConditionIconBox.innerHTML =`<img src="http://openweathermap.org/img/wn/${WeatherData.list[0].weather[0].icon}@2x.png" alt="Condition-Icon">`
    

    Day1.innerHTML = `${WeatherData.list[2].dt_txt}`;
    Day1ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.list[2].weather[0].description}</span> </p>
    <img src="http://openweathermap.org/img/wn/${WeatherData.list[2].weather[0].icon}@2x.png" alt="Condition-Icon">`
    Day1Temperature.innerHTML =  `${WeatherData.list[2].main.temp}`+"&deg;C" ;
    Day1Humidity.innerHTML =  `${WeatherData.list[2].main.humidity}` + "&percnt;";
    Day1Wind.innerHTML =  `${WeatherData.list[2].wind.speed}` + "Km/h";

    Day2.innerHTML =  `${WeatherData.list[10].dt_txt}`;
    Day2ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.list[10].weather[0].description}</span> </p>
    <img src="http://openweathermap.org/img/wn/${WeatherData.list[10].weather[0].icon}@2x.png" alt="Condition-Icon">`
    Day2Temperature.innerHTML =  `${WeatherData.list[10].main.temp}`+"&deg;C" ;
    Day2Humidity.innerHTML =   `${WeatherData.list[10].main.humidity}` + "&percnt;";
    Day2Wind.innerHTML =  `${WeatherData.list[10].wind.speed}` + "Km/h";

    Day3.innerHTML =  `${WeatherData.list[18].dt_txt}`;
    Day3ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.list[4].weather[0].description}</span> </p>
    <img src="http://openweathermap.org/img/wn/${WeatherData.list[18].weather[0].icon}@2x.png" alt="Condition-Icon">`
    Day3Temperature.innerHTML = `${WeatherData.list[18].main.temp}`+"&deg;C" ;
    Day3Humidity.innerHTML =  `${WeatherData.list[18].main.humidity}` + "&percnt;";
    Day3Wind.innerHTML =  `${WeatherData.list[18].wind.speed}` + "Km/h";

    Day4.innerHTML = `${WeatherData.list[26].dt_txt}`;
    Day4ConditionBox.innerHTML = `<p>Condition<span>${WeatherData.list[26].weather[0].description}</span> </p>
    <img src="http://openweathermap.org/img/wn/${WeatherData.list[26].weather[0].icon}@2x.png" alt="Condition-Icon">`
    Day4Temperature.innerHTML =   `${WeatherData.list[26].main.temp}`+"&deg;C" ;
    Day4Humidity.innerHTML =   `${WeatherData.list[26].main.humidity}` + "&percnt;";
    Day4Wind.innerHTML = `${WeatherData.list[26].wind.speed}` + "Km/h";

    Day5.innerHTML = `${WeatherData.list[34].dt_txt}`;
    Day5ConditionBox.innerHTML =    `<p>Condition<span>${WeatherData.list[34].weather[0].description}</span> </p>
    <img src="http://openweathermap.org/img/wn/${WeatherData.list[34].weather[0].icon}@2x.png" alt="Condition-Icon">`
    Day5Temperature.innerHTML =  `${WeatherData.list[34].main.temp}`+"&deg;C" ;
    Day5Humidity.innerHTML =   `${WeatherData.list[34].main.humidity}` + "&percnt;";
    Day5Wind.innerHTML = `${WeatherData.list[34].wind.speed}` + "Km/h";


};

let SystemDate = new Date();
CurrentDate.innerHTML = SystemDate.getDate()+"/"+ (SystemDate.getMonth()+1) +"/"+ SystemDate.getFullYear();
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    CurrentTime.innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
  if (i < 10) {
    i = "0" + i
}; 
  return i;
}


function HideErrorMsg() {
    setTimeout(() => {
        ErrorMsg.style.opacity = 0;

    }, 5000);
}

