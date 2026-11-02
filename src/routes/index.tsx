import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRightCircle, Instagram, Youtube, Facebook } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import sel from "@/assets/selecciones.jpg";
import tal from "@/assets/talleres.jpg";
import res from "@/assets/reservas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEFIDER USM — Educación Física, Deportes y Recreación" },
      { name: "description", content: "Selecciones, talleres por campus y reservas en línea del DEFIDER USM." },
      { property: "og:title", content: "DEFIDER USM" },
      { property: "og:description", content: "Selecciones, talleres por campus y reservas en línea." },
    ],
  }),
  component: Index,
});

const cards = [
  { to: "/seleccion-deportes", title: "Selección de deportes", img: sel },
  { to: "/talleres", title: "Talleres", img: tal },
  { to: "/reservas", title: "Reservas", img: res },
] as const;

const campusesSocials = [
  {
    campus: "Campus Casa Central Valparaíso",
    socials: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/defider.usm/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/channel/UCtNqvukh8tbSa3OK5XiqLew" },
      { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/defiderusm" },
    ],
  },
  {
    campus: "Campus Santiago",
    socials: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/defider_usm/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/channel/UCEOX24hYZBXGuFJGc4Skcag" },
      { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/defidersantiago/" },
    ],
  },
];

const news = [
  { title: "Con triunfos contundentes y sorpresas comenzó la vigésima edición del Interescolar Deportivo de la USM", date: "20 - Octubre - 2026", img: sel, href: "https://usm.cl/noticias/con-triunfos-contundentes-y-sorpresas-comenzo-la-vigesima-edicion-del-interescolar-deportivo-de-la-usm/"},
  { title: "USM da inicio a Campeonato Nacional Universitario de Tenis de Mesa 2026", date: "13 - Octubre - 2026", img: res, href: "https://usm.cl/noticias/usm-da-inicio-a-campeonato-nacional-universitario-de-tenis-de-mesa-2026/" },
  { title: "Estudiante USM es campeona panamericana de parapente", date: "20 - Agosto - 2026", img: hero, href: "https://usm.cl/noticias/estudiante-usm-es-campeona-panamericana-de-parapente/" },
  { title: "Estudiante DIMA obtiene destacado segundo lugar en Campeonato Nacional de Remo", date: "29 - Julio - 2026", img: tal, href: "https://usm.cl/noticias/estudiante-dima-obtiene-destacado-segundo-lugar-en-campeonato-nacional-de-remo/" },
];

const gallery = [
  { title: "USM Rugby Day 2025", img: sel, href: "https://defider.usm.cl/usm-rugby-day-2025/" },
  { title: "Ceremonia de Excelencia Deportiva 2024", img: hero, href: "https://defider.usm.cl/ceremonia-excelencia-deportiva-2024/" },
  { title: "Museo de la Camiseta", img: tal, href: "https://defider.usm.cl/museo-de-la-camiseta/" },
  { title: "Campeonato Nacional Fenaude Rugby Sevens", img: res, href: "https://defider.usm.cl/galeria-de-imagenes/" },
];

const videos = [
  { id: "NwlLJwh00gM", title: "Vive el deporte y la actividad física en la USM", text: "En este video, conocerás la importancia que tiene el deporte y la actividad física en la universidad, siendo una base fundamental para el desarrollo integral de las y los estudiantes." },
  { id: "", title: "Campeonato Nacional Universitario Rugby 7", text: "Registro de la participación de la liga de Rugby 7 de la USM en el Campeonato Nacional Fenaude 2023." },
];

function SectionHead({ title, light, href }: { title: string; light?: boolean; href: string }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-overlay-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <a 
        href={href} 
        className={`flex items-center gap-2 text-lg font-medium ${light ? "text-overlay-foreground" : "text-foreground"}`}
      >
        Ver todo <ArrowRightCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <SiteLayout>
      <section className="relative h-[620px] overflow-hidden bg-overlay">
        <img src={hero} alt="Atleta lanzando" className="absolute inset-0 h-full w-full object-cover opacity-55" width={1600} height={800} />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
          <div className="max-w-2xl">
            <h1 className="bar-accent text-4xl font-extrabold leading-tight text-overlay-foreground md:text-5xl">
              Bienvenidos al Departamento de Educación Física, Deportes y Recreación
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="group relative h-72 overflow-hidden rounded-xl shadow-lg">
            <img src={c.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="card-shade absolute inset-0" />
            <h2 className="bar-accent absolute bottom-6 left-6 text-2xl font-bold text-overlay-foreground">{c.title}</h2>
          </Link>
        ))}
      </section>

      {/* Noticias */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHead 
          title="Noticias" 
          href="https://usm.cl/categorias_noticias/deporte/"  
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <a key={n.title} href={n.href} className="group relative h-96 overflow-hidden rounded-xl shadow-lg">
              <img src={n.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="card-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="border-l-2 border-accent pl-4 text-lg font-bold leading-snug text-overlay-foreground">{n.title}</h3>
                <p className="mt-3 text-xs text-overlay-foreground">{n.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Eventos */}
      <section className="relative overflow-hidden bg-overlay">
        <img src={res} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <SectionHead title="Eventos" 
          href="https://defider.usm.cl/eventos"
          light />
          <p className="text-sm text-overlay-foreground/60">No hay eventos publicados.</p>
        </div>
      </section>

      {/* Redes sociales */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        {campusesSocials.map((item) => (
          <div key={item.campus} className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Redes Sociales</h2>
            <p className="mt-1 text-lg font-medium text-muted-foreground">{item.campus}</p>
            <div className="mt-6 flex justify-center gap-3">
              {item.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name} 
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Icon className="h-9 w-9" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Videos */}
      <section className="bg-overlay">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
          {videos.map((v) => (
            <div key={v.title} className="grid gap-8 md:grid-cols-[3fr_2fr]">
              <div className="aspect-video overflow-hidden rounded-xl bg-background/10">
                {v.id ? (
                  <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${v.id}`} title={v.title} allowFullScreen loading="lazy" />
                ) : (
                  <div className="flex h-full items-center justify-center text-overlay-foreground/70">Video próximamente</div>
                )}
              </div>
              <div className="text-overlay-foreground">
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="mt-4 opacity-90">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Galería de Imágenes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <a key={g.title} href={g.href} className="group relative h-56 overflow-hidden rounded-xl shadow-lg">
              <img src={g.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-overlay/40" />
              <h3 className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-lg font-extrabold uppercase text-overlay-foreground">{g.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
