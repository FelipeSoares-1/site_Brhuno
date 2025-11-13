import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { buttonVariants } from "./ui/button";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#statistics", label: "Estatísticas" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Brhuno Santana
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "px-4"
            )}
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </header>
  );
}
