console.log("Provaaaa")

async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json();
    return obj
}

async function getDashboardData(query){
    const promises = []
    const destination = fetchJson(`http://localhost:3333/destinations?search=${query}`)
    const weather = fetchJson(`http://localhost:3333/weathers?search=${query}`)
    const airport = fetchJson(`http://localhost:3333/airports?search=${query}`)
    promises.push(destination, weather, airport)
    const data = await Promise.all(promises)
    return data
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