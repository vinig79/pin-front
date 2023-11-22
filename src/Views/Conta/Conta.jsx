import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Conta.scss';

export default function Conta() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setUser(res.data))
      .catch(error => {
        console.error("Erro ao obter dados do usuário:", error);
        setUser({ valid: false }); // Define um usuário inválido em caso de erro
      });
  }, []);

  return (
    <>
      <a className='SetaEsquerdaConta' href='/'> <i className="fas fa-arrow-left"></i> </a>
      <div className="Container-Conta">
        {user && user.valid ? (
          <div className="User-info">
            <header className="HeaderConta">
              <h2 className='H2Conta' style={{ fontSize: "60px" }}>Dados da conta</h2>
            </header>
            <p style={{ fontSize: "50px" }}><span className="label">Nome:</span> {user.name}</p>
            <p style={{ fontSize: "50px" }}><span className="label">Email:</span>{user.email}</p>
          </div>
        ) : (
          <h1>Não há usuário logado</h1>
        )}
      </div>
    </>
  );
}
