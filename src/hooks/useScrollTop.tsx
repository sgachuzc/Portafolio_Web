import { useEffect, useState } from "react"

export const useScrollTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isHighlighting, setIsHighlighting] = useState<boolean>(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }

  const onScrollTop = () => {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    })
    setTimeout(() => {
      setIsHighlighting(true);
      setTimeout(() => {
        setIsHighlighting(false);
      }, 2000);
    }, 600);
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return {
    visible,
    isHighlighting,
    onScrollTop
  }
}
