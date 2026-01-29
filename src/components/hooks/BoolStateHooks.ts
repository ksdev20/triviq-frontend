import { useState } from "react";

export function BoolStateHook() {
  const [state, setState] = useState(false);
  const onClick = () => {
    setState(prev => !prev);
  };
  return { state, onClick };
}