import './Inicio.css';
import logo from './logo.png'
import { Link } from 'react-router-dom'; 

function Gotologin() {
    window.location.href = '/Login'
} 

function Gotoabout() {
    window.location.href = '/Aboutus'
}

const Inicio = () => {
    return (
        <div>
            <div className="topo">
                <button className="botao-funcao" onClick={Gotologin}>Login</button>
                <div className="conteudo">
                    <div className="text">
                        <p>Bem-vindo ao nosso site! Somos uma empresa especializada em controle de entrada e saída para empresas de tecnologia. Nosso objetivo é fornecer soluções eficientes e seguras para gerenciar o acesso de funcionários, visitantes e prestadores de serviços em sua empresa.</p>
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo da AccessTrack Solutions" />
                        </Link>
                        <p>AccessTrack Solutions</p>
                    </div>
                </div>
                <button className="botao-funcao2" onClick={Gotoabout}>Sobre Nós</button>
                <p className="footer-text">Caso queira contratar nossos serviços entre em contato</p>
            </div>
        </div>
    );
};

export default Inicio