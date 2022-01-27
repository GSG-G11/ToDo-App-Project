var MyToDo = [];
var incre=2;
function todo()
{
	var div=document.createElement("DIV");
	div.className="mainMyToDo";
	div.id="mainMyToDo"+incre;
	var parent=document.getElementsByClassName("MyToDo");
	parent[0].insertBefore(div, parent[0].childNodes[0]);
	
    //end My ToDo 
	var button1=document.createElement("button");
	button1.className="end";
	var i=document.createElement("i");
	i.className="fa fa-check";
	i.id="check";
	var fun1="check"+"("+"'"+i.id+"'"+");";
	i.setAttribute("onClick",fun1);
	button1.appendChild(i);
	div.appendChild(button1);

    // title My ToDo
	var titleMyToDo=document.createElement("p");
	titleMyToDo.className="titleMyToDo";
	titleMyToDo.id="titleMyToDo"+incre;
	var title=document.getElementById("title");
	// time My ToDo
	var timeMyToDo=document.createElement("p");
	timeMyToDo.className="timeMyToDo";
	timeMyToDo.id="timeMyToDo"+incre;
	var time=document.getElementById("time");
    // description My ToDo
	var descriptionMyToDo=document.createElement("p");
	descriptionMyToDo.className="descriptionMyToDo";
	descriptionMyToDo.id="descriptionMyToDo"+incre;
	var description=document.getElementById("description");

	var todo ={title: title.value,time: time.value,description: description.value};
	MyToDo.push(todo);
	console.log(MyToDo);

	var titlepa=title.value.replace(/\s/g, "\u00a0");
	title.value="";
	var text1=document.createTextNode(titlepa);
	
	var timepa=time.value.replace(/\s/g, "\u00a0");
	time.value="";
	var text2=document.createTextNode(timepa);

	var descriptionpa=description.value.replace(/\s/g, "\u00a0");
	description.value="";
	var text3=document.createTextNode(descriptionpa);

	titleMyToDo.appendChild(text1);
	timeMyToDo.appendChild(text2);
	descriptionMyToDo.appendChild(text3);

	div.appendChild(titleMyToDo);
	div.appendChild(timeMyToDo);
	div.appendChild(descriptionMyToDo);

	//edit My ToDo 
	var button2=document.createElement("button");
	button2.className="edit";
	button2.innerHTML = "Edit"; 
	div.appendChild(button2);

	//delete My ToDo 
	var button3=document.createElement("button");
	button3.className="delete";
	button3.innerHTML = "Delete"; 
	var fun2="deleteToDo"+"("+"'"+div.id+"'"+");";
	button3.setAttribute("onClick",fun2);
	div.appendChild(button3);
	incre ++;
}
function check(i)
{
	var red_check=document.getElementById(i);
	red_check.style.color = "#EF5DA8";
}
function deleteToDo(element)
{
	var ToDoDelete = document.getElementById(element);
    /*ToDoDelete.style.visibility="hidden";*/
    ToDoDelete.remove();	
}