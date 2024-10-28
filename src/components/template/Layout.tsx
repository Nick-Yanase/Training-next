import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout(props: any){
  return(
    <div className="flex flex-col h-screen">
      <Header/>
        
      <div className="bg-zinc-900 flex flex-1 gap-10 w-full">
        <Menu/>
        <main className="text-white w-full flex items-center justify-start flex-col mt-10">
          {props.children}
        </main>
      </div>

      <Footer/>
    </div>
  )
}