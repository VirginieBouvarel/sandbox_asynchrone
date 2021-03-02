"use strict";


getData();


function getData() {
    const request = new XMLHttpRequest();

    request.onload = function() {
        if (this.status === 200) {
            const responseParsed = parseJson(JSON.parse(this.responseText)[0]); //responseText est une seule longue chaîne 
            console.log(responseParsed);
        } else {
            console.log(`${this.status} - ${this.statusText}`);
        } 
    }
    request.onerror = function() { //erreur au niveau du navigateur uniquement
        console.log(`La requête a échoué`);
    }
    request.onprogress = function(event) {
        if (event.lengthComputable) {
            console.log(`${event.loaded} octets reçus sur un total de ${event.total}`);
        }
    }

    request.open("GET", "user.json"); // 200 --> responseParsed
    // request.open("GET", "users.json"); // Test ligne 15 --> 404 - Not found
    request.send();
  
}









// Afin de "retyper" les données reçues au format texte, on peut créer un parser perso 

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
