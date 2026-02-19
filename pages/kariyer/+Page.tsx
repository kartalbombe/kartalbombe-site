import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Kariyer" 
        breadcrumb={[{ name: "Kariyer" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-8 text-brand">İşe Alım Süreci</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  İşe uygun çalışan için KBS, işe alım sürecini titizlikle yürütmektedir. Aranan yetkinlik ve özelliklere sahip adaylar KBS ailesinin bir parçası olarak işe başlar.
                </p>
                <p>
                  Üniversite sanayi iş birliği ve meslek liseleri ile yapılan ortak anlaşmalar neticesinde okullardan yeni mezun adaylar firmamızda iş fırsatı bulabilmektedir.
                </p>
              </div>
              <div className="mt-12 bg-darker p-10 border border-white/5">
                <h4 className="font-bold uppercase mb-4">Açık Pozisyonlar</h4>
                <p className="text-sm text-neutral-500 mb-8">Güncel açık iş pozisyonlarımızı Kariyer.net veya LinkedIn sayfalarımız üzerinden takip edebilirsiniz.</p>
                <a href="#" className="inline-block bg-brand hover:bg-brand-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-all">
                  İş İlanlarını İnceleyin
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold uppercase mb-8 text-brand">Staj İmkânları</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  KBS, başta çalışanlarının yakınları olmak üzere, meslek liseleri ve üniversitelerle yaptığı anlaşmalar ile mezun adaylarına kişisel gelişimlerine ve Türk sanayisine katkı sağlamak amacı ile staj imkânı sunmaktadır.
                </p>
                <p>
                  Staj adaylarından okul puanları ve referans bilgileri talep edilerek ön değerlendirme yapılır ve KBS’nin ihtiyaçları doğrultusunda süreç devam ettirilir.
                </p>
              </div>
              <div className="mt-12 bg-darker p-10 border border-white/5">
                <h4 className="font-bold uppercase mb-4">Staj Başvurusu</h4>
                <p className="text-sm text-neutral-500 mb-8">Staj başvurularınızı web sitemiz üzerinden form doldurarak veya doğrudan insan kaynakları bölümümüze yapabilirsiniz.</p>
                <a href="/iletisim" className="inline-block border-2 border-brand hover:bg-brand text-white px-8 py-4 font-bold uppercase tracking-widest transition-all">
                  Başvuru Formuna Git
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darker text-center border-y border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-display font-bold uppercase mb-8">En Büyük Sermayemiz İnsan</h2>
          <p className="text-neutral-400 leading-relaxed italic">
            "Kartal Bombe ailesi olarak, başarımızın arkasındaki en büyük gücün çalışanlarımızın bilgi, beceri ve özverisi olduğuna inanıyoruz."
          </p>
        </div>
      </section>
    </div>
  );
}
