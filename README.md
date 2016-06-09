# Breadcrumbs.js
Mejora la navegación de tu página con "Migas de pan"

### Instalación

Descarga el script y agregalo al head de tus páginas

```sh
<script src="/js/Breadcrumbs.js"></script>
```

Por último agrega estas líneas en la sección donde necesites que aparezcan las Breadcrumbs

```sh
<nav>
	<ul id="breadcrumbs"></ul>
</nav>
```
### Personalización
Puedes personalizar los archivos que no se mostrarán en las migas de pan, para ello modifica la siguiente variable
```sh
var defaultPages=[
	"index",
	"default",
	"otraPagina"
];
```
Los nombres de los archivos no deben tener extensión

###Licencia
----

MIT
