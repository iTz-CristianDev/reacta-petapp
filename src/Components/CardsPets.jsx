import React from 'react';

function CardsPets({ mascotas, genero }) {
    // Filtrar mascotas según el género deseado
    const mascotasFiltradas = genero ? mascotas.filter(mascota => mascota.gender === genero) : mascotas;

    return (
        <div>
            {mascotasFiltradas.map((mascota, index) => (
                <div key={index} className="animated-c card mb-3 shadow-lg border border-light-subtle">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={mascota.src} className="img-fluid rounded-start" alt={mascota.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><strong>{mascota.name}</strong></h5>
                                <p className="card-text">Edad: {mascota.age}</p>
                                <p className="card-text">{mascota.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsPets;
