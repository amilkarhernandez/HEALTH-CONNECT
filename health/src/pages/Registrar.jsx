import React from 'react'
import Logo from '../assets/img/logo.png'

export const Registrar = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-[url('/login.png')] bg-cover" >
            <div className='w-1/2 h-96 flex justify-center items-center'>
                <img src={Logo} alt="Logo" className="w-1/2 animate-pulse" />
            </div>
            <div className='w-1/2 h-96 flex flex-col justify-between items-center'>
                <h3 className="text-4xl text-white">Registrar</h3>

                <div>
                    <h2 className="text-lg text-white">Email</h2>
                    <input type="text" className="rounded-full bg-red-400 text-white p-5 max-h-12 w-1000" />
                </div>

                <div>
                    <h2 className="text-lg text-white">Contraseña</h2>
                    <input type="password" className="max-h-12  max-w-full-10 rounded-full bg-red-400 text-white p-5" />
                </div>
                <button className="rounded-full bg-red-500 text-white p-5">Enviar</button>
            </div>
        </div>
    )
}
