"use client";
import React, { useEffect, useState } from 'react'

function Card() {
    const [card , setCard] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/seed")
        .then((res) => res.json())
        .then((data) => setCard(data));
    }, []);
   

    if(!card) return <p className='text-center mt-10'>Loading...</p>;
    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-gray-900 text-white'>
                <div className='border-2 border-pink-500 p-6 rounded-lg w-80 text-center relative'>
                    {/* badge */}
                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-xs px-3 py-1 rounded-full'>
                        MOST POPULAR
                    </div>

                    {/* Price */}
                    <h2 className='text-4xl font-bold'>
                        {card.price}
                        <span className='text-lg'>{card.period}</span>
                    </h2>
                    <p className='text-sm text-gray-400 mb-4'>Billed Annually (Save 20%)</p>

                    {/* Feature */}
                   <ul className='text-left mb-4'>
                   {card.features && card.features.length > 0 ? (
                    card.features.map((f , i) => (
                        <li key={i}>{f}</li>
                    ))
                   ) : (
                    <li>No Features</li>
                   )
                   }
                   </ul>

                    {/* coming soon */}
                    <p className='text-gray-400 text-sm mb-2'>COMING SOON</p>
                    <p className='mb-4'>{card.comingSoon}</p>

                    {/* Button */}
                    <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full'>{card.buttonText}</button>

                    {/* Note */}
                    <p className='text-xs text-gray-400 mt-2'>{card.note}</p>
                </div>

            </div>
        </>
    )
}

export default Card
