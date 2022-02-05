// Crea un botón "cerrar" y añádelo a cada elemento de la lista
// Haga clic en un botón de cierre para ocultar el elemento de la lista actual

// Agregue un símbolo de "marcado" al hacer clic en un elemento de la lista

// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"

//===============================================================================


// Crea un botón "close" y añádelo a cada elemento de la lista.


/*
var myNodeList = document.getElementsByTagName('LI'); // Agregue un símbolo de "marcado" al hacer clic en un elemento de la lista.
var i = 0;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}



// Haga clic en un botón de cierre para ocultar el elemento de la lista actual

var close = document.getElementsByClassName("close");
var i = 0;
for (i = 0; i < close.length; i++) { // hace un bucle para añadir el evento de cierre a cada botón
    close[i].addEventListener('click', function () { // añade el evento de cierre a cada botón
        // this.parentNode.style.display = 'none'; // oculta el elemento de la lista actual
        var div = this.parentElement;
        div.style.display = "none";
    });
}


// Agregue un símbolo de "marcado" al hacer clic en un elemento de la lista

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) { // añade el evento de marcado a la lista
    if (ev.target.tagName === 'LI') { // si el elemento clicado es un elemento de la lista
        ev.target.classList.toggle("checked"); // añade o quita la clase "checked"
    }   
}, false);  // false para que no se ejecute más de una vez el evento


// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"

function newElement() {
    var li = document.createElement("li"); // crea un nuevo elemento de lista
    var inputValue = document.getElementById("myInput").value; // obtiene el valor del input
    var t = document.createTextNode(inputValue); // crea un nodo de texto con el valor del input
    li.appendChild(t); // añade el nodo de texto al elemento de lista
    if (inputValue === '') { // si el valor del input está vacío
        alert("No ingresaste ningún elemento a la lista!"); // muestra un mensaje de alerta
    } else { // si el valor del input no está vacío
        document.getElementById("myUL").appendChild(li); // añade el elemento de lista al final de la lista
    }
    document.getElementById("myInput").value = ""; // borra el valor del input


    var span = document.createElement("SPAN"); // crea un nuevo elemento de lista
    var txt = document.createTextNode("\u00D7"); // crea un nodo de texto con el valor del input
    span.className = "close"; // le asigna la clase "close" al elemento
    span.appendChild(txt); // añade el nodo de texto al elemento
    li.appendChild(span); // añade el elemento al elemento de lista


    for (i = 0; i < close.length; i++) { // hace un bucle para añadir el evento de cierre a cada botón
        close[i].addEventListener('click', function () { // añade el evento de cierre a cada botón
            // this.parentNode.style.display = 'none'; // oculta el elemento de la lista
            var div = this.parentElement;  // obtiene el elemento padre del elemento de lista
            div.style.display = "none"; // oculta el elemento de la lista
        });
    }

}

*/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");    
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//guardar mi lista en el locarlStorage




function saveLocalStorage(){
    var list = document.getElementById('myUL');
    var listItems = list.getElementsByTagName('li');
    var listArray = [];
    for (var i = 0; i < listItems.length; i++) {
        listArray.push(listItems[i].innerText);
    }
    localStorage.setItem('list', JSON.stringify(listArray));
}