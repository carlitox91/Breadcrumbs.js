// Agregando el evento onload para que se ejecute el script
if (document.addEventListener){
	window.addEventListener('load',breadcrums,false);
} else {
	window.attachEvent('onload',breadcrums);
}
function breadcrums()
{
	var locacionActual = decodeURI(location.pathname); // Obteniendo la locación actual y decodificando los caracteres especiales de la url
	locacionActual = locacionActual.replace(/\.\w{3,5}$/,''); // Quitando la extención de la página actual

	var URLArray=locacionActual.split("/"); // Separando la url por el caracter "/"
	var output='<li><a href="/">Home</a></li>'; // Este será el primer enlace que se muestre, será el enlace a la home/inicio
	var path = "/"; // Es necesario agregar el "/" inicial a las URLs

	// Si la página actual está vacía, es index.* o default.*, se remueve del arreglo
	if (URLArray[URLArray.length-1] == '' || URLArray[URLArray.length-1].match(/^index|^default/i) ) {
		URLArray.length--;
	}

	if (URLArray.length > 1) {
		for (i = 1; i < URLArray.length-1; i++) {  // Ciclo para mostrar los links
			path += URLArray[i] + '/';  // Los links siempren terminan con "/"
			// Si un link contiene el caracter "_", se reemplaza por un espacio
			output += '<li><a href="' + path + '">' + (URLArray[i].replace(/_/g,' ')) + '</a></li>';
		}

		// El último link no debería estar en una etiqueta <a>
		output += '<li><a href="#">' + (URLArray[URLArray.length-1].replace(/_/g,' ')) + '</a></li>';
	}

	document.getElementById("breadcrumbs").innerHTML = output;  // Se muestran los enlaces
}