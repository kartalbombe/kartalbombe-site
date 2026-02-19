import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const team = [
    { name: "Hakan UĞUZ", role: "Lojistik Müdürü" },
    { name: "Setenay ÜNLÜ", role: "Satış Yöneticisi (Bombe & Isıl İşlem)" },
    { name: "Kazım İNCE", role: "Satış Yöneticisi (Basınçlı Ekipmanlar)" },
    { name: "Mert TEMEL", role: "Satış & Pazarlama Uzmanı" },
    { name: "Fırat TURAN", role: "Satış Temsilcisi" },
    { name: "Berkan ÜRÜN", role: "Satış Temsilcisi (Profil & Silindir Büküm)" },
    { name: "Emre ARKUN", role: "Satış Temsilcisi (Bombe İmalatı)" },
    { name: "Davut ÇAKAL", role: "İmalat Yöneticisi" },
    { name: "Mithat YORULMAZ", role: "İmalat Yöneticisi (Genleşme & Hava Tankları)" },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Ekibimiz" 
        breadcrumb={[{ name: "Kurumsal", href: "/kurumsal" }, { name: "Ekibimiz" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-darker border border-white/5 p-8 group hover:border-brand/50 transition-colors"
              >
                <div className="w-16 h-1 bg-brand mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-xl font-bold uppercase mb-2">{member.name}</h3>
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
