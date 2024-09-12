"use client";
import { IconPlus, IconUser } from "@tabler/icons-react";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuarios from "@/app/components/usuario/ListaUsuarios";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import useUsuarios from "@/app/data/hooks/useUsuarios";

export default function Page() {
  const { usuario, usuarios, salvar, excluir, alterarUsuario } = useUsuarios();

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo
        titulo="Usuários"
        subtitulo="Cadastro de Usuários"
        icone={IconUser}
      ></Titulo>

      {usuario ? (
        <FormularioUsuario
          usuario={usuario}
          onChange={alterarUsuario}
          salvar={salvar}
          cancelar={() => alterarUsuario(null)}
          excluir={excluir}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className=" flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => alterarUsuario({})}
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <ListaUsuarios usuarios={usuarios} onClick={alterarUsuario} />
        </>
      )}
    </Pagina>
  );
}
