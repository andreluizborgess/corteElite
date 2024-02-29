import React from 'react';
import { Text, View } from 'react-native';
import LoginClienteScreen from './src/login/loginClienteScreen';
import LoginServicos from './src/login/LoginServicos';
import LoginProfissionais from './src/login/LoginProfissionais';
import CadastroProfissionais from './src/cadastro/CadastroProfissionais';
import CadastroClientes from './src/cadastro/CadastroClientes';
import CadastroServicos from './src/cadastro/CadastroServico';



function App():JSX.Element{
return(
  <CadastroServicos/>
);
}
export default App;