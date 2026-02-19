// 1. EL ARRAY DE PRODUCTOS (Puedes agregar más aquí en cualquier orden)
import { productos } from './productos.js';

const categoriasPrincipales = ["Todos", "Escritura y Dibujo", "Papelería y Archivo", "Adhesivos y Corte", "Arte y Manualidades", "Oficina y Accesorios"];

const grid = document.getElementById('catalogo-grid');
const botonesContenedor = document.getElementById('botones-filtro');
const buscador = document.getElementById('buscador');

// 2. FUNCIÓN PARA DIBUJAR LOS PRODUCTOS
function renderizar(lista) {
    grid.innerHTML = "";
    lista.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        // Verificamos si tiene imagen, si no, usamos una de "no disponible"
        const rutaImagen = prod.imagen ? `img/${prod.imagen}` : 'img/default.png';
        card.innerHTML = `
            <p class="marca">${prod.marca}</p>
            <div class="imagen-contenedor">
                <img src="${rutaImagen}" alt="${prod.nombre}">
            </div>
                <div class="producto-info">
                <h3>${prod.nombre} ${prod.marca}</h3>
            </div>
            <div class="precio-tag">S/ ${prod.precio.toFixed(2)}</div>

        `;
        grid.appendChild(card);
    });
}

// 3. GENERAR BOTONES DE FILTRO
function crearFiltros() {
    categoriasPrincipales.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => filtrarPorCategoria(cat, btn);
        botonesContenedor.appendChild(btn);
        if(cat === "Todos") btn.classList.add('activo');
    });
}

function filtrarPorCategoria(cat, boton) {
    // Estilo de botones
    document.querySelectorAll('.categorias button').forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');

    // Filtrado
    if (cat === "Todos") {
        renderizar(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === cat);
        renderizar(filtrados);
    }
}

// 4. LÓGICA DEL BUSCADOR
buscador.oninput = () => {
    const termino = buscador.value.toLowerCase();
    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(termino) || 
        p.marca.toLowerCase().includes(termino)
    );
    renderizar(filtrados);
};

// Carga Inicial
crearFiltros();
renderizar(productos);