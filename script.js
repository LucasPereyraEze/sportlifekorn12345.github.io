
// Tu número de WhatsApp (formato internacional, sin + ni espacios)
const telefono = "5492224462616";

// Seleccionamos todos los botones "Comprar"
const botones = document.querySelectorAll(".Comprar");

botones.forEach(boton => {
    boton.addEventListener("click", function (e) {
        e.preventDefault();

        // Buscar el contenedor del producto
        const producto = this.closest(".box");
        const nombre = producto.querySelector("h3").textContent;
        const descripcion = producto.querySelector("p").textContent; // toma el primer <p>
        const precio = producto.querySelector(".precio").textContent;

        // Crear el mensaje
        const mensaje = `Hola, quiero comprar: ${nombre} - ${descripcion} - Precio: ${precio}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(url, "_blank");
    });
});

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (let i = currentItem; i < currentItem + 8; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem += 8;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

document.querySelectorAll('.leer-mas').forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const descripcion = this.nextElementSibling;
        if(descripcion.style.display === 'none'){
            descripcion.style.display = 'block';
            this.textContent = 'Leer menos';
        } else {
            descripcion.style.display = 'none';
            this.textContent = 'Leer más';
        }
    });
});


