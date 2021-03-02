"use strict";


getData();


function getData() {
    fetch("user.json")
    .then(response => response.json())
    .then(response => console.log(parseJson(response[0])))
    .catch(error => console.log(error));
}







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