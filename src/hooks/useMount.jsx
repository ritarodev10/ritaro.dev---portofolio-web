import { useState, useEffect } from "react";

const useMount = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted, setIsMounted];
};

export default useMount;
