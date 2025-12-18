console.log("Provaaaa")

async function getDashboardData(query){
    const promises = []
    const destinationPromise = fetch(`http://localhost:3333/destinations?search=${query}`)
    const weatherPromise = fetch(`http://localhost:3333/weathers?search=${query}`)
    const airportPromise = fetch(`http://localhost:3333/airports?search=${query}`)

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