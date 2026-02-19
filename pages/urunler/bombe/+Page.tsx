import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const bombeTypes = [
    { name: "Az Derin Bombe", img: "/images/products/asme-torisferik-bombe-mini.webp" },
    { name: "Torisferik Bombe (DIN 28011)", img: "/images/products/asme-torisferik-bombe-mini.webp" },
    { name: "Eliptik Bombe (DIN 28013)", img: "/images/products/eliptik-bombe-mini.webp" },
    { name: "ASME 2:1 Eliptik Bombe", img: "/images/products/eliptik-bombe-mini.webp" },
    { name: "Düz Bombe", img: "/images/products/duz-bombe-mini.webp" },
    { name: "Kenarsız Bombe", img: "/images/products/kenarsiz-bombe-mini.webp" },
    { name: "Yakalı Bombe", img: "/images/products/yakali-bombe-mini.webp" },
    { name: "Ters Bombe", img: "/images/products/ters-bombe-mini.webp" },
    { name: "Konik Bombe", img: "/images/products/konik-bombe-mini.webp" },
    { name: "Kompansatör Bombe", img: "/images/products/kompansator-bombe-mini.webp" },
    { name: "Yarım Küre Bombe", img: "/images/products/yarim-kure-bombe-mini.webp" },
    { name: "Çok Parçalı Bombe", img: "/images/products/kure-tank-mini.webp" },
    { name: "ASME Torisferik Bombe", img: "/images/products/asme-torisferik-bombe-mini.webp" },
    { name: "Standart Bombe (DIN 6608)", img: "/images/products/duz-bombe-mini.webp" },
    { name: "Derin Çekme Torisferik/Eliptik", img: "/images/products/eliptik-bombe-mini.webp" },
    { name: "Genleşme Tankı Bombesi", img: "/images/products/basincli-kap.webp" },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Bombe Çeşitleri" 
        breadcrumb={[{ name: "Ürünlerimiz", href: "/urunler/bombe" }, { name: "Bombe" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bombeTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-darker border border-white/5 group hover:border-brand/30 transition-all"
              >
                <div className="aspect-square p-8 bg-neutral-900/50 overflow-hidden">
                  <img 
                    src={type.img} 
                    alt={type.name} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-center group-hover:text-brand transition-colors">
                    {type.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold uppercase mb-8">Özel İmalat Çözümleri</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Standart dışı ölçü ve malzemelerde bombe ihtiyaçlarınız için uzman mühendislik ekibimizle hizmetinizdeyiz. Karbon çelik, paslanmaz çelik ve özel alaşımlı metallerde hassas şekillendirme yapıyoruz.
          </p>
          <a href="/iletisim" className="inline-block bg-brand hover:bg-brand-hover text-white px-10 py-4 font-bold uppercase tracking-widest transition-all">
            Teklif Alın
          </a>
        </div>
      </section>
    </div>
  );
}
