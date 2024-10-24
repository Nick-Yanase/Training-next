import Link from "next/link";
import MenuItem from "./MenuItem";
import { IconArrowLeftRight, IconBrandProducthunt, IconConePlus, IconError404, IconForms, IconH1, IconHome2, IconLayout, IconNumber1, IconServer2, IconShoppingBag, IconUserBolt, IconUserHexagon } from "@tabler/icons-react";

export default function Menu(props: any){
  return(
   <aside className="p-4 w-72 bg-zinc-800">
    <nav className="flex flex-col gap-5 text-white">
      <MenuItem icone={IconHome2} href="/" texto="Inicio"/>
      <MenuItem icone={IconLayout} href="/pages/primeiro" texto="Layout"/>
      <MenuItem icone={IconError404} href="aaaa" texto="Não existe"/>
      <MenuItem icone={IconShoppingBag} href="/pages/formulario" texto="Produtos"/>
      <MenuItem icone={IconServer2} href="/pages/formulario" texto="Cliente vs Servidor"/>
      <MenuItem icone={IconUserHexagon} href="/pages/formulario" texto="Administração"/>
    </nav>
   </aside>
  )
}