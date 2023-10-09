//your code here
const images = document.querySelectorAll("#parent>img")
const container = document.getElementById("parent")

for(let i=0; i<images.length; i++)
{
images[i].addEventListener("dragover",ondragover)
images[i].addEventListener("dragstart",ondragstart)
images[i].addEventListener("drop",ondrop)
}


function ondrop(event) {
	 event.preventDefault();
	
let sourceId = event.dataTransfer.getData("sourceId")	
let srcElement = document.getElementById(sourceId)
let desElement = event.target;


let NsrcElement =  srcElement.nextElementSibling;
let NdesElement = desElement.nextElementSibling;


container.insertBefore(desElement,NsrcElement)
container.insertBefore(srcElement,NdesElement)

	
}


function ondragover(event){
event.preventDefault();
}

function ondragstart(event){
event.dataTransfer.setData("sourceId",event.target.id)
}



