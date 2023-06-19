const questionreponse = document.querySelector("#questionreponse");
const inputqa = document.querySelector("#inputqa");

fetch("https://examen-carambar.onrender.com/jokes/random")
.then((response) => response.json())
.then((response) =>{
    questionreponse.innerHTML += `<div class="question">${response.result.question}</div>`
    console.log(response.result);
})
