import {Link} from "react-router-dom"
const Navbar = () => {
    return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/login.png')"}} >
        <img src="./img/logo.png" alt="" className="size-[45rem] animate-pulse py-6 top-40 absolute"/>
        <nav className="flex flex-wrap items-center justify-center centered-content text-white right-12 top-10 absolute text-xl text-wrap hover:text-nowrap ">
            
           <Link/>
           <a classNamehref="mr-5">Inicio  </a>
           <a classNamehref="mr-5">Registrar Sesion</a>
           <a classNamehref="mr-5">Iniciar Sesion</a>
        </nav>
        <div className="absolute mx-10 my-10 top-40 right-80  text-4xl centered-content text-white grid justify-items-center ">
            <h3 className="text-4xl text-white inline-flex  ">Inicio de Sesion</h3>
            <br /><br />
            <h2 className="text-3xl">Email</h2>
            <br />
            <input type="text" className="rounded-full bg-red-400 text-white p-5 max-h-12 w-1000"/>
            <br /><br />
            <h2 className="text-3xl">Contraseña</h2>
            <br />
            <input type="password" className="max-h-12  max-w-full-10 rounded-full bg-red-400 text-white p-5"/>
            <br />
            <button className="rounded-full bg-red-500 text-white p-5">Enviar</button>
        </div>
    </div>
    )
}
export default Navbar;