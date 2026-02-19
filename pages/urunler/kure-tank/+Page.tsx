import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const images = [
    "/images/products/kure-tank-mini.webp",
    "/images/products/kure-tank-mini-1.webp",
    "/images/products/kure-tank-mini-2.webp",
    "/images/products/kure-tank1.webp",
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Küre Tank İmalatı" 
        breadcrumb={[{ name: "Ürünlerimiz", href: "/urunler/bombe" }, { name: "Küre Tank" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-8 text-brand">Yüksek Kapasiteli Depolama Çözümleri</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Küre tanklar; petrol, doğalgaz, kimya ve gıda sektörlerinde yaygın olarak kullanılan, benzersiz tasarımlarıyla kusursuz sızdırmazlık ve yüksek dayanıklılık sağlayan depolama çözümleridir.
                </p>
                <p>
                  Propan, bütan, LPG, etilen vb. ürünleri depolamak için kullanılan küre tankları, istenilen hacimlerde AD-2000 Merkblatt, ASME U, ASME U2 direktiflerine göre dizayn edilerek KBS tarafından anahtar teslim şeklinde imal edilmektedir.
                </p>
              </div>
              <div className="mt-12 bg-darker p-8 border-l-4 border-brand">
                <h4 className="font-bold text-white mb-4 uppercase">Dizayn Standartlarımız</h4>
                <ul className="grid grid-cols-2 gap-4 text-sm font-bold tracking-widest uppercase">
                  <li>ASME SECTION VIII</li>
                  <li>AD-2000 MERKBLATT</li>
                  <li>PD-5500</li>
                  <li>EN 13445</li>
                </ul>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="aspect-square bg-darker border border-white/5 overflow-hidden"
                >
                  <img src={img} alt="Küre Tank" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold uppercase mb-16">Neden Küre Tank?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Dayanıklılık", desc: "Küresel yapı, iç basıncı eşit olarak dağıtarak en yüksek dayanımı sağlar." },
              { title: "Verimlilik", desc: "Aynı hacim için diğer tank formlarına göre daha az yüzey alanı ve malzeme gerektirir." },
              { title: "Güvenlik", desc: "Kritik gaz depolama operasyonlarında sızdırmazlık ve yapısal bütünlükte üstün başarı." },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-brand font-display font-bold text-4xl mb-6">0{idx + 1}</div>
                <h4 className="text-xl font-bold uppercase mb-4">{item.title}</h4>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
