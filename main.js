console.log("Provaaaa")

async function getDashboardData(query){
    const response = await fetch(`http://localhost:3333/destinations?search=${query}`)
    const destination = await response.json();
    console.log(destination)
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