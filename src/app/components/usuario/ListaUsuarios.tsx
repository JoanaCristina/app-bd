import { Usuario } from "@/app/core/model/Usuario";
import LinhaUsuario from "./LinhaUsuario";

export interface ListaUsuariosProps {
  usuarios: Usuario[];
  onClick?: (usuario: Usuario) => void;
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.usuarios.map((usuario: Usuario) => {
        return (
          <LinhaUsuario
            key={usuario.id}
            user={usuario}
            onClick={props.onClick}
          />
        );
      })}
      ;
    </div>
  );
}
