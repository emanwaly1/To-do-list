const input = document.getElementById("input-box");
const lastcontainer=document.getElementById("list-container");

function addTask(){
if(input.value === ""){
    alert("you should put a text ");
}
else{
    let li = document.createElement("li");
    li.innerHTML= input.value;
    lastcontainer.appendChild(li);
    let span= document.createElement("span");
    span .innerHTML="\u00d7"
    li.appendChild(span)
}
input.value="";
}
lastcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})

function saveData(){
localStorage.setItem("bert",lastcontainer.innerHTML);

}
function showTask(){
    lastcontainer.innerHTML=localStorage.getItem("bert")
}
showTask();