import { useEffect, useState } from 'react';
import AOS from 'aos';
import { useScrollTop } from './useScrollTop';

export const useAppHooks = () => {
  const { visible, isHighlighting, onScrollTop } = useScrollTop();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return {
    visible,
    isHighlighting,
    onScrollTop,
    isMobile
  };
};