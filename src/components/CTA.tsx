"use client";
import { FormEvent, useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="container py-16 md:py-24">
      <div className="card">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Rejoins la bêta privée</h3>
            <p className="text-muted mt-2">Laisse ton email et sois parmi les premiers testeurs sur iOS/Android.</p>
          </div>
          <form onSubmit={onSubmit} className="flex gap-2">
            <input
              className="input flex-1"
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn" disabled={status === "loading"}>
              {status === "loading" ? "..." : "M’inscrire"}
            </button>
          </form>
          {status === "ok" && <p className="text-green-400">Merci ! Tu es bien sur la liste d’attente </p>}
          {status === "error" && <p className="text-red-400">Oups, une erreur est survenue. Réessaie.</p>}
        </div>
      </div>
    </section>
  );
}
