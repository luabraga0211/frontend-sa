import './Iniciologado.css';
import logo from './logo.png'
import { Link } from 'react-router-dom'; 


const Iniciologado = () => {
    return (
        <div>
         <div className="navbar">
            <button>
             Fazer Novo Cadastro
            </button>
            <button>
            Ver Cadastros
            </button>
            <button>
            Controle de Entrada e Saída
            </button>
          </div>
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
                <div class="icons">
                <i class="fas fa-user-circle">
                </i>
                <i class="fas fa-sign-out-alt">
                </i>
            </div>
        </div>
    );
};

export default Iniciologado