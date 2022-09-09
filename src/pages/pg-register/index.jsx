import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Select, Option } from "@material-tailwind/react";

function Register() {
  const [formValues, setFormValues] = useState({});
  const navegar = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };
  function exit() {
    navegar("/")
  }

  function mostraCampo( el )
{
  var inputOab = document.getElementById('oab');
  if (el.value === 'Oab'){ 
   	  inputOab.style.display = "block";
  }
  else {
      inputOab.style.display = "none";
  }
}
  

  return (

    <div class="flex justify-center  " >
      <br></br>
    <div class="w-full max-w-xs cardcadastro  ">
      
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 fundo" onSubmit={handleSubmit}>
    <h1>Cadastrar Usuario</h1>
      <div class="mb-4">
        <h1>Nome</h1>
        <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
                      focus:shadow-outline"                       
          id="inline-full-name"
          type="text"
          name="nome"
          placeholder="name" onChange={handleInputChange}
          value={formValues.name || ''} />
      </div>
      <div class="mb-4">
        <h1>Sobrenome</h1>
        <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline"                       
          id="inline-full-name"
          type="text"
          name="sobrenome"
          placeholder="sobrenome" onChange={handleInputChange}
          value={formValues.sobrenome || ''} />
      </div>
      <div class="mb-4">
        <h1>Cpf</h1>
        <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline"                       
          id="inline-full-name"
          type="text"
          name="cpf"
          placeholder="cpf" onChange={handleInputChange}
          value={formValues.cpf || ''} />
      </div>
      <h1>Perfil</h1>
      <div className="flex w-full items-end gap-4">
      <select class="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none
     focus:shadow-outline" 
                                
          name="perfil"
          onChange={handleInputChange} value={formValues.perfil || ''}>
          <option value="">Selecionar</option>
          <option value="cliente">Cliente</option>
          <option value="Oab">
            Advogado
            </option>
        </select>
      </div>
      <br></br>
      <div class="mb-4">
   <h1>Oab</h1>
   <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline"                       
     type="text"
     id="oab"
     placeholder="Numero Oab"
     onChange={handleInputChange}
     value={formValues.oab || ''} />
 </div>
      <div class="mb-4">
        <h1>Email</h1>
        <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline"                       
          id="inline-full-name"
          type="text"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
          value={formValues.email || ''} />
      </div>
      <div class="mb-4">
        <h1>Senha</h1>
        <input class="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline"                       
          id="inline-full-name"
          type="text"
          name="senha"
          placeholder="........"
          onChange={handleInputChange}
          value={formValues.senha || ''} />
      </div>
      <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
 focus:shadow-outline"
       type="submit">
        Criar
       </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
                      focus:shadow-outline"            
        onClick={exit}>
        Voltar
      </button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Register;
