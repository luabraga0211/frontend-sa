import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, senha);
        console.log("Envio");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>ATSoluctions</h1> 
                <div className="input-campo">
                    <input type="name" placeholder="Coloque o seu nome" onChange={(e) => setName(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-campo">
                    <input type="password" placeholder="Coloque sua Senha" onChange={(e) => setSenha(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="">Esqueceu a senha</a>
                </div>

                <Link to="/iniciologado">Entrar</Link>
            </form>
        </div>
    );
}

export default Login;