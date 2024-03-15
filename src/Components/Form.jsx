import React, { useState } from "react";

export function Form() {
    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('Macho');
    const [edad, setEdad] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Crear un objeto de nueva mascota
        const nuevaMascota = {
            src: imagen,
            name: nombre,
            gender: sexo,
            age: `${edad} años`,
            description: descripcion
        };

        // Obtener mascotas del localStorage
        const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

        // Agregar la nueva mascota al arreglo existente
        const mascotasActualizadas = [...mascotas, nuevaMascota];

        // Guardar el arreglo actualizado en el localStorage
        localStorage.setItem("mascotas", JSON.stringify(mascotasActualizadas));

        // Redirigir a la página principal
        if(sexo === 'Macho'){
            window.location.href = '/machos';
        }else{
            window.location.href = '/hembras';
        }
        
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center m-4">Agregar Mascota</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="mb-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre de la Mascota:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sexo">Sexo:</label>
                            <select className="form-control" id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="edad">Edad:</label>
                            <input type="number" className="form-control" id="edad" placeholder="Años" value={edad} onChange={(e) => setEdad(e.target.value)} min="1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagen">URL de la Imagen:</label>
                            <input type="url" className="form-control" id="imagen" placeholder="https://img/photo" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea className="form-control" id="descripcion" placeholder="Ingrese una descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
