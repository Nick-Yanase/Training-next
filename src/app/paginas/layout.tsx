//Como esse arquivos esta dentro da pasta (paginas) quandop tem o párenteses ela não interfere no caminho das rotas, é como se ela não existisse, service apenas para nossa compreensão.

import Layout from "@/components/template/Layout";

export default function LayoutProdutos(props: any){
  return(
    <Layout>
      {props.children}
    </Layout>
  )
}