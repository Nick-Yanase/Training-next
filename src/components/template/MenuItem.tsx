import Link from "next/link"

interface MenuItemProps{
  icone?: any
  texto: string
  href: string
}
export default function MenuItem(props: MenuItemProps){
  return(
    <div className="flex pl-2 gap-2 items-center hover:border-l-4
     border-l-green-800 transition-all justify-start">
        <props.icone size={22} stroke={1.5}></props.icone>
        <Link href={props.href}>{props.texto}</Link>
    </div>
  )
}