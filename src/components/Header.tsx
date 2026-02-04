import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "トップ10", href: "#ranking" },
  { label: "レビュー", href: "#reviews" },
  { 
    label: "カテゴリ", 
    href: "#categories",
    submenu: [
      { label: "ライブカジノ", href: "#live" },
      { label: "スロット", href: "#slots" },
      { label: "テーブルゲーム", href: "#table" },
    ]
  },
  { label: "ボーナス", href: "#bonuses" },
  { label: "決済方法", href: "#payments" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-dark border-b-2 border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl">🎰</span>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gradient-gold font-display">
                カジノガイド
              </span>
              <span className="text-[10px] md:text-xs text-gold-light/70">
                CASINO GUIDE JAPAN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-primary-foreground hover:text-gold hover:bg-gold/10 gap-1"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-gold/30">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.label} asChild>
                        <a 
                          href={subitem.href}
                          className="cursor-pointer hover:text-gold"
                        >
                          {subitem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-primary-foreground hover:text-gold transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                  <input
                    type="text"
                    placeholder="カジノを検索..."
                    className="w-48 md:w-64 px-4 py-2 rounded-lg bg-card/90 border border-gold/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 text-muted-foreground hover:text-gold"
                    onClick={() => setSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-gold hover:bg-gold/10"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:text-gold hover:bg-gold/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-primary-foreground hover:text-gold hover:bg-gold/10 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
