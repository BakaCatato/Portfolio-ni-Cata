import React, { useState } from "react";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Branding Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-foreground font-bold text-background text-lg">
            C
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">
            Cata
          </span>
        </div>

        {/* Navigation Links & Toggle */}
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer text-lg transition-transform active:scale-95"
            aria-label="Toggle dark mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}