import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const rules = [
    { title: "Dürüstlük", desc: "Tüm paydaşlarımız ile yürüttüğümüz iş süreçlerimizde ve ilişkilerimizde dürüstlük prensibini temel alarak doğruluk, iş ahlakı ve samimiyet değerlerini her geçen gün daha değerli kılarak hareket ederiz." },
    { title: "Gizlilik ve Sırların Korunması", desc: "Tüm çalışanlarımız, KBS başta olmak üzere müşterilerimize, tedarikçilerimize ve diğer tüm paydaşlarımıza ait bilgileri korumak için çaba sarf etmelidirler. Ticari sırlar ve mahremiyet gerektiren bilgiler sadece görevleri doğrultusunda kullanılır." },
    { title: "Adalet", desc: "Din, dil, ırk, cinsiyet ve diğer tüm etnik unsurlar dikkate alınmadan müşterilerimize, çalışanlarımıza, tedarikçilerimize ve alt yüklenicilerimize eşit mesafede durur, herkese eşit fırsatları sunarız." },
    { title: "Sorumluluk", desc: "Çevremize, toplumumuza ve gelecek nesillere karşı sorumluluklarımızın bilincinde hareket eder; yasalara ve etik kurallara tam uyum sağlarız." },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Etik Kurallarımız" 
        breadcrumb={[{ name: "Politikalar", href: "/politikalar" }, { name: "Etik Kurallar" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {rules.map((rule, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <div className="md:col-span-1">
                  <div className="text-brand font-display font-bold text-xl uppercase tracking-widest">{rule.title}</div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    {rule.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-2xl font-bold uppercase mb-8">Etik Bildirim Hattı</h3>
          <p className="text-neutral-400 mb-10">
            Etik dışı davranışlar veya kurallarımıza aykırı durumlar için doğrudan bildirim hattımız üzerinden iletişime geçebilirsiniz.
          </p>
          <a href="mailto:etik@kartalbombe.com.tr" className="text-brand font-bold text-xl hover:underline">
            etik@kartalbombe.com.tr
          </a>
        </div>
      </section>
    </div>
  );
}
