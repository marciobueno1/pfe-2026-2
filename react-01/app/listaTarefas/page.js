"use client";

import { addTarefas, getTarefas } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function ListaTarefas() {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const tarefas = data?.results ?? [];

  const addMutation = useMutation({
    mutationFn: addTarefas,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
  });

  const [descricao, setDescricao] = useState("");
  const [filtrarConcluidas, setFiltrarConcluidas] = useState(false);
  async function handleAddTarefasClick() {
    const trimmedDescricao = descricao.trim();
    if (!trimmedDescricao) {
      alert("Precisa preencher a descrição");
      return;
    }
    addMutation.mutate(trimmedDescricao);
  }
  function handleDescricaoChange(evt) {
    setDescricao(evt.target.value);
  }
  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>
        Lista de Tarefas{isPending && " (loading...)"}
        {isFetching && " (fetching...)"}
      </h1>
      {error && <h2>Aconteceu um erro: {error.message}</h2>}
      <hr />
      <input value={descricao} onChange={handleDescricaoChange} />
      <button onClick={handleAddTarefasClick} disabled={addMutation.isPending}>
        Adicionar Tarefa
      </button>
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
