let txtOutput = document.getElementById("inputNum");
let num = document.getElementById("inputnum");
let enterBtn = document.getElementById("enterBtn");

async function GetNameApi(num) {
    const promise = await fetch(`https://allforonebria.azurewebsites.net/api/Minich6/OddOrEven/${num.value}`)
    const data = await promise.text();
    console.log(data);
    return data;
   
   }
   enterBtn.addEventListener('click', async function(e){
   
       if(num.value !='')
       {
           const output = await GetNameApi(num.value);
           txtOutput.textContent = output;
       }else{
           txtOutput.innerText="NOt Failed Input" ;
       }
     
   })
