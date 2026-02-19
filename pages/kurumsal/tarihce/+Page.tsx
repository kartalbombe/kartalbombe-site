import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const events = [
    { year: "1945", title: "KBS’nin İlk Temelleri Atıldı!", desc: "Merhum Mehmet KARTAL tarafından, İstanbul’un Karaköy ilçesinde Kalafat adı verilen bölgede gemi onarım işlemleri yapılarak KBS’nin ilk temelleri atıldı." },
    { year: "1962", title: "Kartal Pres", desc: "Kalafat bölgesinden İstanbul Topkapı’da bulunan Gümüşsuyu Caddesine, Kartal Pres unvanı ile taşınma işlemi gerçekleşti." },
    { year: "1976", title: "İlk Mekanik Makine Üretimi", desc: "Makineleşme yıllarının başlangıcı bu seneden itibaren gerçekleşti. Firmamız imkanları ile yapılan ilk mekanik makinemiz bu yıl içerisinde imal edildi." },
    { year: "1980", title: "Mehmet Ali KARTAL Görevde", desc: "Makineleşme süreci hidrolik makineler ile devam etti. Mehmet Ali KARTAL firmada aktif görev almaya başladı." },
    { year: "2015", title: "Dilovası Modern Tesis", desc: "Üretim kapasitesini artırmak amacıyla Dilovası OSB'deki 20.000 m² kapalı alana sahip modern tesislerimize taşındık." },
    { year: "Bugün", title: "4. Nesil Yönetim", desc: "Yıllık 60.000 ton kapasite ile dünyanın sayılı bombe üreticilerinden biri olarak 50'den fazla ülkeye ihracat yapıyoruz." },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Tarihçemiz" 
        breadcrumb={[{ name: "Kurumsal", href: "/kurumsal" }, { name: "Tarihçe" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-dark z-10 hidden md:block" />
                  
                  <div className="w-full md:w-1/2 px-12 text-center md:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                      <span className="text-4xl font-display font-bold text-brand mb-2">{event.year}</span>
                      <h3 className="text-2xl font-bold uppercase mb-4 text-white">{event.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
