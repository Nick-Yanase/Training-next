import Link from "next/link";

export default function PaginaComLayout(){
  return(
    <div className="flex justify-center items-center  text-2xl flex-col gap-5">
      <h1>Conteúdo da Página RAIZ</h1>
      <Link className="botao" href="/layoutPage/filhaPage">Ir para a filha</Link>
    </div>
  )
}