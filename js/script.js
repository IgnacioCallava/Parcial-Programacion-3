const buscador = document.getElementById("input-busqueda"); // Guardar el input.
const productos = document.querySelectorAll(".card"); // Se guardan las card.
const radiosMarca = document.querySelectorAll('input[name="marca"]'); // Selecciona los radio para filtrar las marcas.
const checkCategorias = document.querySelectorAll('.filtro-grupo input[type="checkbox"]');

function filtrar() {
    const texto = buscador.value.toLowerCase().trim(); // Pasamos lo ingresado en el input a minúscula y sin espacios.

    let categoriasSeleccionadas = [];
    checkCategorias.forEach(check => {
        if (check.checked) {
            categoriasSeleccionadas.push(check.value);
        }
    });
    
    let marcaSeleccionada = "todas"; // "todas" está marcada por default
    radiosMarca.forEach(radio => {
        // recorremos los radio
        if (radio.checked) {
            // si la marca está seleccionada, entonces queda ese valor en la variable "marcaSeleccionada".
            marcaSeleccionada = radio.value;
        }
    });

    productos.forEach(producto => {
        // pasamos el texto de las card a minuscula.
        const contenido = producto.textContent.toLowerCase();
        
        // Checkeamos si el producto contiene lo que escribió el usuario.
        const coincideTexto = contenido.includes(texto);

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
        
        // Si está seleccionado "todas" pasa siempre como true
        const coincideMarca = marcaSeleccionada === "todas" || contenido.includes(marcaSeleccionada);

        if (coincideTexto && coincideMarca && coincideCategoria) {
            producto.style.display = ""; // deja el CSS como está
        } else {
            producto.style.display = "none"; // Si no cumple lo oculta
        }
    });
}

buscador.addEventListener("input", filtrar);

checkCategorias.forEach(check => {
check.addEventListener("change", filtrar);
});

radiosMarca.forEach(radio => {
    // cada vez que se cambia, lo vuelve a filtrar
    radio.addEventListener("change", filtrar);
});
