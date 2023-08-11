import Words from "../models.js"

try {
let fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache'
};

const response = await fetch('https://trouve-mot.fr/api/sizemax/4/10', fetchOptions);
const jsonResponse = await response.json();
console.log(jsonResponse);
}catch (error){
    console.log('Fetch error: ', error);
}



    
