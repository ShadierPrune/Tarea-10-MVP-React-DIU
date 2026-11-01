import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { selecciones } from "@/data/defider";
import img from "@/assets/selecciones.jpg";

export const Route = createFileRoute("/seleccion-deportes")({
  head: () => ({
    meta: [
      { title: "Selección de deportes — DEFIDER USM" },
      { name: "description", content: "Selecciones deportivas que representan a la USM a nivel regional, nacional e internacional." },
      { property: "og:title", content: "Selección de deportes — DEFIDER USM" },
      { property: "og:description", content: "Conoce las selecciones deportivas de la USM." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        image={img}
        title="Selección de deportes"
        text="El Área de Representación Deportiva planifica, coordina y evalúa las selecciones deportivas, encargadas de representar a la Universidad en el deporte competitivo a nivel regional, nacional e internacional."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {selecciones.map((s) => (
          <article key={s.nombre} className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
            <Trophy className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-xl font-bold">{s.nombre}</h2>
            <p className="mt-1 text-sm text-muted-foreground">Campus {s.campus}</p>
            <p className="mt-3 text-sm font-medium text-primary">{s.entrenamiento}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
