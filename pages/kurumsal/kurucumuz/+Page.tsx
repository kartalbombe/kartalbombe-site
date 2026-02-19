import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Kurucumuz" 
        breadcrumb={[{ name: "Kurumsal", href: "/kurumsal" }, { name: "Kurucumuz" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-darker p-4 border border-white/5"
            >
              <div className="aspect-[3/4] bg-neutral-900 flex items-center justify-center text-neutral-800 text-9xl font-display font-bold">
                MK
              </div>
              <div className="mt-8 text-center">
                <h2 className="text-3xl font-display font-bold uppercase">Mehmet KARTAL</h2>
                <p className="text-brand font-bold mt-2">1926 - 1983</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-8">Sanayi Aşığı Bir Lider</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg italic">
                <p>
                  "1940’lı yıllarda Topkapı Perşembe Pazarında iş hayatına başlayan, edindiği bilgi ve tecrübe ile 'KARTAL PRES' firmasını kurarak bugün gelinen noktaya ışık tutan, sanayi aşığı kurucumuz merhum Mehmet KARTAL’ı saygı ve özlemle anıyoruz."
                </p>
              </div>
              <div className="mt-12 space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Mehmet KARTAL, vizyonu ve çalışma azmiyle Türk sanayisinin gelişimine büyük katkılar sağlamıştır. Sıfırdan kurduğu atölyesini, modern bir sanayi tesisinin temellerine dönüştüren Kartal, dürüstlük ve kalite prensiplerinden asla ödün vermemiştir.
                </p>
                <p>
                  Onun bıraktığı miras, bugün 4. nesil tarafından aynı heyecan ve kararlılıkla, küresel ölçekte bir başarı hikayesine dönüştürülmeye devam etmektedir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
