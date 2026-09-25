"use client";

import { getTarefas } from "@/api";
import { useState } from "react";

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  async function handleClick() {
    const data = await getTarefas();
    setTarefas(data?.results ?? []);
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <button onClick={handleClick}>Carregar Tarefas</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.objectId}>{tarefa.descricao}</li>
        ))}
      </ul>
    </>
  );
}
