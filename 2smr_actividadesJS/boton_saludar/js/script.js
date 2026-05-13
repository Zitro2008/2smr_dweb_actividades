//Creo una variable que referencie al boton desde javascript
let boton = document.getElementById("btn-saludar");

boton.addEventListener("click", function(){
    //Aqui va el codigo que se ejecutara cuando se haga click en el boton
    //esta variable tiene el texto que haya en el elemento input nombre
    let contenidoCampoNombre = document.getElementById("nombre").value;
    //esta tiene la referencia al pàrrafo donde se mostrara el resultado
    let parrafo = document.getElementById("resultado");

    if(contenidoCampoNombre.trim() === ""){
      //aqui va el codigo que se ejecutara si el campo de texto esta vacio 
      parrafo.textContent = "Debes escribir tu nombre";
    } else {
        //aqui va el codigo que se ejecutara si el campo de texto tiene informacion
        //muestro en el parrafo el saludo concatenado con el contenido del campo nombre
       parrafo.textContent = "Hola " + contenidoCampoNombre.trim();
    }
});