"use strict";


getData();


function getData() {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (this.readyState === XMLHttpRequest.DONE) { //ou readyState === 4

            if (this.status === 200) {
                const responseParsed = parseJson(JSON.parse(this.responseText)[0]); //responseText est une seule longue chaîne 
                console.log(responseParsed);
            } else {
                console.log(`${this.status} - ${this.statusText}`);
            }
        }
    }

    request.open("GET", "user.json");
    request.send();
  
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
