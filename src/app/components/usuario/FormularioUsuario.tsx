import { Usuario } from "@/app/core/model/Usuario";
import InputTexto from "../shared/InputTexto";

export interface FormularioUsuarioProps {
  usuario: Partial<Usuario>;
  onChange: (usuario: Partial<Usuario>) => void;
  salvar: () => void;
  cancelar: () => void;
  excluir: () => void;
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
  return (
    <div className="flex flex-col gap-5 ">
      <InputTexto
        label={"Nome"}
        value={props.usuario.nome}
        type="text"
        onChange={(e) =>
          props.onChange?.({ ...props.usuario, nome: e.target.value })
        }
      />
      <InputTexto
        label={"E-mail"}
        value={props.usuario.email}
        type="email"
        onChange={(e) =>
          props.onChange?.({ ...props.usuario, email: e.target.value })
        }
      />
      <InputTexto
        label={"Senha"}
        value={props.usuario.senha}
        type="password"
        onChange={(e) =>
          props.onChange?.({ ...props.usuario, senha: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={props.salvar}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 rounded-md"
            onClick={props.cancelar}
          >
            Cancelar
          </button>
        </div>

        <button
          className="bg-red-500 px-4 py-2 rounded-md"
          onClick={props.excluir}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
