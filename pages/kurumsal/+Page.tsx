import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const values = [
    { title: "Liderlik", desc: "Var olduğumuz tüm sektörlerde öncü ve lider firma olmak için durmadan üreteceğiz." },
    { title: "Kalite ve Performans", desc: "Ürün ve hizmetlerimizi; uluslararası belirlenen standartlar da müşterilerimize sunmak ve takip ettiğimiz parametreler ile performansımızı artırmak için çalışacağız." },
    { title: "Gelişim, Değişim", desc: "Sektörümüzdeki ve teknolojideki gelişmeleri / yenilikleri takip ederek yeteneklerimizi geliştirecek, firmalarımızın güncel kalmasını sağlayacağız." },
    { title: "İnsan", desc: "Şirket içi ve şirket dışı tüm paydaşlarımıza değer verecek, karşılıklı güveni esas alacak ve etik kurallarımızdan ödün vermeyeceğiz." },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Kurumsal" 
        breadcrumb={[{ name: "Kurumsal" }]} 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-8 text-brand">Hakkımızda</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Kartal Bombe Sanayi (KBS), 1940 yılında merhum Mehmet KARTAL’ ın Karaköy Kalafat meydanında bakıma gelen gemilerin bakım & onarım işlemlerini gerçekleştirmesi ile sektördeki yolculuğuna başlamıştır.
                </p>
                <p>
                  Bu tamirat işlemleri sırasında ortaya çıkan metallerin şekillendirilmesi ihtiyacı üzerine bugünkü uzmanlık alanlarından olan bombe ve bombeli ürünler imalatında yoğunlaşarak sektördeki yolculuğuna yön vermiştir.
                </p>
                <p>
                  Zaman içerisinde yatırımlarına hız kesmeden devam KBS, farklı sektörlere yaptığı yatırımlar ile Kartal Grup’ u kurmuş ve bugün bu grup bünyesinde faaliyetlerine devam etmektedir.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img src="/images/slider/1.webp" alt="KBS Fabrika" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-6 -right-6 bg-brand p-10 hidden md:block">
                <span className="text-6xl font-display font-bold">80+</span>
                <span className="block text-sm font-bold uppercase tracking-widest mt-2">Yıllık Deneyim</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark p-10 border-l-4 border-brand"
            >
              <h3 className="text-2xl font-display font-bold uppercase mb-4">Misyon</h3>
              <p className="text-neutral-400 leading-relaxed">
                Yarım asrı aşkın süredir edindiğimiz bilgi ve tecrübe ile başta Türk sanayisinin ihtiyacı olan şekillendirilmiş parçaları üretiyoruz.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark p-10 border-l-4 border-brand"
            >
              <h3 className="text-2xl font-display font-bold uppercase mb-4">Vizyon</h3>
              <p className="text-neutral-400 leading-relaxed">
                Daima üreten, yatırımları ile büyüyen ve Türkiye’ye değer katan küresel bir aktör olmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-dark p-10 border-l-4 border-brand"
            >
              <h3 className="text-2xl font-display font-bold uppercase mb-4">Hedefimiz</h3>
              <p className="text-neutral-400 leading-relaxed">
                Sahip olduğumuz saygınlıktan ödün vermeden faaliyet gösterdiğimiz her alanda global oyuncu olmak ve Türk sanayisinin gelişimine öncü firma olarak katkıda bulunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-16 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="mb-6 text-brand font-display font-bold text-5xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                <h4 className="text-xl font-bold uppercase mb-4">{v.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
