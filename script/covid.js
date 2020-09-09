fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("total-confirmed").innerHTML = data["Global"]["TotalConfirmed"];
        document.getElementById("total-recovered").innerHTML = data["Global"]["TotalRecovered"];
        document.getElementById("total-deaths").innerHTML = data["Global"]["TotalDeaths"];
    })