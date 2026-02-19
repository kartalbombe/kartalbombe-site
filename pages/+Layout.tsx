import React, { useState, useEffect } from "react";
import "./tailwind.css";
import { usePageContext } from "vike-react/usePageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { 
      name: "Kurumsal", 
      href: "/kurumsal",
      dropdown: [
        { name: "Kurumsal", href: "/kurumsal" },
        { name: "Tarihçe", href: "/kurumsal/tarihce" },
        { name: "Kurucumuz", href: "/kurumsal/kurucumuz" },
        { name: "Ekibimiz", href: "/kurumsal/ekibimiz" },
      ]
    },
    { 
      name: "Ürünlerimiz", 
      href: "/urunler/bombe",
      dropdown: [
        { name: "Bombe", href: "/urunler/bombe" },
        { name: "Küre Tank", href: "/urunler/kure-tank" },
        { name: "Isıl İşlem", href: "/urunler/isil-islem" },
      ]
    },
    { 
      name: "Kalite", 
      href: "/kalite",
      dropdown: [
        { name: "Kalite Kontrol", href: "/kalite" },
        { name: "Sertifikalar", href: "/sertifikalar" },
        { name: "Politikalar", href: "/politikalar" },
      ]
    },
    { name: "Projelerimiz", href: "/projeler" },
    { name: "Kariyer", href: "/kariyer" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src={isScrolled ? "/images/logo.webp" : "/images/logo-white.webp"} 
            alt="KBS Logo" 
            className="h-10 md:h-12 w-auto transition-all"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-brand flex items-center gap-1 ${
                  isScrolled ? "text-white" : "text-white drop-shadow-md"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {link.dropdown && (
                <div className={`absolute left-0 mt-2 w-48 bg-darker border border-white/10 py-2 transition-all duration-300 ${
                  activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-brand hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="/iletisim" 
            className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2"
          >
            Teklif Alın
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-darker border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-lg font-bold uppercase tracking-wider block"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-brand/30 pl-4">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-brand"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-darker text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src="/images/logo-white.webp" alt="KBS Logo" className="h-12 mb-6" />
            <p className="text-neutral-400 text-sm leading-relaxed">
              1945'ten beri Türk sanayisinin ihtiyacı olan şekillendirilmiş parçaları, yarım asrı aşkın bilgi ve tecrübe ile üretiyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 text-neutral-400 text-sm font-bold uppercase tracking-widest">
              <li><a href="/kurumsal" className="hover:text-brand transition-colors">Kurumsal</a></li>
              <li><a href="/urunler/bombe" className="hover:text-brand transition-colors">Ürünlerimiz</a></li>
              <li><a href="/projeler" className="hover:text-brand transition-colors">Projelerimiz</a></li>
              <li><a href="/kariyer" className="hover:text-brand transition-colors">Kariyer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">Yasal</h4>
            <ul className="space-y-3 text-neutral-400 text-sm font-bold uppercase tracking-widest">
              <li><a href="/politikalar/kvkk" className="hover:text-brand transition-colors">KVKK</a></li>
              <li><a href="/politikalar" className="hover:text-brand transition-colors">Politikalarımız</a></li>
              <li><a href="/politikalar/etik" className="hover:text-brand transition-colors">Etik Kurallar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">İletişim</h4>
            <address className="not-italic text-neutral-400 text-sm space-y-3">
              <p>Dilovası OSB 4.Kısım Ceyhan Cad. No:25 Gebze/Kocaeli</p>
              <p>T: +90 (262) 724 92 92</p>
              <p>E: info@kartalbombe.com.tr</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs">
          <p>© 2026 Kartal Bombe & Basınçlı Kaplar Sanayi ve Ticaret A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
