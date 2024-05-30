document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    
    navbar.innerHTML = `
        <ul class="navbar-menu">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="sobre_nosotros.html">Sobre Nosotros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="#servicios">Servicios</a></li>
        </ul>
    `;
    
    document.body.insertBefore(navbar, document.body.firstChild);
});

