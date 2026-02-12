import Link from "next/link";
import Image from "next/image";
import {Facebook, Instagram, Mail} from "lucide-react";

/*const shopLinks = [
  { label: "Dinnerware", href: "#" },
  { label: "Vases", href: "#" },
  { label: "Decor", href: "#" },
  { label: "Gift Cards", href: "#" },
];

const studioLinks = [
  { label: "Our Story", href: "#" },
  { label: "Process", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Visit Us", href: "#" },
];*/

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center">
               <Image src="/images/logo.png" width={50} height={50} alt="Logo"/>
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Ogresdelaterre
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Chaque pièce raconte une histoire, façonnée par les mains de l&#39;artisan et le souffle de la terre.
            </p>
          </div>

       {/*    Shop
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Shop
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           Studio
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Studio
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
*/}
          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-6">
                <a
                  href="mailto:rey.michele@hotmail.fr"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail/>
                </a>
                <nav className="flex items-center gap-6" aria-label="Liens réseaux sociaux">
                  <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Instagram/>
                  </Link>
                  <Link
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Facebook/>
                  </Link>
                </nav>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  {"9 rue basse 21130 Auxonne"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Ogresdelaterre. Tout droits réservés."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
