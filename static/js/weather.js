const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1be7fb119emsh2fa33f78ac7ae98p1d1469jsn9e8b20e623c9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (cities)=>{
    cityName.innerHTML=cities[0]
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities[0],options)
    .then(response=>response.json())
    .then((response)=>{
        
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    temp.innerHTML = response.temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
    })
    country1.innerHTML=cities[1]
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities[1],options)
    .then(response=>response.json())
    .then((response)=>{
    
    console.log(response)
    cloud_.innerHTML = response.cloud_pct
    feels_.innerHTML = response.feels_like
    humity.innerHTML = response.humidity
    max_tem.innerHTML = response.max_temp
    min_tem.innerHTML = response.min_temp
    sunris.innerHTML = response.sunrise
    sunse.innerHTML = response.sunset
    tem.innerHTML = response.temp
    win_degrees.innerHTML = response.wind_degrees
    win_speed.innerHTML=response.wind_speed    
})
    country2.innerHTML=cities[2]
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities[2],options)
    .then(response=>response.json())
    .then((response)=>{
    cloud_ss.innerHTML = response.cloud_pct
    feels_ss.innerHTML = response.feels_like
    humityss.innerHTML = response.humidity
    max_temss.innerHTML = response.max_temp
    min_temss.innerHTML = response.min_temp
    sunrisss.innerHTML = response.sunrise
    sunsess.innerHTML = response.sunset
    temss.innerHTML = response.temp
    win_degreesss.innerHTML = response.wind_degrees
    win_speedss.innerHTML =response.wind_speed
    })
    country3.innerHTML=cities[3]
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities[3],options)
    .then(response=>response.json())
    .then((response)=>{
    cloud_ssss.innerHTML = response.cloud_pct
    feels_ssss.innerHTML = response.feels_like
    humityssss.innerHTML = response.humidity
    max_temssss.innerHTML = response.max_temp
    min_temssss.innerHTML = response.min_temp
    sunrisssss.innerHTML = response.sunrise
    sunsessss.innerHTML = response.sunset
    temssss.innerHTML = response.temp
    win_degreesssss.innerHTML = response.wind_degrees
    win_speedssss.innerHTML =response.wind_speed
    })
    country4.innerHTML=cities[4]
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cities[4],options)
    .then(response=>response.json())
    .then((response)=>{
    cloudd_ssss.innerHTML = response.cloud_pct
    feelss_ssss.innerHTML = response.feels_like
    humityyssss.innerHTML = response.humidity
    max_temmssss.innerHTML = response.max_temp
    min_temmssss.innerHTML = response.min_temp
    sunriisssss.innerHTML = response.sunrise
    sunseessss.innerHTML = response.sunset
    temmssss.innerHTML = response.temp
    win_degreeesssss.innerHTML = response.wind_degrees
    win_speeddssss.innerHTML =response.wind_speed})
 .catch(err=console.error(err));
}
submitted.addEventListener("click", (e)=>{
    e.preventDefault()
    cities[0]=city.value
    getWeather(cities)
}
)
function getcity(number){
    if (number === 1){
        cities[0]="Delhi"
        getWeather(cities)
    }
    if (number === 2){
        cities[0]="Chennai"

        getWeather(cities)
    }
    if (number === 3){
        cities[0]="Bangalore"

        getWeather(cities)
    }
}

cities=["Mumbai"]
city_list = [
    "New York City",
    "Tokyo",
    "London",
    "Paris",
    "Dubai",
    "Singapore",
    "Hong Kong",
    "Los Angeles",
    "Rome",
    "Istanbul",
    "Sydney",
    "Seoul",
    "Barcelona",
    "Berlin",
    "Amsterdam",
    "Bangkok",
    "Rio de Janeiro",
    "San Francisco",
    "Shanghai",
    "Cairo",
    "Moscow",
    "Mumbai",
    "Delhi",
    "Beijing",
    "Toronto",
    "Chicago",
    "Kuala Lumpur",
    "Prague",
    "Buenos Aires",
    "Vienna",
    "Riyadh",
    "Stockholm",
    "Johannesburg",
    "Mexico City",
    "Athens",
    "Copenhagen",
    "Dublin",
    "Helsinki",
    "Oslo",
    "Warsaw",
    "Budapest",
    "Lisbon",
    "Edinburgh",
    "Brussels",
    "Zurich",
    "Madrid",
    "Milan",
    "Seville",
    "Vancouver",
    "Kyoto",
    "Wellington",
    "Havana",
    "Reykjavik",
    "São Paulo",
    "Cape Town",
    "Jerusalem",
    "Amman",
    "Marrakech",
    "Venice",
    "Dubrovnik",
    "Santorini",
    "Phuket",
    "Bali",
    "Machu Picchu",
    "Cusco",
    "Antigua Guatemala",
    "Siem Reap",
    "Hanoi",
    "Medellín",
    "Montreal",
    "Auckland",
    "Bergen",
    "Munich",
]

for (let i=0;i<4;i++){
    var n=Math.random();
    n*=(city_list.length);
    n=Math.floor(n)
    cities.push(city_list[n])
}

getWeather(cities)
