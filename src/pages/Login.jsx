import React, { useEffect, useState } from 'react'
import { useDb } from '../context/dbContex'
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const {loginFunction} = useDb();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const Form = new FormData(e.target);
    const {email, password} = Object.fromEntries(Form);

    try {
      await loginFunction(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Éxito!',
        text: 'Bienvenido'
      })
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'success',
        title: 'error',
        text: `${error}`
      })
    }
  }
  return (
    <div>
      <div className='flex justify-center h-screen'>
        <div className='hidden lg:block lg:w-2/3 bg-1'>
          <div className='flex items-center h-full px-20 bg-[#664494] bg-opacity-70'>
            <div>
              <h2 className='font-bold'>CI Nicaragua</h2>
              <p>Esto es un login</p>
            </div>
          </div>

          
        </div>
        <div className='flex items-center w-full max-w-md px-6 mx-auto lg-w-2/6'>
            <div className='flex-1'>
              <div className='text-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Dragonballstar.png" alt="Esfera del Dragón" />
                <p className='mt-3 text-gray-500'>
                  Accede a tu cuenta
                </p>
              </div>

              <div className='mt-8'>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label className='block mb-2 text-sm text-gray-600'>
                      Correo electrónico
                    </label>
                    <input 
                    type="email"
                    name='email'
                    id='email'
                    autoComplete='email'
                    required
                    placeholder='Ingresa tu email'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                 />
                  </div>
                  <div>
                    <label className='block mb-2 text-sm text-gray-600'>
                     Contraseña
                    </label>
                    <input 
                    type="password"
                    name='password'
                    autoComplete='current-password'
                    id='password'
                    required
                    placeholder='Ingresa tu contraseña'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40' />
                  </div>

                  <div className='mt-6'>
                    <button type='submit' className='w-full px-4 py-2 traking-white text-white transition-colors duration-200 transform bg-[#664494] rounded-md hover:bg-[#9871B0]' >Entrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login