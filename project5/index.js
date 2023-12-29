// target btun
const btnE1 = document.getElementById("btn");
const jokeH1 = document.getElementById("joke")
const apiKey = "6nk+5b619CjbAC33BTWVcA==jFdu8mX04HudXwN8";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

 /*const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    const response = await fetch(apiURL,options)
    const data = await response.json();

    jokeH1.innerText = data[0].joke;

}
btnE1.addEventListener("click",getJoke);*/

/*const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 function getJoke(){
    const response = fetch(apiURL,options)
    .then(function(response){
  return response.json();
    })
    .then(function(data){
      jokeH1.innerText =  data[0].joke;
    });
 }
 getJoke();*/
 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function getJoke(){
    const response = await fetch(apiURL,options)
    const ans = await response.json();
   jokeH1.innerText = ans[0].joke;
    
 }
getJoke();


