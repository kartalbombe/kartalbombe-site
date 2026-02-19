import React from "react";
import SubPageHero from "../../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="KVKK Politikası" 
        breadcrumb={[{ name: "Politikalar", href: "/politikalar" }, { name: "KVKK" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-darker p-12 border border-white/5 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold uppercase mb-8 text-brand">Kişisel Verilerin Korunması ve İşlenmesi</h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                Kartal Bombe & Basınçlı Kaplar Sanayi ve Ticaret A.Ş. (“Şirket”) olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dâhil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”)’na uygun olarak işlenmesine ve muhafaza edilmesine büyük önem vermekteyiz.
              </p>
              <h3 className="text-lg font-bold text-white uppercase mt-12 mb-4">1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h3>
              <p>
                Kişisel verileriniz, Şirketimiz tarafından sağlanan hizmet ve Şirketimizin ticari faaliyetlerine bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, Şirketimiz birimleri ve ofisleri, topluluk şirketleri, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.
              </p>
              <p>
                Şirketimizin hizmetlerinden faydalanmaya devam ettiğiniz müddetçe oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir.
              </p>
              <h3 className="text-lg font-bold text-white uppercase mt-12 mb-4">2. Veri Sahibi Olarak Haklarınız</h3>
              <p>
                KVK Kanunu uyarınca kişisel veri sahipleri, kendileriyle ilgili verilerin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir.
              </p>
              <div className="mt-12 p-8 bg-dark border-l-2 border-brand text-sm italic">
                Daha fazla bilgi için <a href="mailto:kvkk@kartalbombe.com.tr" className="text-brand hover:underline">kvkk@kartalbombe.com.tr</a> adresi üzerinden bizimle iletişime geçebilirsiniz.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
