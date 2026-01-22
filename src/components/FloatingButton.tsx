import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface FloatingButtonProps {
  visible: boolean;
  onScrollTop: () => void;
}

export const FloatingButton = ({ visible, onScrollTop }: FloatingButtonProps) => {
  return(
    <Button 
      className={`fixed right-1/12 bottom-20 z-10 w-10 h-10 translate-x-1/2 rounded-full p-3 shadow-lg cursor-pointer transition-opacity duration-300 md:w-16 md:h-16 md:bottom-20 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onScrollTop}
    >
      <ArrowUp className="w-5 h-5"/>
    </Button>
  )
}
