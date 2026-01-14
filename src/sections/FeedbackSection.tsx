import { Section } from '@/components/Section'
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, SquareCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from "sonner"

type BlockedButtonColors = keyof typeof buttons

const buttons = {
  incredible: "bg-blue-600 text-white animate-pulse disabled:opacity-100 hover:-translate-y-1 transition-transform",
  cleanCode: "bg-blue-600 text-white animate-pulse disabled:opacity-100 hover:-translate-y-1 transition-transform",
  meetup: "bg-blue-600 text-white animate-pulse disabled:opacity-100 hover:-translate-y-1 transition-transform",
}

export const FeedbackSection = () => {

  const [selectedButton, setSelectedButton] = useState<BlockedButtonColors|null>(null)
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const savedButton = localStorage.getItem('feedbackButton');
    if (savedButton) {
      setSelectedButton(savedButton as BlockedButtonColors);
      setIsBlocked(true);
    }
  },[])

  const handleButtonClick = (buttonId: string) => {
    if (!isBlocked) {
      localStorage.setItem('feedbackButton', buttonId);
      setSelectedButton(buttonId as BlockedButtonColors);
      setIsBlocked(true);
    }
  };

  return (
    <Section id='feedback'>
      <h2 className="text-center text-3xl font-semibold mt-15">
        ¿Qué te pareció
        <br />
        <span className="text-muted-foreground/80">
          mi portafolio?
        </span>
      </h2>
      <div className="flex items-center gap-4 mt-10 justify-center mb-20 flex-wrap">
        <Button 
          className={(selectedButton === "incredible") ? buttons[selectedButton] : ''}
          size={"lg"} 
          variant="outline" 
          onClick={() => {
            handleButtonClick("incredible")
            toast('🚀 ¡Gracias! Me tomó varias tazas de café lograrlo.')
          }}
          disabled={isBlocked}
        >
          <Rocket /> ¡Increible!
        </Button>
        <Button 
          className={(selectedButton === "cleanCode") ? buttons[selectedButton] : ''}
          size={"lg"} 
          variant="outline"
          disabled={isBlocked}
          onClick={() => {
            handleButtonClick("cleanCode")
            toast('😁 Apreció que te fijaras en los detalles.')
          }}
        >
          <SquareCode /> Código limpio
        </Button>
        <Button 
          className={(selectedButton === "meetup") ? buttons[selectedButton] : ''}
          size={"lg"} 
          variant="outline" 
          disabled={isBlocked}
          onClick={() => {
            handleButtonClick("meetup"); 
            window.open('https://www.linkedin.com/in/sgachuzc/', '_blank')
          }}
        >
          <MessageCircle /> Hablemos
        </Button>
      </div>
    </Section>
  )
}