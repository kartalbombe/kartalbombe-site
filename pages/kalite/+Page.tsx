import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const ndt = ["Gözle Muayene", "Manyetik Parçacık Testi", "Penentrant Testi", "Ultrasonik Muayene", "Radyografik Muayene", "PMI Testi"];
  const dt = ["Eğme Testi", "Çekme Testi", "Çentik Darbe Testi", "Sertlik Ölçümü", "Makro / Mikro Muayene"];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Kalite Kontrol" 
        breadcrumb={[{ name: "Kalite", href: "/kalite" }, { name: "Kalite Kontrol" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-8 text-brand">Sıfır Hata Prensibi</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Kartal Bombe ve Basınçlı Kaplar A.Ş. olarak, ürettiğimiz tüm ürünleri KBS kiosk ve el terminalleri aracılığıyla her bir sipariş için kontrol etmekteyiz. Malzeme giriş kabulünden başlayarak sevk aşamasına kadar tüm izlenebilirlik ERP programımız ile takip edilmektedir.
                </p>
                <p>
                  Kalite kontrol aşamasında kullanılan tüm ekipman ve teçhizatlar, akredite kurumlar tarafından kalibrasyonlu cihazlar olmakla birlikte, periyodik olarak takibi yapılmaktadır.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-darker p-8 border-t-2 border-brand">
                <h4 className="font-bold uppercase mb-4 text-white">İzlenebilirlik</h4>
                <p className="text-sm text-neutral-500">ERP sistemimiz ile ham maddeden son ürüne tam takip.</p>
              </div>
              <div className="bg-darker p-8 border-t-2 border-brand">
                <h4 className="font-bold uppercase mb-4 text-white">Akreditasyon</h4>
                <p className="text-sm text-neutral-500">Kalibre edilmiş cihazlar ve sertifikalı uzman personel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold uppercase mb-16 text-center">Muayene ve Test Yöntemleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark p-10"
            >
              <h3 className="text-xl font-bold uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-brand flex items-center justify-center text-sm italic">NDT</span>
                Tahribatsız Testler
              </h3>
              <ul className="space-y-4">
                {ndt.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark p-10"
            >
              <h3 className="text-xl font-bold uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-brand flex items-center justify-center text-sm italic">DT</span>
                Tahribatlı Testler
              </h3>
              <ul className="space-y-4">
                {dt.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
