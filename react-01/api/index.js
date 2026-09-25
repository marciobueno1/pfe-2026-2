import axios from "axios";

export async function getTarefas() {
  const response = await axios.get(
    "https://parseapi.back4app.com/classes/Tarefa",
    {
      headers: {
        "X-Parse-Application-Id": "SMbVaOT1RiTaztXFK69oenclLGEpGu83xDzDOTkw",
        "X-Parse-REST-API-Key": "XtSivj6n0JaKIDy3C0AvTAu16IwJyFvliCX9jcuo",
      },
    },
  );
  return response.data;
}
