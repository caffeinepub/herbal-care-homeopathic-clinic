import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const ocidMap: Record<string, string> = {
  "/": "nav.home.link",
  "/about": "nav.about.link",
  "/services": "nav.services.link",
  "/contact": "nav.contact.link",
};

export default function Header() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-green/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-green-sm">
      <div className="container flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-ocid="nav.home.link"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand-gold/60 group-hover:ring-brand-gold transition-all">
            <img
              src="/assets/generated/herbal-logo-transparent.dim_200x200.png"
              alt="Herbal Care Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-display font-bold text-brand-green tracking-tight">
              Herbal Care
            </span>
            <span className="text-xs font-medium text-brand-gold-dark tracking-widest uppercase">
              Homeopathic Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-ocid={ocidMap[item.path]}
              className={`text-sm font-semibold tracking-wide transition-colors relative group ${
                isActive(item.path)
                  ? "text-brand-green"
                  : "text-foreground/70 hover:text-brand-green"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 shadow-green-sm hover:shadow-green-md transition-all font-semibold">
              <Leaf className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              data-ocid="nav.mobile_menu.toggle"
              className="text-brand-green hover:bg-brand-green-pale"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-8 pt-2">
                <img
                  src="/assets/generated/herbal-logo-transparent.dim_200x200.png"
                  alt="Herbal Care Logo"
                  className="h-10 w-10 rounded-full ring-2 ring-brand-gold/60"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-display font-bold text-brand-green">
                    Herbal Care
                  </span>
                  <span className="text-xs text-brand-gold-dark tracking-widest uppercase">
                    Homeopathic Clinic
                  </span>
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-ocid={ocidMap[item.path]}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-brand-green-pale text-brand-green"
                        : "text-foreground/70 hover:bg-brand-green-pale hover:text-brand-green"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white rounded-full shadow-green-sm font-semibold">
                      <Leaf className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </nav>

              <div className="mt-auto pb-6 text-center text-xs text-muted-foreground">
                <p>📍 Natural healing for all</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
