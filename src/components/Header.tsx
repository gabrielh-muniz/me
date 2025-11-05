import type { JSX } from "astro/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_DATA, PERSONAL_DATA } from "@/lib/data";
import { Menu, X } from "lucide-react";
import ModeToggle from "./ModeToggle";

function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      id="home"
      className="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-backdrop-filter:bg-background/60"
    >
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {PERSONAL_DATA.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAVIGATION_DATA.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="flex items-center gap-1 text-foreground transition-colors hover:text-foreground/80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </motion.a>
          ))}
        </nav>
        {/* Mobile menu button */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          <div className="md:hidden">
            <button
              className="rounded-md p-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative h-6 w-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "rotate-180 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "rotate-0 opacity-100"
                      : "rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute z-10 w-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out md:hidden bg-background border-b border-border ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-8 py-4">
          <ul className="flex flex-col gap-4">
            {NAVIGATION_DATA.map((nav, index) => (
              <li
                key={nav.id}
                className={`transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={nav.href}
                  className="text-muted-foreground hover:text-foreground block rounded-md px-2 py-2 text-sm font-medium transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <nav.icon className="w-4 h-4" />
                    {nav.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
