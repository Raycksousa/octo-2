import React from "react";
import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import api from '../config';
import img from './imagens/img.jpeg';


export default function Login() {

  const [emailCpf, setEmailCpf] = useState("");
  const [password, setPassword] = useState("");


  const navegar = useNavigate();

  function register() {
    navegar("/pg-register")
  }


  const logoff = async e => {
    e.preventDefault();
    console.log(emailCpf, password);

    const headers = {
      'headers': {
        'Content-Type': 'aplication/JSON'
      }
    }
    await api.post("/", headers)
      .then((response) => {
        console.log(response);
      }).catch((err) => {
        if (err.response) {
          console.log(err.response)
        } else {
          console.log("erro Tente mais Tarde!")
        }
      })
  }



  return (
   
    <div class="flex justify-center" >
   
    <div class="w-full max-w-xs cardlogin ">
      
      
      <form onSubmit={logoff} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div>
        <h1>Octo Login</h1>
        <img class="imagens"src={img}/>
      </div>
      <br></br>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Insira Email ou Senha
          </label>
          <input
            className={emailCpf !== "" ? "has-val input" : "input"}
            type="text"
            value={emailCpf}
            onChange={(e) => setEmailCpf(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Email ou Cpf" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Senha
          </label>
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="shadow appearance-none border border-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************" />
        </div>
        <div class="flex items-center justify-between">
          <button
            onClick={logoff}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
         focus:shadow-outline" type="submit">
            Login
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
                   focus:shadow-outline"
            onClick={register}
            type="button">
            Cadastrar
          </button>
        </div>
        <br></br>
        <div class="flex items-center justify-between">
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Esqueceu sua Senha?
          </a>
        </div>
      </form>
      <p class="text-center text-black-500 text-xs">
        &copy;2022 Octo. Todos os Direitos Reservados.
      </p>
    </div>
    </div>

  )
}
