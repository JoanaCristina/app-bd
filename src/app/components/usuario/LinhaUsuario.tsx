import { Usuario } from "@/app/core/model/Usuario";

export interface LinhaUsuarioProps {
  user: Usuario;
  onClick?: (usuario: Usuario) => void;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div
      className="flex bg-zinc-900 p-4 items-center rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.user)}
    >
      <div className="flex flex-col">
        <span className="text-xl font-black text-zinc-200">
          {props.user.nome}
        </span>
        <span className="text-sm text-zinc-400">{props.user.email}</span>
      </div>
    </div>
  );
}
