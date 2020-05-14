const placeInput = document.getElementById('placeInput');
let btn = document.getElementById('submit');


btn.addEventListener('click', () =>{
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' + placeInput.value + 
        '&units=imperial&appid=0509a85eeb71ef944d4a6d16ac70b2bf'
    )
    .then(res => res.json())
    .then(data => {
        let temperture = data['main']['temp'];
        document.getElementById('temp').innerHTML = temperture;

        let desc = data['weather'][0]['description'];
        document.getElementById('description').innerHTML = desc;

        let humidity = data['main']['humidity'];
        document.getElementById('humidity').innerHTML = humidity;

        let country = data['sys']['country'];
        document.getElementById('country').innerHTML = placeInput.value + ', '+ country;

        let wind = data['wind']['speed'];
        document.getElementById('wind').innerHTML = wind;

        let cloud = data['clouds']['all'];
        document.getElementById('cloud').innerHTML = cloud;

        let lon = data['coord']['lon'];
        let lat = data['coord']['lat'];
        document.getElementById('coordinates').innerHTML = lon + ', ' + lat;

        let sunrise = data['sys']['sunrise'];
        document.getElementById('sunrise').innerHTML = sunrise;

        let sunset = data['sys']['sunset'];
        document.getElementById('sunset').innerHTML = sunset;
    })

    
})


