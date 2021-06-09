const axios = require('axios');
const core = require('@actions/core');


const defaultCharacter = 'dr-zoidberg'
async function start(){
    const character = core.getInput('character') ||defaultCharacter;
    console.log(character);

    const result = await axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/1`);
    const { data } = result;
    const value = data[0];
    console.log(`${value.character}: ${value.quote}`);

    core.setOutput('quote', value);
}

start();