"use client";

import { loggingIn } from "@/api";
import { useUserStore } from "@/zustand";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const { setUser: setLoggedUser } = useUserStore((state) => state);
  const [user, setUser] = useState({ username: "", password: "" });
  function handleChange(evt) {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  }
  function handleClick(evt) {
    evt.preventDefault();
    console.log("user", user);
    if (!user.username) {
      alert("Campo 'Usuário' é obrigatório!");
      return;
    }
    if (!user.password) {
      alert("Campo 'Senha' é obrigatório!");
      return;
    }
    mutation.mutate(user);
  }
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: loggingIn,
    onSuccess: (data) => {
      let loggedUser = data;
      setLoggedUser(loggedUser);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.back();
    },
  });

  return (
    <div>
      <Link href="/">Voltar</Link>
      <h1>Fazer Login</h1>
      <form onSubmit={handleClick}>
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
        <button type="submit" onClick={handleClick}>
          Entrar
        </button>
      </form>
    </div>
  );
}
