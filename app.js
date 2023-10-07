const inputText =document.getElementById("input-text");
const addBtn=document.getElementById("add-btn")
const listContainer =document.getElementById("lists")

addBtn.addEventListener("click",()=>{
   if(inputText.value === ""){
    alert("Please write something first on a add list items box")
   }else {
       let li = document.createElement("li")
       li.innerText = inputText.value
       listContainer.appendChild(li);
       let span = document.createElement("span");
       span.innerText = "\u00d7"
       li.appendChild(span)
       saveData ()
   }
   inputText.value= ""

   
    
})

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData ()

    }else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            saveData ()
        }


})
function saveData (){
    localStorage.setItem("data", listContainer.innerHTML)
}

function getData(){
    listContainer.innerHTML= localStorage.getItem("data")
}
getData()