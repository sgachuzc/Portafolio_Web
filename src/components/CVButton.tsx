import { Download } from "lucide-react"
import { Button } from "./ui/button"

export const CVButton = () => {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <Button variant="link" className="group bg-black text-white shadow-sm transition-shadow hover:shadow hover:no-underline hover:cursor-pointer" asChild>
        <a href="./assets/Curriculum.pdf" target='_blank'>
          Descargar CV{" "}
          <Download className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Button>
    </div>
  )
}
