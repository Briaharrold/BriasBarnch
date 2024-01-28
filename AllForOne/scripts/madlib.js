let enterBtn = document.getElementById("enterBtn");
let outPut = document.getElementById("outPut");
let inputA= document.getElementById("inputA");
let inputB= document.getElementById("inputB");
let inputC= document.getElementById("inputC");
let inputD= document.getElementById("inputD");
let inputE= document.getElementById("inputE");
let inputF= document.getElementById("inputF");
let inputG= document.getElementById("inputG");
let inputH= document.getElementById("inputH");
let inputI= document.getElementById("inputI");
let inputJ= document.getElementById("inputJ");


//declare all vaules need to start process
//unserinput to get name
//output inserted name 
//on click taking data and put in api

async function GetNameApi3() {
 const promise = await fetch(`https://allforonebria.azurewebsites.net/api/Minich5/Minich5/${inputA.value}/${inputB.value}/${inputC.value}/${inputD.value}/${inputE.value}/${inputF.value}/${inputG.value}/${inputH.value}/${inputI.value}/${inputJ.value}`)
 const data = await promise.text();
 console.log(data);
 return data;

}
enterBtn.addEventListener('click', async function(e){
    
    // if(inputA.value != " " && inputB.value != " " &&inputC.value != " " && inputD.value != " " && inputE.value!= " " && inputF.value != " " && inputG.value != " " && inputH.value != " " && inputI.value != " " && inputJ.value != " ")
    // {
        const output = await GetNameApi3(inputA.value, inputB.value, inputC.value, inputD.value, inputE.value, inputF.value, inputG.value, inputH.value, inputI.value, inputJ.value);
        outPut.textContent = output;
    // }else{
    //     outPut.innerText="NOt Failed Input" ;
    // }
  
})