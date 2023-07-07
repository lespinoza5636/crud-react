import React from 'react'
import { useDb } from '../context/dbContex'

function FormAnime() {
  const { saveAnimeFunction } = useDb();
    const handleForm = async (e) => {
        e.preventDefault();

        const Form = new FormData(e.target);
        const datos = Object.fromEntries(Form);
        
        
        await saveAnimeFunction(datos);

    }
  return (
    <div>
        <form onSubmit={handleForm}>
          <div className='p-4 shadow-md m-8'>

            <div className='grid grid-cols-2 gap-4'>
          
              <div>
                  <label className='block mb-2 text-sm text-gray-600'>
                    Nombre
                  </label>
                  <input 
                  type="text"
                  name='name'
                  id='name'
                  autoComplete='name'
                  required
                  placeholder='Ingresa el nombre'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600'>
                    Descripción
                  </label>
                  <input 
                  type="text"
                  name='description'
                  id='description'
                  autoComplete='description'
                  required
                  placeholder='Ingresa la descripción'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                </div>

                <div className='col-span-2'>
                  <label className='block mb-2 text-sm text-gray-600'>
                    Imagen
                  </label>
                  <input 
                  type="text"
                  name='image'
                  id='image'
                  autoComplete='image'
                  required
                  placeholder='Ingresa la URL'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                </div>
                </div>
            <button type='submit' className='w-full mt-5 px-4 py-2 traking-white text-white transition-colors duration-200 transform bg-[#664494] rounded-md hover:bg-[#9871B0]' >Agregar</button>
            </div>

        </form>

    </div>
  )
}

export default FormAnime