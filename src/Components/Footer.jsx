import { useState } from "react";

export function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer class="bg-dark text-white pt-4 pb-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <h5>Enlaces</h5>
                        <ul class="list-unstyled">
                            <li><a href="/" >Inicio</a></li>
                            <li><a href="/machos" >Machos</a></li>
                            <li><a href="/hembras" >Hembras</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Contacto</h5>
                        <address>
                            <strong>Correo:</strong> info@mascotasapp.com<br />
                            <strong>Teléfono:</strong> +123456789<br />
                            <strong>Dirección:</strong> Ciudad, País
                        </address>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Redes Sociales</h5>
                        <ul class="list-unstyled">
                            <li><i class="fab fa-facebook"></i> <a href="#" >Facebook</a></li>
                            <li><i class="fab fa-twitter"></i> <a href="#" >Twitter</a></li>
                            <li><i class="fab fa-instagram"></i> <a href="#" >Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <p>&copy; 2024 MascotasApp. Todos los derechos reservados.</p>
            </div>
        </footer>
        

    );

}