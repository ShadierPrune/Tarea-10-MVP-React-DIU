import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Contact, User } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { campuses, talleres, type Campus } from "@/data/defider";
import img from "@/assets/talleres.jpg";

export const Route = createFileRoute("/talleres")({
  head: () => ({
    meta: [
      { title: "Talleres por campus — DEFIDER USM" },
      { name: "description", content: "Talleres de Casa Central, Vitacura y San Joaquín con sus horarios de clases." },
      { property: "og:title", content: "Talleres por campus — DEFIDER USM" },
      { property: "og:description", content: "Todos los talleres y sus horarios, por campus." },
    ],
  }),
  component: Page,
});

function Page() {
  const [campus, setCampus] = useState<Campus>("Casa Central");
  return (
    <SiteLayout>
      <PageHero
        image={img}
        title="Talleres"
        text="Instancias recreativas voluntarias para desarrollar hábitos de vida saludable. Elige tu campus para ver los talleres y sus horarios."
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-2">
          {campuses.map((c) => (
            <button
              key={c}
              onClick={() => setCampus(c)}
              className={`rounded-full border px-5 py-2 font-semibold transition-colors ${campus === c ? "border-primary bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              Campus {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {talleres[campus].map((t) => (
            <article key={t.nombre} className="overflow-hidden rounded-xl border bg-card shadow-sm">
              <div className="bg-overlay p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{t.area}</span>
                <h2 className="bar-accent mt-2 text-xl font-bold text-overlay-foreground">{t.nombre}</h2>
              </div>
              <div className="space-y-3 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold"><User className="h-4 w-4 text-primary" />{t.profesor}</p>
                <p className="flex items-center gap-2 text-sm font-semibold"><MapPin className="h-4 w-4" />Recinto: {t.lugar}</p>
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold"><Clock className="h-4 w-4 text-primary" />Horario de clases</p>
                  <ul className="mt-2 space-y-1 pl-6 text-sm">
                    {t.horario.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
