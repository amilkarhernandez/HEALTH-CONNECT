import React, { useState } from 'react'
import Logo from '../assets/img/logo.png'
import axios from 'axios'
import constants from '../utils/Constants'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        await axios.post(constants.URL + "/usuarios/login", data)
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-[url('/login.png')] bg-cover" >
            <div className='w-1/2 h-96 flex justify-center items-center'>
                <img src={Logo} alt="Logo" className="w-1/2 animate-pulse" />
            </div>
            <div className='w-1/2 h-96 flex flex-col justify-between items-center'>
                <h3 className="text-4xl text-white">Inicio de Sesion</h3>

                <div>
                    <h2 className="text-lg text-white">Email</h2>
                    <input type="text" className="rounded-full bg-red-400 text-white p-5 max-h-12 w-1000" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <h2 className="text-lg text-white">Contraseña</h2>
                    <input type="password" className="max-h-12  max-w-full-10 rounded-full bg-red-400 text-white p-5" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="rounded-full bg-red-500 text-white p-5" onClick={loginService}>Enviar</button>
            </div>
        </div>
    );
}
