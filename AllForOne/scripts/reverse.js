const txtOutput = document.getElementById("outPut");
const firstWord = document.getElementById("inputWord");
const enterBtn = document.getElementById("enterBtn");

const txtOutput2 = document.getElementById("outPut2");
const num = document.getElementById("inputNum");
const enterBtn2 = document.getElementById("enterBtn2");
//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi() {
 const promise = await fetch(`https://allforonebria.azurewebsites.net/Alphanumeric/ReverseIt/${firstWord.value}`)
 const data = await promise.text();
 return data;

}
enterBtn.addEventListener('click', async function(e){

    if(firstWord.value !=' ')
    {
        const output = await GetNameApi(firstWord.value);
        txtOutput.textContent = output;
    }else{
        txtOutput.innerText="NOt Failed Input" ;
    }
  
})

async function GetNameApi2() {
    const promise = await fetch(`https://allforonebria.azurewebsites.net/Numeric/ReverseNumber/${num.value}`)
    const data = await promise.text();
    return data;
   
   }
   GetNameApi();
   GetNameApi2();

enterBtn2.addEventListener('click', async function(e){

    if(num.value !=' ')
    {
        const output = await GetNameApi2(num.value);
        txtOutput2.textContent = output;
    }else{
        txtOutput2.innerText="NOt Failed Input" ;
    }
  
})
