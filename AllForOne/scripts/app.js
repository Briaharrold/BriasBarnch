let nameOutput = document.getElementById("nameOutput");
let inputName = document.getElementById("inputName");
let enterBtn = document.getElementById("enterBtn")
//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi() {
 const promise = await fetch(`https://allforonebria.azurewebsites.net/SayHello/SayHello/${inputName.value}`)
 
 const data = await promise.text();
 console.log(data);
 return data;

}
enterBtn.addEventListener('click', async function(e){
  const output = await GetNameApi(inputName);
    nameOutput.textContent = output;
})

