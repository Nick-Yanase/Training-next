// envolve todas as paginas e subpaginas dentro da pasta layoutPage. 
//Mas o template carrega toda vez que altera a pagina, e fica sempre dentro de layout (se tiver)
'use client'

import { useState } from "react"; //só fica do lado do borwser, por issso temos que usar 'use client'

export default function Template(props: any){
  const [data] = useState(new Date())
  return(
      <div className="relative w-full border-8 border-green-600 p-8"> 
        <span className="absolute right-0 top-0">template pai</span>
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
  )
}