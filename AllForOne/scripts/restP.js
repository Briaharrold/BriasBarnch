let nameOutput = document.getElementById("nameOutput");
let inputName = document.getElementById("inputName");
let enterBtn = document.getElementById("enterBtn")
//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi() {

 const promise = await fetch(`https://allforonebria.azurewebsites.net/RestaurantP/Breakfast/${inputName.value}`)

 const data = await promise.text();
 console.log(data);
 return data;

}
async function GetNameApi2() {
    
    const promise = await fetch(`https://allforonebria.azurewebsites.net/RestaurantP/Pizza/${inputName.value}`)
   
    const data = await promise.text();
    console.log(data);
    return data;
   
   }
   async function GetNameApi3() {
    
    const promise = await fetch(`https://allforonebria.azurewebsites.net/Pizza/Mexican/${inputName.value}`)
   
    const data = await promise.text();
    console.log(data);
    return data;
   
   }

   enterBtn.addEventListener('click', async function(e){
    if(inputName=="breakfast")
    {
      const output = await GetNameApi(inputName.value);
      nameOutput.textContent = output;
      
    }
    
  })
  enterBtn.addEventListener('click', async function(e){
    if(inputName=="breakfast")
    {
      const output = await GetNameApi2(inputName.value);
      nameOutput.textContent = output;
      
    }
      
  })

  enterBtn.addEventListener('click', async function(e){
    if(inputName=="pizza")
    {
      const output = await GetNameApi3(inputName.value);
      nameOutput.textContent = output;
      
    }
      
  })


 