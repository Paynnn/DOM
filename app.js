//console.dir(document)
//console.log(document.domain);

//console.log(document.title);
//document.title="Moj prvi sajt"

//console.dir(document.head)
//console.log(document.all)
//console.log(document.all[8])

//document.all[8].textContent="drugi naslov"
//console.log(document.forms);
//console.log(document.forms[0]);

//console.log(document.getElementsByClassName("list-item"));

let items=document.getElementsByClassName("list-item");

items[3].textContent = "promenio sam listu";
items[2].style.backgroundColor = "purple"
for(let i=0;i<items.length;i++){
    if(i%2==0)items[i].style.backgroundColor ="cyan";
    else items[i].style.backgroundColor = "lightgrey"
}
//console.log(document.getElementById("header-title"))
let headerTitle = document.getElementById("header-title");

headerTitle.innerHTML="<h3> ASD </h3>"
console.log(headerTitle.textContent)
console.log(headerTitle.innerText)

//textContent vs innerText

console.log(document.getElementsByTagName("li"));

let li = document.getElementsByTagName("li");

li[1].textContent = "asd";
li[1].style.fontSize = "20px";
li[1].fontWeight = "bold";

let title= document.getElementsByClassName("title")
title[1].textContent = "Promenio title"

let form = document.getElementsByClassName("form-inline");
form[0].style.backgroundColor = "yellow"

let container = document.getElementById("container");
container.style.backgroundColor = "Green"

let drugiLink=document.querySelector("#google a")
console.log(drugiLink)

drugiLink.style.backgroundColor = "red"

document.querySelector("#asd").style.backgroundColor ="cyan";




