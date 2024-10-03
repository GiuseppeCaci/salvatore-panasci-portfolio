import { useState, useEffect } from "react";

export const useTransitionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible;
};

export default useTransitionPage