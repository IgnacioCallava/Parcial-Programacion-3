#  Primer Parcial Programación 3 - Catálogo de Indumentaria


## Este proyecto corresponde al primer parcial de la materia Programación 3.  
El objetivo es desarrollar un catálogo de indumentaria con un **index principal** que muestra productos destacados y un sistema de **búsqueda y filtrado por categoría** implementado con **JavaScript**.  
El catálogo está diseñado con **Flexbox** para lograr una disposición flexible y estética de las tarjetas de producto.


##  Integrantes:
- Ramiro Stallone
- Ignacio Ramirez Labadie
- Juan Foricher Castellón
- Ignacio Callava
- Emmanuel Franco  


## Desarrollo:
El proyecto se desarrolló en equipo utilizando:
- **HTML semántico**, para la estructura.
- **CSS modular con Flexbox**, para el diseño.
- **JavaScript**, para la implementación del buscador y filtrado de productos
- **Git y un repositorio de GitHub**, para el control de versiones y colaboración.
- Se respeto la **regla de los 4 px** en toda la implementación del CSS del proyecto.


Dentro del proyecto:
- Cada integrante del grupo trabajó en su **rama personal**.
- Se realizaron **merges** y **Pull Requests** hacia la rama "dev" para integrar los cambios realizados


## Funcionalidades:
- **Página principal**, con sección de productos destacados.
- **Catálogo dinámico**, de tarjetas con los productos.
- **Buscador**, que permite filtrar productos por nombre.
- **Filtro de categorías**, tales "deportivo" u "urbano".
- **Filtro de marcas**, como Nike, Puma, Adidas o todas.
- Combinación de criterios de búsqueda + categoría + marcas.
- **Contador dinámico**, indica cuántos productos coinciden con la búsqueda actual.


## Explicación de función filtrar() en JavaScript:


La función **filtrar()** es la **función principal** del proyecto, permite la **búsqueda** y el **filtrado** de productos en el catálogo. Muestra únicamente aquellos productos que cumplen con los criterios seleccionados por el usuario (texto ingresado, categorías y marca), y actualiza el contador de productos encontrados.


```
function filtrar() {
    const texto = buscador.value.toLowerCase().trim();
```
- Convierte todo el texto ingresado en el buscador a minúsculas y se eliminan los espacios, para asegurar que coincidan con los elementos del catálogo.
- Se obtiene el valor escrito en el buscador.  
```
    let categoriasSeleccionadas = [];
    checkCategorias.forEach(check => {
        if (check.checked) {
            categoriasSeleccionadas.push(check.value);
        }
    });
```
- Recorre todos los ítems de categorías (Deportivo/Urbano).
- En un array, se guardan las categorías que el usuario seleccionó.
```
    let marcaSeleccionada = "todas";
    radiosMarca.forEach(radio => {
       
        if (radio.checked) {
            marcaSeleccionada = radio.value;
        }
    });
```
- Recorre los botones de opciones de las marcas (Nike, Adidas, Puma o Todas).
- Si el usuario selecciona una marca, se guarda ese valor, si no, se mantiene "todas" como opción por default.
```
    let cantidad = 0;
```
- Se inicializa la variable "cantidad", que sirve para contar cuántos productos cumplen con los filtros de búsqueda.
```    
    productos.forEach(producto => {
        const contenido = producto.textContent.toLowerCase();
        const coincideTexto = contenido.includes(texto);
```
- Convierte el contenido de cada card de producto a minúsculas .
- Verifica si el texto ingresado coincide con el contenido.
```
        let coincideCategoria = false;


        if (categoriasSeleccionadas.length === 0) {
            coincideCategoria = true;
        } else {
            categoriasSeleccionadas.forEach(cat => {
                if (contenido.includes(cat)) {
                    coincideCategoria = true;
                }
            });
        }
```
- Si no hay ninguna categoría seleccionada, se considera que el producto coincide (True).
- Si hay categorías seleccionadas, se verifica que el producto pertenezca a alguna de ellas.
```
        const coincideMarca = marcaSeleccionada === "todas" || contenido.includes(marcaSeleccionada);
```
- Si está seleccionada la opción "todas", cualquier producto pasa la validación (True).
- Si se eligió alguna marca, se comprueba que el producto la contenga
```
        if (coincideTexto && coincideMarca && coincideCategoria) {
            producto.style.display = "";
            cantidad++;
        } else {
            producto.style.display = "none";
        }
    });
```
- Si el producto cumple con todas las condiciones, se mantiene visible y se incrementa el contador de la variable "cantidad".
- Si el producto no cumple con las condiciones de filtrado, se oculta.
```
    contador.textContent = "Productos encontrados: " + cantidad;
}
```
- Muestra en la pantalla la cantidad de productos que satisfacen los filtros realizados por el usuario.




## Guía de instalación
Este proyecto no requiere de instalación de dependencias.
Para visualizarlo:
1. Clonar el repositorio:
   ```bash
    git clone https://github.com/IgnacioCallava/Parcial-Programacion-3.git
    ```
2. Abrir el archivo "index.html" en su navegador de confianza
