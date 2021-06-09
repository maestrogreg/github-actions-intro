const axios = require('axios');

async function start(){
    const result = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1');
    const { data } = result;
    const value = data[0];
    console.log(`${value.character}: ${value.quote}`)
}

start();