// envolve todas as paginas, subpaginas e o arquivo de template (se tiver) dentro da pasta layoutPag. layout>template
'use client'
import Layout from "@/components/template/Layout";
import { useState } from "react"; //só fica do lado do borwser, por issso temos que usar 'use client'

export default function layout(props: any){
  const [data] = useState(new Date())
  return(
    <Layout>
      <div className="relative relateive w-full border-8 border-red-500 p-8"> 
        <span className="absolute right-0 top-0">layout pai</span>
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
    </Layout>
  )
}