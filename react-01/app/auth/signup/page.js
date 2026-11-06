"use client";

import { signingUp } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function SignUpPage() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  function handleChange(evt) {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  }
  function handleClick() {
    console.log("user", user);
    if (!user.username) {
      alert("Campo 'Usuário' é obrigatório!");
      return;
    }
    if (!user.password) {
      alert("Campo 'Senha' é obrigatório!");
      return;
    }
    if (!user.email) {
      alert("Campo 'email' é obrigatório!");
      return;
    }
    mutation.mutate(user);
  }
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signingUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return (
    <div>
      <h1>Cadastrar Usuário</h1>
      Usuário:{" "}
      <input
        type="text"
        placeholder="nome de usuário"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <br />
      <br />
      Senha:{" "}
      <input
        type="password"
        placeholder="senha"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <br />
      E-mail:{" "}
      <input
        type="email"
        placeholder="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleClick}>Cadastrar</button>
    </div>
  );
}
