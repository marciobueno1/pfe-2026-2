"use client";

import React, { useState } from "react";

const MAXIMO_RODADAS = 5;

export default function JogoDado() {
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  function handleClickJogarDados1() {
    setJogadorAtual(2);
  }
  function handleClickJogarDados2() {
    setJogadorAtual(1);
    setRodadaAtual(rodadaAtual + 1);
  }
  return (
    <>
      <h1>Jogo de Dados</h1>
      <h2>
        {rodadaAtual > MAXIMO_RODADAS
          ? "Resultado Final"
          : `Rodada Atual = ${rodadaAtual}`}
      </h2>
      <hr />
      <button
        onClick={handleClickJogarDados1}
        disabled={jogadorAtual !== 1 || rodadaAtual > MAXIMO_RODADAS}
      >
        Jogar Dados 1
      </button>
      <button
        onClick={handleClickJogarDados2}
        disabled={jogadorAtual !== 2 || rodadaAtual > MAXIMO_RODADAS}
      >
        Jogar Dados 2
      </button>
    </>
  );
}

/*

export default function JogoDado() {
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  function handleClickJogarDados1() {
    setJogadorAtual(2);
  }
  function handleClickJogarDados2() {
    setJogadorAtual(1);
    if (rodadaAtual === MAXIMO_RODADAS) {
      setJogadorAtual(0);
      setFimDeJogo(true);
    } else {
      setRodadaAtual(rodadaAtual + 1);
    }
  }
  return (
    <>
      <h1>Jogo de Dados</h1>
      <h2>{fimDeJogo ? "Resultado Final" : `Rodada Atual = ${rodadaAtual}`}</h2>
      <hr />
      <button onClick={handleClickJogarDados1} disabled={jogadorAtual !== 1}>
        Jogar Dados 1
      </button>
      <button onClick={handleClickJogarDados2} disabled={jogadorAtual !== 2}>
        Jogar Dados 2
      </button>
    </>
  );
}

*/
