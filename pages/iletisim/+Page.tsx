import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="İletişim" 
        breadcrumb={[{ name: "İletişim" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-12 text-brand">Bizimle İletişime Geçin</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase mb-2">Adres</h5>
                    <p className="text-neutral-400 leading-relaxed">
                      Dilovası O.S.B 4. Kısım Ceyhan Caddesi No.25 <br /> Gebze / KOCAELİ - TÜRKİYE
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase mb-2">Telefon & E-Posta</h5>
                    <p className="text-neutral-400">T: +90 (262) 724 92 92</p>
                    <p className="text-neutral-400">E: info@kartalbombe.com.tr</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-12 h-12 bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase mb-2">Çalışma Saatleri</h5>
                    <p className="text-neutral-400">Pazartesi - Cuma: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-darker p-12 border border-white/5"
            >
              <h3 className="text-2xl font-display font-bold uppercase mb-8">Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-dark border border-white/10 p-4 text-sm focus:border-brand outline-none transition-colors" />
                  <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-dark border border-white/10 p-4 text-sm focus:border-brand outline-none transition-colors" />
                </div>
                <input type="text" placeholder="Konu" className="w-full bg-dark border border-white/10 p-4 text-sm focus:border-brand outline-none transition-colors" />
                <textarea placeholder="Mesajınız" rows={6} className="w-full bg-dark border border-white/10 p-4 text-sm focus:border-brand outline-none transition-colors"></textarea>
                <button className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-5 uppercase tracking-widest transition-all">
                  Mesajı Gönder
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-neutral-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 font-display text-4xl uppercase font-bold tracking-[0.5em] pointer-events-none">
          Harita Görünümü
        </div>
        {/* Placeholder for map */}
        <div className="w-full h-full bg-darker/50" />
      </section>
    </div>
  );
}
