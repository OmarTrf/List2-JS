var items = document.getElementsByClassName('menu')[0].getElementsByTagName('li');
var bigText = document.getElementsByClassName('text')[0];
var btn = document.getElementsByClassName('btn')[0];
var menu = document.getElementsByClassName('menu')[0];
var counter = 1;


menu.addEventListener('click',selectItem);


function selectItem(n) {
	if (n.target.nodeName == 'LI') {
		bigText.innerHTML = n.target.innerHTML; 
		for(var i=0;i<items.length;i++){
			items[i].classList.remove('selected');
		}
		n.target.classList.add('selected');
	}
}

btn.addEventListener('click',newItem);
function newItem(){
  menu.innerHTML += "<li>new line"+counter+"</li>"; 
  counter++;
}