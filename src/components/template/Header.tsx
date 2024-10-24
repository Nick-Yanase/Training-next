import { IconBrandReact } from "@tabler/icons-react"

export default function Header(props: any){
  return(
   <header className="px-6 py-3 w-full bg-zinc-800  border-zinc-700 border-b">
    <nav className="flex items-center justify-between">
      <div className="flex gap-2">
        <IconBrandReact size={28} className="text-green-600"/>
        <p className="text-lg font-semibold text-white">Business</p>
      </div>
      <div className="bg-white rounded-full size-12 flex items-center justify-center">
        <span className="text-green-600">NY</span>
      </div>
    </nav>
   </header>
  )
}