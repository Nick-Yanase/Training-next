import Link from "next/link";

export default function PaginaFilhaComLayout(){
  return(
    <div className="flex flex-col justify-center
      items-center">
      <h1>Conteúdo da Página filha</h1>
      <div className="flex gap-5 ">
        <Link className="botao" href="/layoutPage">Voltar</Link>
        <Link className="botao" href="/">Inicio</Link>
      </div>
    </div>
  )
}