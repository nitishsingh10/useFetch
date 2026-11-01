import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {

    const {data,loading,error} = useFetch("https://api.escuelajs.co/api/v1/products")

    return (
        <>
        <div className='w-full h-screen bg-linear-to-br from-blue-100 to-amber-100'>
            <div className='w-full h-full p-5'>
                <h1  className='text-3xl font-bold text-center pb-4 text-gray-700'>
                    UseFetch demonstration
                </h1>
                <div className='grid grid-cols-6 gap-4'>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {
                        data && (
                            data.map((p)=>{
                                return (
                                    <div key={p.id} className='border-2 border-black p-2 hover:shadow-2xl hover:scale-105 transition-all duration-150 h-full bg-amber-50'>
                                        <img src={p.images[0]} alt="image" /> 
                                        <p>{p.title}</p>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
         </div>

        </>
    )
}

export default App
