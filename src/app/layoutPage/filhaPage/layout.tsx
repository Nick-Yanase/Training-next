// envolve todas as paginas e subpaginas dentro da pasta layoutPage
'use client'
import { useState } from "react"; //só fica do lado do borwser, por issso temos que usar 'use client'

export default function layoutFilha(props: any){
  const [data] = useState(new Date())
  return(
      <div className="relative w-full border-8 border-purple-500 p-8"> 
        <span className="absolute right-0 top-0">layout Filha</span>
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
  )
}