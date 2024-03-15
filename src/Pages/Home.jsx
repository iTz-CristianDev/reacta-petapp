import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import CardsPets from '../Components/CardsPets';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

function Home({ mascotas }) {
    const [showCardsPets, setShowCardsPets] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowCardsPets(true);
            } else {
                setShowCardsPets(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Carousel mascotas={mascotas} />
            <div className='container mt-4'>
                {showCardsPets && <CardsPets mascotas={mascotas} />}
            </div>
            <Footer />
        </>
    );
}

export default Home;
