import salvarUsuario from "./usuario/salvarUsuario";
import obterTodos from "./usuario/obterTodos";
import excluirUsuario from "./usuario/excluirUsuario";

//Padrao Facada - atraves de um ponto unico acesamos vários comportamentos
//do backend
export default class Backend {
  static readonly usuarios = {
    salvar: salvarUsuario,
    listar: obterTodos,
    excluir: excluirUsuario,
  };
}
