import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface FloatingButtonProps {
  visible: boolean;
  onScrollTop: () => void;
}

export const FloatingButton = ({ visible, onScrollTop }: FloatingButtonProps) => {
  return (
      <Button
          variant="outline"
          size="icon"
          aria-label="Volver al inicio"
          onClick={onScrollTop}
          className={`fixed right-1/12 bottom-20 z-50 h-11 w-11 translate-x-1/2 rounded-xl border-neutral-200 bg-black/90 p-0 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 md:bottom-20 md:h-12 md:w-12 ${
              visible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
  );
};