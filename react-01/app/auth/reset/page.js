"use client";

import { requestingPasswordReset } from "@/api";
import { useUserStore } from "@/zustand";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "" });
  function handleChange(evt) {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  }
  function handleClick(evt) {
    evt.preventDefault();
    if (!user.email) {
      alert("Campo 'e-mail' é obrigatório!");
      return;
    }
    mutation.mutate(user);
  }
  const mutation = useMutation({
    mutationFn: requestingPasswordReset,
    onSuccess: () => {
      router.back();
    },
  });

  return (
    <div>
      <Link href="/">Voltar</Link>
      <h1>Esqueci minha senha</h1>
      <form onSubmit={handleClick}>
        E-mail:{" "}
        <input
          type="text"
          placeholder="e-mail"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <br />
        <button type="submit" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </div>
  );
}
