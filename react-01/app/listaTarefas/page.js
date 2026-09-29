"use client";

import { addTarefas, getTarefas } from "@/api";
import { useState } from "react";

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [filtrarConcluidas, setFiltrarConcluidas] = useState(false);
  async function handleCarregarTarefasClick() {
    const data = await getTarefas();
    setTarefas(data?.results ?? []);
  }
  async function handleAddTarefasClick() {
    const trimmedDescricao = descricao.trim();
    if (!trimmedDescricao) {
      alert("Precisa preencher a descrição");
      return;
    }
    const data = await addTarefas(trimmedDescricao);
    console.log("data", data);
    setDescricao("");
    handleCarregarTarefasClick();
  }
  function handleDescricaoChange(evt) {
    setDescricao(evt.target.value);
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <hr />
      <input value={descricao} onChange={handleDescricaoChange} />
      <button onClick={handleAddTarefasClick}>Adicionar Tarefa</button>{" "}
      <button onClick={handleCarregarTarefasClick}>Carregar Tarefas</button>
      <hr />
      <input
        type="checkbox"
        checked={filtrarConcluidas}
        onChange={() => setFiltrarConcluidas(!filtrarConcluidas)}
      />
      Ocultar concluídas
      <hr />
      <ul>
        {tarefas
          .filter(
            (tarefa) =>
              !filtrarConcluidas || (filtrarConcluidas && !tarefa.concluida),
          )
          .map((tarefa) => (
            <li key={tarefa.objectId}>
              {tarefa.concluida ? (
                <del>{tarefa.descricao}</del>
              ) : (
                <>{tarefa.descricao}</>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
