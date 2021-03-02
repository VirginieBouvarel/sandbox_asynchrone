"use strict";


const getData = async function() {
    try {
        let response = await fetch("https://127.0.0.1:4747");
        if (response.ok) { // Indispensable avec fetch
            let data = await response.json();
            let dataParsed = parseJson(data[0]);
            console.log(dataParsed);
        } else {
            console.log(`${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.log(error); // --> TypeError : failed to fetch
    }
   
}

getData();





// Afin de "retyper" les données reçues au format texte, on peut créer un parser perso (inutile avec un framework)

function parseJson(object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const value = object[key];

            switch(true) {
                case value === "true" || value === "false":
                    object[key] = value === "true"; //permet de transformer la chaîne "true" en booléen true (résultat de l'xpression)
                    break;
                case /\d/.test(value):
                    object[key] = parseInt(value);
                    break;
            }
        }
    }

    return object;
}