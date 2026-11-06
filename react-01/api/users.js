import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  headers: {
    "X-Parse-Application-Id": "SMbVaOT1RiTaztXFK69oenclLGEpGu83xDzDOTkw",
    "X-Parse-REST-API-Key": "XtSivj6n0JaKIDy3C0AvTAu16IwJyFvliCX9jcuo",
  },
});

const headerJson = { "Content-Type": "application/json" };
const headerRevocableSession = { "X-Parse-Revocable-Session": "1" };

export async function signingUp({ username, password, email }) {
  const response = await instance.post(
    "/users",
    { username: username, password: password, email: email },
    { headers: { ...headerJson, ...headerRevocableSession } },
  );
  console.log("response.data", response.data);
  return response.data;
}
