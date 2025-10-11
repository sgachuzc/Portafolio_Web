import { useEffect, useState } from "react";

export const Footer = () => {
  const [year, setYear] = useState<number>();
  
  useEffect(() => {
    const actualYear:number = new Date().getFullYear()
    setYear(actualYear)
  }, [year]);
  
  return (
    <footer className="w-full h-16 flex justify-center items-center bg-black text-white">
      <div>
        <p>
          Copyright <span>Ⓒ</span> {year}
        </p>
      </div>
    </footer>
  )
}