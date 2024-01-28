let outPut = document.getElementById("outPut");
let name1 = document.getElementById("userName");
let time = document.getElementById("time");
let enterBtn = document.getElementById("enterBtn");
//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi2() {
 const promise = await fetch(`https://allforonebria.azurewebsites.net/AskingQuestions/Name/${name1.value}/${time.value}`)
 const data = await promise.text();
 return data;

}
enterBtn.addEventListener('click', async function(event){
    if(name1.value != "" && time.value != ""){
        let result = await GetNameApi2(name1.value, time.value);
        outPut.innerText = result;
    }
    else
    outPut.innerText = "Error!";
  
  
})