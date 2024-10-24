import Image from "next/image";
import explorador from "@/assets/explorador.png"
import Link from "next/link";
export default function NotFound(){
  return(
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-zinc-400 font-bold text-2xl">Pagina não encontrada</h1>
      <div className="relative overflow-hidden w-80">
        <Image src={explorador} alt="explorador"/>
      </div>
      <Link href="/" className="bg-green-600 rounded-md py-2 px-6"> Voltar </Link>
    </div>
  )
}