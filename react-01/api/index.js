import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  headers: {
    "X-Parse-Application-Id": "SMbVaOT1RiTaztXFK69oenclLGEpGu83xDzDOTkw",
    "X-Parse-REST-API-Key": "XtSivj6n0JaKIDy3C0AvTAu16IwJyFvliCX9jcuo",
  },
});

const headerJson = { "Content-Type": "application/json" };

export async function getTarefas() {
  const response = await instance.get("/classes/Tarefa");
  return response.data;
}

export async function addTarefas(descricao) {
  const response = await instance.post(
    "/classes/Tarefa",
    { descricao: descricao },
    { headers: { ...headerJson } },
  );
  return response.data;
}
