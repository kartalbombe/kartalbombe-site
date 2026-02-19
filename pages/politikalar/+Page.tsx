import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const policies = [
    {
      title: "Kalite Politikamız",
      items: [
        "Uluslararası standartların kabul ettiği ürün ve hizmet için etkin iş birliği yapmak.",
        "Kalite performansımızı ölçümleyerek süreçlerimizi sürekli iyileştirmek.",
        "Müşteri memnuniyetini en üst düzeyde tutmak.",
        "Toplam kalite yönetimi anlayışı ile kurumsal performansı geliştirmek."
      ]
    },
    {
      title: "İSG Politikası",
      items: [
        "Proaktif yaklaşım ile tehlike ve risklere karşı önlem almak.",
        "Çalışanların sorumluluk bilincini eğitimler ile geliştirmek.",
        "Yasal mevzuat ve gerekliliklere tam uyum sağlamak.",
        "Sağlıklı ve güvenli bir iş ortamı yaratmak."
      ]
    },
    {
      title: "Müşteri Memnuniyet Politikası",
      items: [
        "Müşteri şikayetlerini şeffaf ve hızlı bir şekilde çözüme kavuşturmak.",
        "Müşteri beklentilerini aşan çözümler üretmek.",
        "Güven odaklı uzun vadeli ilişkiler kurmak."
      ]
    },
    {
      title: "Çevre Politikası",
      items: [
        "Atık yönetimi ve enerji verimliliği ile çevresel etkiyi minimize etmek.",
        "Sürdürülebilir üretim tekniklerini benimsemek.",
        "Gelecek nesillere daha yaşanabilir bir dünya bırakmak için çalışmak."
      ]
    }
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Politikalarımız" 
        breadcrumb={[{ name: "Politikalar" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-darker p-10 border-l-4 border-brand"
              >
                <h3 className="text-2xl font-display font-bold uppercase mb-8">{policy.title}</h3>
                <ul className="space-y-4">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-neutral-400 text-sm leading-relaxed">
                      <div className="w-2 h-2 bg-brand rounded-full shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
