import { MyButton } from "@/components/MyButton";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <div>
        <h1>Olá, Turma!</h1>
        <p>Exemplo de um parágrafo!</p>
        <hr />
        <Link href="/jogoDados">Jogo de Dados</Link>
        <hr />
        <MyButton />
        <MyButton />
        <hr />
        <Cup />
        <Cup />
        <Cup />
      </div>
    </React.StrictMode>
  );
}

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
