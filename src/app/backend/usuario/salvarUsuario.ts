"use server";

import { Usuario } from "../../core/model/Usuario";
import IdGenerator from "../../core/utils/id";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function salvarUsuario(usuario: Partial<Usuario>) {
  const novoUsuario = {
    ...usuario,
    id: usuario.id ?? IdGenerator.novo,
  };

  return RepositorioUsuario.salvarUsuario(novoUsuario as Usuario);
}
