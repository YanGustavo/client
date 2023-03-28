import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface UseComponentVisibleProps {
  initialIsVisible: boolean;
}

interface UseComponentVisibleReturn {
  ref: MutableRefObject<HTMLDivElement | null>;
  isComponentVisible: boolean;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useComponentVisible({ initialIsVisible }: UseComponentVisibleProps): UseComponentVisibleReturn {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}