import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const methods = [
    { title: "Küreselleştirme Tavı", desc: "Genellikle yüksek karbonlu çeliklere süneklik kazandırmak amacıyla Ac1 hattı bölgesinde uygulanan yöntemdir." },
    { title: "Gerilim Giderme Tavı", desc: "Soğuk şekillendirme ve kaynak sonrası oluşan gerilimleri ortadan kaldırmak için 500-680°C arasında yapılan işlemdir." },
    { title: "Yeniden Kristalleştirme", desc: "Plastik şekil değiştirme sonrası oluşan sertleşmeleri gidermek amacıyla tane yapısının yenilenmesi işlemidir." },
    { title: "Normalizasyon Tavı", desc: "Daha ince ve homojen bir tane yapısı elde ederek mekanik özellikleri iyileştirmek için uygulanır." },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Isıl İşlem Hizmeti" 
        breadcrumb={[{ name: "Ürünlerimiz", href: "/urunler/bombe" }, { name: "Isıl İşlem" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-8 text-brand">Ülkemizin En Büyük Isıl İşlem Kapasitesi</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Firmamız, ülkemizin en büyük ısıl işlem fırınları kapasitesine sahip tesislerinden biri olup, uluslararası standartlar ve müşteri talepleri doğrultusunda hizmet vermektedir.
                </p>
                <p>
                  Sahip olduğumuz ısıl işlem fırınlarımızın dahili ve harici termokuplları Türkak tarafından akredite kurumlarca periyodik olarak kalibre edilmektedir.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-darker p-6 border-l-2 border-brand">
                  <span className="block text-brand font-display text-2xl font-bold">17.000mm</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Maksimum Uzunluk</span>
                </div>
                <div className="bg-darker p-6 border-l-2 border-brand">
                  <span className="block text-brand font-display text-2xl font-bold">100 Ton</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Yükleme Kapasitesi</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-neutral-900"
            >
              <img src="/images/products/isil-islem-mini.webp" alt="Isıl İşlem Fırını" className="w-full h-full object-cover grayscale opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand/90 p-10 text-center">
                  <div className="text-4xl font-display font-bold">7m x 7m x 17m</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-2">Fırın Ölçüleri</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold uppercase mb-16 text-center">Isıl İşlem Yöntemlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark border border-white/5 p-10 hover:border-brand/30 transition-all group"
              >
                <h4 className="text-xl font-bold uppercase mb-4 group-hover:text-brand transition-colors">{m.title}</h4>
                <p className="text-neutral-500 leading-relaxed text-sm">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
