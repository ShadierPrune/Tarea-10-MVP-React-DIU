import { createFileRoute, Outlet, Link, useMatches } from "@tanstack/react-router";
import { Dumbbell, Bike, Goal, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { servicios } from "@/data/defider";
import img from "@/assets/reservas.jpg";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservas — DEFIDER USM" },
      { name: "description", content: "Reserva sala de musculación, taller de spinning y canchas de fútbol y tenis." },
      { property: "og:title", content: "Reservas — DEFIDER USM" },
      { property: "og:description", content: "Reserva en línea los servicios deportivos USM." },
    ],
  }),
  component: Page,
});

const icons = { "sala-musculacion": Dumbbell, "taller-spinning": Bike, canchas: Goal } as Record<string, typeof Dumbbell>;

function Page() {
  const matches = useMatches();
  const child = matches.some((m) => m.routeId === "/reservas/$servicio");
  if (child) return <SiteLayout><Outlet /></SiteLayout>;
  return (
    <SiteLayout>
      <PageHero image={img} title="Reservas Santiago" text="Selecciona el servicio que deseas reservar. Nota: Las reservas en Casa Central son estrictamente presenciales." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
        {servicios.map((s) => {
          const Icon = icons[s.slug] ?? Dumbbell;

          if (s.slug !== "canchas" && s.url) {
            return (
              <a
                key={s.slug}
                href={s.url}
                className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-bold">Reserva {s.nombre.toLowerCase()}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.descripcion}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                  Reservar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          }

          return (
            <Link
              key={s.slug}
              to="/reservas/$servicio"
              params={{ servicio: s.slug }}
              className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold">Reserva {s.nombre.toLowerCase()}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.descripcion}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                Reservar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </section>
    </SiteLayout>
  );
}
