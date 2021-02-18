import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Home } from "./style"
import Logo from "../../img/gama-academy-logo.png";

import api from '../../services/api'

const HomePage: React.FC = () => {

  const history = useHistory()

  const [ cpf, setCpf ] = useState('')
  const [ name, setName ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPass, setConfirmPass ] = useState('')

  function createAccount( event: FormEvent<HTMLFormElement> ){
    event.preventDefault()

    const postData = {
      cpf,
      nome: name,
      login: userName,
      senha: password
    }
    if ( password !== confirmPass ) {
      alert('Confirm pass') 
      return;
    }


    try {
      api.post(`usuarios`, postData ).then(
        response => { 
          if (response.status === 200){
            history.push('/login')
          } else {
            alert('Algo de errado, tente novamente em alguns minutos.')
          }
         }
      )
    } catch (e) {
      alert('algo deu errado')
    }
    


  }

  return (
    <Home>
      <Link to="/">
        <img src={Logo} alt=""/>
      </Link>
      <div className="account">
        <div >
          <h2>Gama Bank é um projeto de nossos alunos.</h2>
          <h2>Já tem conta?</h2>
          <Link to="/login">
            <button>Acessar</button>
          </Link>
        </div>
        <div className="open-account">
          <div>
            <h4>
              Peça sua conta e cartão de crédito Gama Bank
            </h4>
          </div>
          <form onSubmit={createAccount}>
            <input type="text"  value={ cpf } onChange={  e => setCpf( e.target.value)  } placeholder="Digite seu CPF"/>
            <input type="text" value={ name } onChange={  e => setName(e.target.value)  } placeholder="Nome completo"/>
            <input type="text" value={ userName } onChange={  e =>  setUserName(e.target.value) } placeholder="Nome do usuário"/>
            <input type="password" value={ password } onChange={  e => setPassword(e.target.value) } placeholder="Digite sua senha"/>
            <input type="password" value={ confirmPass } onChange={  e => setConfirmPass(e.target.value) } placeholder="Confirme sua senha"/>
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </Home>
    );
}

export default HomePage;