import { useEffect, useState } from "react";

const useEntranceAnimation = (initialDurration = 6000) => {
  const [animateDone, setAnimateDone] = useState(false);
  const [entranceDuration] = useState(initialDurration);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimateDone(true);
    }, entranceDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return { animateDone, entranceDuration };
};

export default useEntranceAnimation;
