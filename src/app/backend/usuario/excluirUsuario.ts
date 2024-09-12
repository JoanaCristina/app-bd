"use server";

import RepositorioUsuario from "./RepositorioUsuario";

export default async function excluirUsuario(id: number) {
  return RepositorioUsuario.excluirUsuario(id);
}
