import Actions from '../actions/Actions'
import APIKey from '../text';

var units = "metric";


function parseApiData(data) {
    var responseMetadata =[];
    responseMetadata = [
    {name: data.name},
    {temp: round(data.main.temp)},
    {humidity: data.main.humidity},
    {weather: data.weather[0].main},
    {wind: data.wind.speed}
    ]
    return responseMetadata; 
}

function parseDataByDays(data) {
    var responseMetadata =[];
    var startDate = new Date();
    var weekdays = new Array(7)
    weekdays = GetDates(startDate, 6);
    responseMetadata = [
        {day:weekdays[0], value: round(data.list[0].temp.day)},
        {day:weekdays[1], value: round(data.list[1].temp.day)},
        {day:weekdays[2], value: round(data.list[2].temp.day)},
        {day:weekdays[3], value: round(data.list[3].temp.day)},
        {day:weekdays[4], value: round(data.list[4].temp.day)},
        {day:weekdays[5], value: round(data.list[5].temp.day)},
        {day:weekdays[6], value: round(data.list[6].temp.day)}
    ]
    return responseMetadata; 
}

 var startDate = new Date();
    var aryDates = GetDates(startDate, 6);
    function GetDates(startDate, daysToAdd) {
        var aryDates = [];
    
        for (var i = 0; i <= daysToAdd; i++) {
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push(DayAsString(currentDate.getDay()));
        }
    
        return aryDates;
    }
    
    function DayAsString(dayIndex) {
        var weekdays = new Array(7);
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tue";
        weekdays[3] = "Wed";
        weekdays[4] = "Thu";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";
    
        return weekdays[dayIndex];
    }
    

function round(temp) {
    return Math.round(temp / 0.5) * 0.5;
}

var WeatherAPI = {
    getDataByCity(city){
    let resultData;
    if(city !== undefined){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units='+units+'&appid='+APIKey+'')
        .then(res => res.json())
        .then(
        (result) => {
            if(result.cod === 200){
                this.saveToHistory(city)
                resultData = parseApiData(result) 
                Actions.setResponseData(resultData)
            }
            else{
                Actions.setApiError();
            }
        })
    }
    },

    getDataForDays(city){
        let resultData;
        if(city !== undefined){
            fetch('https:/api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt=7&units=metric&appid='+APIKey+'')               
            .then(res => res.json())
            .then(
            (result) => {
                if(result.cod === "200"){
                    resultData = parseDataByDays(result)
                    Actions.setDataForDays(resultData)
                }
                else{
                    Actions.setApiError();
                }
            })
        }
    },

    saveToHistory(city){
        var date = new Date().toString().split("GMT+")[0];
        Actions.addToHistory({city: city,date : date})
    },
    getTodaysDate(){
        var date = new Date().toString().split("GMT+")[0];
        return date
    },

    swapCity(){
        Actions.swapCity();
    },
    goToHome(){
        Actions.goToHome();
    },
    goToCity(){
        Actions.goToCity();
    }
    
}
export default WeatherAPI