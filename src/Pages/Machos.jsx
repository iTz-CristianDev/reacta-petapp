
import React from 'react';
import { useState } from 'react'
import CardPets from '../Components/CardsPets';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';


function Machos({mascotas, genero}) {
    const textGender = genero === 'Hembra' ? 'Hembra' : 'Macho'; 
    const title = `${textGender}s`
    return (
        <>

            <Navbar />
            <div className='container mt-4'>
                <h1 className='text-center'>{title}</h1>
                <CardPets mascotas={mascotas} genero={genero}/>
            </div>           
            <Footer />

        </>



    );
}
export default Machos;
