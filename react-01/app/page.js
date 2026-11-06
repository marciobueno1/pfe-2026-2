"use client";

import { MyButton } from "@/components/MyButton";
import { useTarefaStore } from "@/zustand";
import Link from "next/link";
import React from "react";

export default function Home() {
  const filtrarConcluidas = useTarefaStore((state) => state.filtrarConcluidas);
  return (
    <React.StrictMode>
      <div>
        <h1>Olá, Turma!</h1>
        <p>Exemplo de um parágrafo!</p>
        <hr />
        <Link href="/jogoDados">Jogo de Dados</Link>
        <br />
        <Link href="/listaTarefas">Lista de Tarefas</Link>
        <hr />
        <h2>Autenticação</h2>
        <Link href="/auth/signup">Cadastrar Usuário</Link>
        <hr />
        <MyButton />
        <MyButton />
        <hr />
        Filtro de tarefas concluídas está ativado:{" "}
        {filtrarConcluidas ? "sim" : "não"}
        <hr />
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </div>
    </React.StrictMode>
  );
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}
