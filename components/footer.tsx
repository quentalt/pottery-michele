import Link from "next/link";
import Image from "next/image";

const shopLinks = [
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
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center">
               <Image src="/logo.jpg" width={24} height={24} alt="Logo"/>
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Terra Studio
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Intentional ceramics crafted for the modern sanctuary. Minimalist
              design, maximal craft.
            </p>
          </div>

          {/* Shop */}
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

          {/* Studio */}
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

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@terrastudio.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hello@terrastudio.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  {"123 Potter's Row, Studio 4B"}
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Portland, OR 97204
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
            {"© 2024 Terra Ceramic Studio. All Rights Reserved. Handcrafted Earth & Fire."}
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
