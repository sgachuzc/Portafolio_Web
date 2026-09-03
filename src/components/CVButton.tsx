import { Download } from "lucide-react"
import { Button } from "./ui/button"

export const CVButton = () => {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <Button 
        className="group bg-[#F97316] text-white font-bold px-10 py-7 text-xl clip-cut-corners rounded-xl hover:bg-white hover:border-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 hover:scale-105 hover:cursor-pointer border shadow-none"
        asChild
      >
        <a href="./assets/Curriculum.pdf" target='_blank'>
          Descargar CV
          <Download className="ml-2 h-6 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Button>
    </div>
  )
}
