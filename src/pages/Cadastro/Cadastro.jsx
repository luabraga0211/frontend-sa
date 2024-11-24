import React, { useState } from 'react';
import './Cadastro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt, faUserPlus, faList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Cadastro = () => {
    const [novoFuncionario, setNovoFuncionario] = useState({
        name: '',
        senha: '',
    });
    const [isAddingFuncionario, setIsAddingFuncionario] = useState(false);

    function adicionarFuncionario() {
        setIsAddingFuncionario(true);
    }

    const salvarFuncionario = async () => {
        try {
          await fetch('http://localhost:3000/Funcionarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoFuncionario),
          });
          setIsAddingFuncionario(false);
          setNovoFuncionario({ name: '', senha: '' });
        } catch (error) {
          console.error('Erro ao salvar um novo funcionario:', error);
        }
      };

    return (
    <div>
        <div className='navbar'>
             <button onClick={() => { /* Add your navigation logic here */ }}>
             Ver Cadastros
            <FontAwesomeIcon icon={faList} />
            </button>
            <button onClick={() => { /* Add your navigation logic here */ }}>
            Controle de Entrada e Saída
            <FontAwesomeIcon icon={faSignInAlt} />
            </button>     
        </div>
        <div className="icons">
                <FontAwesomeIcon icon={faUserCircle} className="icon" />
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            </div>
        <div className="container">
            <div className='formulario'>
                <img alt="User-icon" height="180" src="https://storage.googleapis.com/a1aa/image/fOYOouqdysSdSixgJPyqtwLky7fTbYB3g7H1ljRr6Nab4V0TA.jpg" width="100"/>
                <div>
                    <label htmlFor="funcionario">
                        Nome:
                    </label>
                    <input
                      placeholder="Insira seu nome"
                      value={novoFuncionario.name}
                      onChange={(e) => setNovoFuncionario({ ...novoFuncionario, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="senha">
                        Senha:
                    </label>
                    <input
                      type="password"
                      placeholder="Insira sua senha"
                      value={novoFuncionario.senha}
                      onChange={(e) => setNovoFuncionario({ ...novoFuncionario, senha: e.target.value })}
                    />
                </div>
                <button onClick={salvarFuncionario}>Salvar</button>
            </div>
        </div>
    </div>
    )
}

export default Cadastro;