import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-usm.jpg";
import acceso from "@/assets/acceso.png";
import consejoRectores from "@/assets/consejo-rectores.png";
import g9 from "@/assets/g9.png";
import aur from "@/assets/aur.png";
import cruv from "@/assets/cruv.png";
import reuna from "@/assets/reuna.png";
import universia from "@/assets/universia.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/seleccion-deportes", label: "Selección de deportes" },
  { to: "/talleres", label: "Talleres" },
  { to: "/reservas", label: "Reservas" },
] as const;

// Enlaces del footer: reemplazar "#" por las URLs reales.
const footerCols = [
  {
    groups: [
      { title: "Universidad", links: ["Nuestra Historia", "Federico Santa María", "Definiciones Estratégicas", "Modelo Educativo", "Organización", "Información Estadística USM"] },
      { title: "Campus y Sedes", links: ["Información Campus y Sedes", "Tour Virtual"] },
    ],
  },
  {
    groups: [
      { title: "Extensión y Cultura", links: ["Dirección de Comunicaciones Estratégicas y Extensión Cultural", "Dirección General de Vinculación con el Medio", "Oficina de Asuntos Internacionales", "Red de Ex-Alumnos", "Noticias USM", "Eventos USM", "Radio USM", "Cultura USM"] },
    ],
  },
  {
    groups: [
      { title: "Servicios", links: ["Aula USM", "Biblioteca USM", "Portal de Autoservicio Institucional", "Dirección de Tecnologías de la Información", "Portal de Reportes UDAI", "Sistema de Información de Gestión Académica", "Sistema Integrado de Información Argos ERP", "Sistema de Remuneraciones Históricas", "Directorio USM", "Trabaja con nosotros"] },
    ],
  },
];

// Logos de convenios, en el orden de izquierda a derecha.
// href: reemplazar "#" por la URL real de cada institución.
const partners = [
  { name: "ACCESO Educación Superior", img: acceso, h: "h-12", href: "#" },
  { name: "Consejo de Rectores de las Universidades Chilenas", img: consejoRectores, h: "h-16", href: "#" },
  { name: "G9 Universidades Públicas no Estatales", img: g9, h: "h-12", href: "#" },
  { name: "Agrupación de Universidades Regionales de Chile", img: aur, h: "h-12", href: "#" },
  { name: "Consejo de Rectores de Valparaíso", img: cruv, h: "h-14", href: "#" },
  { name: "REUNA Ciencia y Educación en Red", img: reuna, h: "h-12", href: "#" },
  { name: "universia", img: universia, h: "h-10", href: "#" },
] as const;

const socials = [Facebook, Twitter, Youtube, Instagram, Linkedin];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm font-bold">
          <a href="https://usm.cl" target="_blank" rel="noreferrer">USM.cl</a>
          <span>DEFIDER</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Universidad Técnica Federico Santa María" className="h-14 w-auto" />
            <div className="hidden border-l pl-4 text-[11px] uppercase leading-tight text-muted-foreground md:block">
              Departamento de<br />Educación Física,<br />Deportes y Recreación
            </div>
          </Link>
          <nav className="hidden gap-6 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary border-accent" }}
                inactiveProps={{ className: "border-transparent" }}
                className="border-b-2 pb-1 font-medium transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col border-t px-4 pb-4 lg:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-medium">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-sm md:grid-cols-2 lg:grid-cols-4">
            {footerCols.map((col, i) => (
              <div key={i} className="space-y-10">
                {col.groups.map((g) => (
                  <div key={g.title}>
                    <h3 className="mb-4 text-lg font-bold uppercase">{g.title}</h3>
                    <ul className="space-y-1.5">
                      {g.links.map((l) => (
                        <li key={l}><a href="#" className="hover:underline">{l}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-col items-start gap-8 lg:items-end">
              <a href="#" className="block w-56 rounded-2xl border-2 border-primary-foreground p-5 text-center">
                <div className="text-xs">Comisión Nacional de Acreditación · CNA-Chile</div>
                <div className="my-3 border-t border-primary-foreground/50" />
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-extrabold">6</span>
                  <span className="text-left text-sm font-bold leading-tight">AÑOS · UNIVERSIDAD<br />ACREDITADA</span>
                </div>
                <ul className="mt-3 space-y-1 text-left text-xs opacity-90">
                  <li>Gestión Institucional</li><li>Docencia Pregrado</li><li>Investigación</li><li>Postgrado</li><li>Vinculación con el Medio</li>
                </ul>
                <div className="mt-3 rounded bg-primary-foreground px-2 py-0.5 text-xs font-bold text-primary">HASTA DICIEMBRE 2028</div>
              </a>
              <div className="text-center">
                <a href="https://usm.cl" target="_blank" rel="noreferrer" className="text-5xl font-extrabold">usm.cl</a>
                <div className="mt-3 flex gap-2">
                  {socials.map((Icon, i) => (
                    <a key={i} href="#" aria-label="Red social" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-overlay text-overlay-foreground">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 py-10">
            {partners.map((p) => {
              const external = p.href.startsWith("http");
              return (
                <a
                  key={p.name}
                  href={p.href}
                  title={p.name}
                  aria-label={p.name}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <img src={p.img} alt={p.name} loading="lazy" className={`w-auto object-contain ${p.h}`} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ image, title, text }: { image: string; title: string; text?: string }) {
  return (
    <>
      <section className="relative h-[360px] overflow-hidden bg-overlay">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
          <h1 className="bar-accent text-4xl font-extrabold text-overlay-foreground md:text-5xl">{title}</h1>
        </div>
      </section>
      {text && <p className="mx-auto max-w-6xl px-4 pt-6 text-lg text-muted-foreground">{text}</p>}
    </>
  );
}
