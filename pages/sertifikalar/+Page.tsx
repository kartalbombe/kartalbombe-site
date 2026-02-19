import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const certs = [
    "ISO 9001", "ISO 14001", "ISO 45001", 
    "ASME U", "ASME U2", "ASME S", "ASME NB", 
    "AD-2000 W0", "AD-2000 HP0", 
    "GOST-R", "ISO 3834-2", 
    "PED 2014/68/EU", "ADR/RID", "EN 1090-2"
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Sertifikalarımız" 
        breadcrumb={[{ name: "Sertifikalar" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6 text-brand">Uluslararası Kalite Standartları</h2>
            <p className="text-neutral-400 leading-relaxed">
              Üretim süreçlerimizin her aşamasında en yüksek kalite standartlarını gözetiyoruz. Dünyaca kabul görmüş sertifikalarımız, global pazardaki güvenilirliğimizin en önemli göstergesidir.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-darker border border-white/5 p-8 flex items-center justify-center text-center group hover:bg-brand/10 hover:border-brand/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto border-2 border-brand/30 flex items-center justify-center text-brand font-bold group-hover:bg-brand group-hover:text-white transition-all">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tighter">{cert}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="/images/products/katalog.webp" alt="Katalog" className="rounded-sm shadow-2xl opacity-80" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-display font-bold uppercase mb-8">Ürün Katalogumuz</h3>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Detaylı teknik veriler, ölçü tabloları ve üretim standartlarımızı içeren güncel ürün katalogumuzu inceleyebilirsiniz.
            </p>
            <a href="#" className="inline-flex items-center gap-4 bg-white text-dark px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
              Katalogu İndir (PDF)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
