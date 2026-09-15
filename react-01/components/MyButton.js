"use client";

import { useState } from "react";

export function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((count) => count + 1);
  }
  return (
    <button onClick={handleClick}>Esse botão foi clicado {count} vezes</button>
  );
}
