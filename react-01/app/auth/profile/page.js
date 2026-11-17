"use client";

import { useUserStore } from "@/zustand";
import Link from "next/link";

export default function ProfilePage() {
  const user = useUserStore((state) => state.user) ?? {
    username: "(vazio)",
    email: "(vazio)",
  };
  function handleChange() {}
  return (
    <div>
      <Link href="/">Voltar</Link>
      <h1>Usuário Logado</h1>
      <form>
        Usuário:{" "}
        <input
          type="text"
          placeholder="nome de usuário"
          name="username"
          value={user.username}
          onChange={handleChange}
          readOnly
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
          readOnly
        />
      </form>
    </div>
  );
}
