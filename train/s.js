const input =document.getElementById("input-box");
const last =document.getElementById("list-container");

function add(){
    if(input.value===""){
        alert("wirte somathing")
    }
    else{
        let li =document.createElement("li");
       li.innerHTML=input.value;
last.appendChild(li);
let d = document.createElement("hr");
li.appendChild(d)
let span = document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);
}

  input.value="";  
        
    
}