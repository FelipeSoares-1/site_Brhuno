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
    <nav className="hidden md:flex md:items-center md:gap-8 text-sm">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-medium text-foreground/70 transition-all duration-300 hover:text-accent relative group"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/20">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col space-y-4 mt-4 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 font-medium transition-colors hover:text-accent"
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
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-8 flex items-center space-x-2 group">
            <div className="font-bold text-lg sm:text-xl text-accent group-hover:scale-110 transition-transform duration-300">
              ⚽ Brhuno
            </div>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
