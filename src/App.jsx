import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Machos from './Pages/Machos';
import Hembras from './Pages/Hembras';
import Add from './Pages/Add';



function App() {
  const Mascotas = JSON.parse(localStorage.getItem("mascotas"));
  const storedMascotas = Mascotas || [

  //const storedMascotas = [
    {
      src: 'img/pet1m.jpg',
      name: 'Simon',
      gender: 'Macho',
      age: '3 años',
      description: 'Siempre está explorando cada rincón de la casa y encontrando nuevos lugares para esconderse. Le encanta perseguir juguetes y saltar por el aire para atraparlos'
    },
    {
      src: 'img/pet2m.jpg',
      name: 'Buddy',
      gender: 'Macho',
      age: '4 años',
      description: 'Siempre está cerca de su dueño y disfruta de pasar tiempo junto a él. Es muy obediente y fácil de entrenar, lo que lo convierte en un compañero ideal para actividades al aire libre'
    },
    {
      src: 'img/pet3h.jpg',
      name: 'Canela',
      gender: 'Hembra',
      age: '3 años',
      description: 'Siempre está feliz de conocer a nuevos amigos, tanto humanos como caninos. Le encanta jugar y correr libremente en espacios abiertos, y es una gran compañera para actividades al aire libre'
    },
    {
      src: 'img/pet4h.jpg',
      name: 'Luna',
      gender: 'Hembra',
      age: '2 años',
      description: 'Tiene una mirada penetrante y una personalidad reservada, pero es extremadamente leal a su familia. Disfruta pasar largas horas mirando por la ventana y observando el mundo exterior'
    },
    {
      src: 'img/pet5m.jpg',
      name: 'Mochi y Oliver',
      gender: 'Macho',
      age: '1 año',
      description: 'Un gatito atrigado y travieso y un cachorro dorado y juguetón de ojos brillantes que comparte un vínculo inseparable con su amigo felino'
    },
    {
      src: 'img/pet6m.jpg',
      name: 'Zeus',
      gender: 'Macho',
      age: '3 años',
      description: 'Siempre está explorando su entorno y buscando nuevas aventuras. A pesar de su naturaleza activa, también disfruta de largas siestas al sol y de recibir caricias de su familia'
    },
    {
      src: 'img/pet7m.jpg',
      name: 'Max',
      gender: 'Macho',
      age: '3 meses',
      description: 'Jugueton, lleno de energía y curiosidad. Sus ojos brillantes y su pelaje suave lo hacen irresistible. Está aprendiendo rápidamente y disfruta de cada nueva experiencia con entusiasmo inocente'
    },
    {
      src: 'img/pet8m.jpg',
      name: 'Leo',
      gender: 'Macho',
      age: '1 año',
      description: 'Es independiente y le gusta tener su propio espacio, pero también disfruta de la compañía de su familia humana'
    }, {
      src: 'img/pet9h.jpg',
      name: 'Nala',
      gender: 'Hembra',
      age: '2 años',
      description: 'Es muy sensible a las emociones de su familia y siempre está lista para brindar consuelo cuando alguien está triste. A pesar de su naturaleza suave, también puede mostrar valentía cuando se trata de proteger a sus seres queridos'
    },
    {
      src: 'img/pet10h.jpg',
      name: 'Mia',
      gender: 'Hembra',
      age: '1 año',
      description: 'Siempre está planeando sus próximos movimientos y encontrando nuevas formas de entretenerse. Es independiente pero cariñosa, y disfruta de la atención de su familia cuando lo desea.'
    },

  ];

  useEffect(() => {
    // Save storedMascotas array to localStorage
    localStorage.setItem("mascotas", JSON.stringify(storedMascotas));
  }, [storedMascotas]); // Save whenever storedMascotas changes

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home mascotas={storedMascotas} />} />
        <Route path="/machos" element={<Machos mascotas={storedMascotas} genero={"Macho"}/>} />
        <Route path="/hembras" element={<Hembras mascotas={storedMascotas} genero={"Hembra"}/>} />
        <Route path="/agregar" element={<Add />} />
      </Routes>
    </Router>


  );
}

export default App;


