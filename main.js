console.log("Provaaaa")

async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json();
    return obj
}

async function getDashboardData(query){
    let promises = []
    const destination = fetchJson(`http://localhost:3333/destinations?search=${query}`)
    const weather = fetchJson(`http://localhost:3333/weathers?search=${query}`)
    const airport = fetchJson(`http://localhost:3333/airports?search=${query}`)
    promises = [destination, weather, airport]
    const [destinationResult, weatherResult, airportResult] = await Promise.all(promises)
    
    return{
        city: destinationResult[0].name,
        country: destinationResult[0].country,
        temperature: weatherResult[0].temperature,
        weather: weatherResult[0].weather_description,
        airport: airportResult[0].name
    }
}


getDashboardData('london')
    .then(data => {
        console.log('Dasboard data:', data);
        console.log(
            `${data.city} is in ${data.country}.\n` +
            `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`+
            `The main airport is ${data.airport}.\n`
        );
    })
    .catch(error => console.error(error));