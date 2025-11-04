import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Email invalide" }, { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(process.env.BREVO_LIST_ID) || 1],
        updateEnabled: true, // met à jour si déjà inscrit
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Erreur Brevo:", err);
      return NextResponse.json({ ok: false, error: "Erreur API Brevo" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur subscribe:", err);
    return NextResponse.json({ ok: false, error: "Erreur interne" }, { status: 500 });
  }
}