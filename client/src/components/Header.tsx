import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#statistics", label: "Estatísticas" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

function DesktopNav() {
  return (
    <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-foreground/60 transition-colors hover:text-foreground/80"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navegação</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col space-y-4 mt-4 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              Brhuno Santana
            </span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "px-4 hidden sm:flex"
            )}
          >
            Entrar em Contato
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
