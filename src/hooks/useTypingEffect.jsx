import { useState, useEffect } from "react";

const useTypingEffect = (
  message = "empty",
  delay = 1500,
  typingSpeed = 1,
  longTimeout = 100
) => {
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    if (typingStarted) {
      const nextTypedText = message.slice(0, typedText.length + 1);

      if (nextTypedText === typedText) return setTypingDone(true);

      let timeout = typingSpeed; // regular interval for other characters
      if (typedText.endsWith(".") || typedText.endsWith(",")) {
        timeout = longTimeout; // long interval after typing a . or ,
      }

      const timeOut = setTimeout(() => {
        setTypedText(message.slice(0, typedText.length + 1));
      }, timeout);

      return () => clearTimeout(timeOut);
    }
  }, [message, typedText, typingStarted]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypingStarted(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [message]);

  return { typedText, typingDone };
};

export default useTypingEffect;
