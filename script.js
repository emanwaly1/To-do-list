const input= document.getElementById("input-box");
const lastcontainer=document.getElementById("list-container");
function addTask(){
    if(input.value ===''){
        alert("you must wirte something ");
    }

else
{
    let li =document.createElement("li");
    li.innerHTML= input.value;
    lastcontainer.appendChild(li);
let span =document.createElement("span");
span.innerHTML="\u00d7"
li.appendChild(span);
} input.value="";//بيفضي الinput 
}
lastcontainer.addEventListener("click",function(r){//بنعلم علي ul بحيث اي حاجه 
    //تكون جواها متعلمه وعشان نعرف اي وحده جوا li لازم نعمل 
    //target .tagName
    if(r.target.tagName === "LI")  { // اذا دست علي عنصر li يروح مغير الكلاس الي تشيكد
      r.target.classList.toggle("checked");//toggle -> دي بتبدل وبتحط class name في ال <li></li>
      saveData();
    }else if(r.target.tagName ==="SPAN"){//اذا داس علي الأشاره الغلط نحذف العمصر 
      r.target.parentElement.remove();
      saveData();
      saveData();
  }
},false)

function saveData(){
  localStorage.setItem("data",lastcontainer.innerHTML);  //lastcontainer.innerhtml = هو اللي داخل في ال""li  "
}
function showTask(){
    lastcontainer.innerHTML=localStorage.getItem("data")
}
showTask();