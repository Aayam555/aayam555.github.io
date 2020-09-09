function weather() {
    search = document.getElementById("search").value;
    weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7ac061e879911408262a508020b1ed07
&units=metric`).then(res => res.json())
    .then(data => {
        name = data["name"];
        temp = data["main"]["temp"];
        place = document.getElementById("place").innerHTML = name;
        temp = document.getElementById("temp").innerHTML = "Temp : " + temp + "°C";
    })
}
