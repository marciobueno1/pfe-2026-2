"use client";

import { loggingOut } from "@/api";
import { useUserStore } from "@/zustand";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const { user, setUser: setLoggedUser } = useUserStore((state) => state);
  const loggedUser = user ?? {};
  function handleClick(evt) {
    evt.preventDefault();
    const resp = confirm("Realmente deseja fazer o logout?");
    if (!resp) {
      return;
    }
    mutation.mutate(loggedUser);
  }
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: loggingOut,
    onSuccess: () => {
      setLoggedUser(null);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.back();
    },
  });

  return (
    <div>
      <Link href="/">Voltar</Link>
      <h1>Fazer Logout</h1>
      <form onSubmit={handleClick}>
        <button type="submit" onClick={handleClick}>
          Sair
        </button>
      </form>
    </div>
  );
}
