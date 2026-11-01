import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { servicios, campuses } from "@/data/defider";

export const Route = createFileRoute("/reservas/$servicio")({
  loader: ({ params }) => {
    const s = servicios.find((x) => x.slug === params.servicio);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `Reserva ${loaderData.nombre} — DEFIDER USM` : "Reserva — DEFIDER USM" },
      { name: "description", content: loaderData?.descripcion ?? "Reserva servicios deportivos USM." },
      { property: "og:title", content: loaderData ? `Reserva ${loaderData.nombre}` : "Reserva" },
      { property: "og:description", content: loaderData?.descripcion ?? "Reserva servicios deportivos USM." },
    ],
  }),
  component: Page,
});

function nextDays(n: number) {
  const out: Date[] = [];
  const d = new Date();
  while (out.length < n) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) out.push(new Date(d));
  }
  return out;
}

function Page() {
  const s = Route.useLoaderData();
  const days = nextDays(6);
  const [campus, setCampus] = useState(campuses[0]);
  const [opcion, setOpcion] = useState(s.opciones?.[0] ?? "");
  const [dia, setDia] = useState(0);
  const [bloque, setBloque] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const fecha = (days[dia] ?? new Date()).toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" });
  const valid = bloque && nombre.trim() && rol.trim() && /\S+@\S+\.\S+/.test(email);

  if (ok)
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-4 text-3xl font-extrabold">¡Reserva confirmada!</h1>
        <p className="mt-3 text-muted-foreground">
          {s.nombre}{opcion && ` · ${opcion}`} · Campus {campus}<br />
          <span className="capitalize">{fecha}</span> a las {bloque}
        </p>
        <Link to="/reservas" className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Volver a reservas</Link>
      </div>
    );

  const field = "w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring";
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/reservas" className="inline-flex items-center gap-2 text-sm text-primary"><ArrowLeft className="h-4 w-4" />Todas las reservas</Link>
      <h1 className="bar-accent mt-4 text-3xl font-extrabold">Reserva {s.nombre.toLowerCase()}</h1>
      <p className="mt-2 text-muted-foreground">{s.descripcion}</p>

      <form
        className="mt-8 space-y-8"
        onSubmit={(e) => { e.preventDefault(); if (valid) setOk(true); }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold">Campus
            <select className={field} value={campus} onChange={(e) => setCampus(e.target.value as typeof campus)}>
              {campuses.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          {s.opciones && (
            <label className="space-y-1 text-sm font-semibold">Cancha
              <select className={field} value={opcion} onChange={(e) => setOpcion(e.target.value)}>
                {s.opciones.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold">Día</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {days.map((d, i) => (
              <button type="button" key={i} onClick={() => { setDia(i); setBloque(null); }}
                className={`rounded-lg border px-4 py-2 text-sm capitalize ${dia === i ? "border-primary bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
                {d.toLocaleDateString("es-CL", { weekday: "short", day: "numeric" })}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Horario disponible</p>
          <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {s.bloques.map((b) => (
              <button type="button" key={b} onClick={() => setBloque(b)}
                className={`rounded-lg border py-2 text-sm font-medium ${bloque === b ? "border-accent bg-accent text-accent-foreground" : "hover:bg-secondary"}`}>
                {b}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Cupos por bloque: {s.cupos}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <label className="space-y-1 text-sm font-semibold">Nombre completo
            <input className={field} value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={100} />
          </label>
          <label className="space-y-1 text-sm font-semibold">Rol USM
            <input className={field} value={rol} onChange={(e) => setRol(e.target.value)} maxLength={20} placeholder="202012345-6" />
          </label>
          <label className="space-y-1 text-sm font-semibold">Correo institucional
            <input type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={120} placeholder="nombre@usm.cl" />
          </label>
        </div>

        <button disabled={!valid} className="rounded-md bg-primary px-8 py-3 font-bold text-primary-foreground transition-opacity disabled:opacity-40">
          Confirmar reserva
        </button>
      </form>
    </div>
  );
}
