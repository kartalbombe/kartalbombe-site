import React, { useState, useEffect } from "react";
import "./tailwind.css";
import { usePageContext } from "vike-react/usePageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
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
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/#kurumsal" },
    { name: "Ürünler", href: "/#urunler" },
    { name: "Hizmetler", href: "/#hizmetler" },
    { name: "İletişim", href: "/#iletisim" },
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
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-brand ${
                isScrolled ? "text-white" : "text-white drop-shadow-md"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#iletisim" 
            className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Teklif Alın
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
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
            className="md:hidden bg-darker border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-medium uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
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
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">Ürünler</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Eliptik Bombe</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Torisferik Bombe</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Konik Bombe</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Küre Tank</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">Kurumsal</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Tarihçe</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Sertifikalar</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Kariyer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest mb-6">İletişim</h4>
            <address className="not-italic text-neutral-400 text-sm space-y-3">
              <p>Marmara Geri Dönüşümcüler San. Sit. Şekerpınar Mah. Ayçiçek Sk. No: 1 Çayırova / Kocaeli</p>
              <p>T: +90 (262) 724 92 92</p>
              <p>E: info@kartalbombe.com.tr</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs">
          <p>© 2026 Kartal Bombe & Basınçlı Kaplar Sanayi ve Ticaret A.Ş. Tüm hakları saklıdır.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Yasal Uyarı</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
