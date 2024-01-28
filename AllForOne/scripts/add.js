
let addedNumberOutput = document.getElementById("addedNumber");
let firstNum = document.getElementById("inputNumberOne");
let secondNum = document.getElementById("inputNumberTwo");
let enterBtn = document.getElementById("enterBtn");
//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi() {
 const promise = await fetch(`https://allforonebria.azurewebsites.net/api/AddingTwoNumbers/${firstNum.value}/${secondNum.value}`)


 const data = await promise.text();
 console.log(data);
 return data;

}
enterBtn.addEventListener('click', async function(e){
    let num;
    if(firstNum.value !=' ' && secondNum.value !=' ')
    {
        const output = await GetNameApi(firstNum.value,secondNum.value);
        addedNumberOutput.textContent = output;
    }else{
        addedNumberOutput.innerText="NOt Failed Input" ;
    }
  
})
