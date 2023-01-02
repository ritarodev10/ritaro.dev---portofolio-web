import { useState, useEffect } from "react";

// track whether a component has been mounted or not
const useMount = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted, setIsMounted];
};

export default useMount;
