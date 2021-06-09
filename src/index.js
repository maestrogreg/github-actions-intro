const axios = require('axios');
const core = require('@actions/core');

async function start(){
    const character = core.getInput('character');
    console.log(character);

    const result = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1');
    const { data } = result;
    const value = data[0];
    console.log(`${value.character}: ${value.quote}`)
}

start();