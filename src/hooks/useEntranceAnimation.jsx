import { useEffect, useState } from "react";

// manually determine how long the entrance animation will takes
const useEntranceAnimation = (initialDurration = 6000) => {
  const [animateDone, setAnimateDone] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimateDone(true);
    }, initialDurration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return animateDone;
};

export default useEntranceAnimation;
