import { ElementType } from "react";

export interface TituloProps {
  titulo: string;
  subtitulo: string;
  icone: ElementType;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-2 items-center">
      <props.icone size={55} stroke={1} />
      <div className="flex-col">
        <h1 className="text-2xl font-black">{props.titulo}</h1>
        <h2 className="text-zinc-400">{props.subtitulo}</h2>
      </div>
    </div>
  );
}
