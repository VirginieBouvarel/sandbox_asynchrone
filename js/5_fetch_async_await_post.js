"use strict";


const insertPost = async function (data) {
   let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   });
   
    let responseData = await response.json();
    console.log(responseData);
   
}


insertPost({
   name: 'Jean',
   age: 30
});





