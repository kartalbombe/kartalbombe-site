import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Page() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}

function Hero() {
  const slides = [
    { img: "/images/slider/1.webp", bigText: "60K", unit: "ton", subtitle: "yıllık kapasite" },
    { img: "/images/slider/2.webp", bigText: "80+", unit: "yıl", subtitle: "sektör deneyimi" },
    { img: "/images/slider/3.webp", bigText: "50+", unit: "ülke", subtitle: "ihracat ağı" },
    { img: "/images/slider/1-1.webp", bigText: "4.", unit: "nesil", subtitle: "aile şirketi" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden bg-black">
      {/* Background images */}
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: idx === current ? 1 : 0,
            scale: idx === current ? 1 : 1.05,
            transition: { duration: 1.5, ease: "easeInOut" }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
          <img src={slide.img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Big background number */}
      <div className="absolute inset-0 z-10 flex items-center justify-end pr-[5%] md:pr-[10%] pointer-events-none">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline"
        >
          <span className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-display font-black text-white leading-none tracking-tighter">
            {slides[current].bigText}
          </span>
          <span className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white/60 ml-4 self-center">
            {slides[current].unit}
          </span>
        </motion.div>
      </div>

      {/* Arrow navigation */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-30 flex items-center gap-4">
        <div className="w-24 md:w-40 h-[2px] bg-white/30" />
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="text-white hover:text-brand transition-colors"
        >
          <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex-1 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[3px] bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.3em] text-sm">Since 1945</span>
            </div>

            <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-display font-bold text-white uppercase leading-[0.85] tracking-tight mb-8">
              Metal<br />
              Shaping<br />
              <span className="text-brand">Experts</span>
            </h1>

            <div className="flex items-start gap-4 mb-10 max-w-lg">
              <div className="w-[3px] bg-brand shrink-0 self-stretch" />
              <p className="text-lg text-neutral-300 leading-relaxed">
                Türkiye'nin lider bombe ve basınçlı kap üreticisi. <strong className="text-white">60.000 ton</strong> yıllık işleme kapasitesi ile sanayinin gücüne güç katıyoruz.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#urunler" className="group bg-brand hover:bg-brand-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-all inline-flex items-center gap-3">
                Üretim Hattı
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#iletisim" className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all inline-flex items-center gap-3">
                Teklif Alın
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            {[
              { value: "1945", label: "KURULUŞ" },
              { value: "60K+", label: "TON/YIL KAPASİTE" },
              { value: "ISO", label: "9001:2015" },
              { value: "50+", label: "ÜLKEYE İHRACAT" },
              { value: "ASME", label: "SERTİFİKALI" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-display font-black text-white">{stat.value}</span>
                <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-6 md:left-12 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-500 ${idx === current ? "w-16 bg-brand" : "w-4 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return null;
}

function AboutSection() {
  return (
    <section id="kurumsal" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/slider/3.webp" 
              alt="Fabrika Üretim" 
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand p-8 text-white hidden md:block">
              <div className="text-4xl font-bold font-display">1945</div>
              <div className="text-sm font-bold uppercase tracking-widest">Kuruluş Yılımız</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand font-bold uppercase tracking-[0.2em] mb-4">Biz Kimiz?</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-8 uppercase leading-tight">
              Türkiye'nin İlk, Dünyanın <br /> Sayılı Bombe Üreticisi
            </h2>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                Kartal Bombe & Basınçlı Kaplar Sanayi ve Ticaret A.Ş. (KBS), 1945 yılında Mehmet KARTAL tarafından Karaköy Kalafat meydanında kurulmuştur. Bugün 4. nesil aile şirketi olarak Kartal Grup bünyesinde faaliyetlerini sürdürmektedir.
              </p>
              <p>
                Yıllık 60.000 ton metal işleme kapasitemiz ve modern üretim tesislerimiz ile Avrupa, Asya, Ortadoğu ve Avustralya'ya ihracat yapmaktayız. Misyonumuz, yarım asrı aşkın bilgi ve tecrübe ile Türk sanayisinin ihtiyacı olan yüksek kaliteli şekillendirilmiş parçaları üretmektir.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-dark">Kalite Odaklı</h5>
                  <p className="text-sm text-neutral-500">ASME ve ISO standartlarında üretim.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-dark">Hızlı Teslimat</h5>
                  <p className="text-sm text-neutral-500">Geniş lojistik ağı ve stok yönetimi.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    { name: "Eliptik Bombe", img: "/images/products/eliptik-bombe-mini.webp", desc: "DIN 28013 standartlarına uygun yüksek basınçlı kaplar için." },
    { name: "Torisferik Bombe", img: "/images/products/asme-torisferik-bombe-mini.webp", desc: "ASME ve DIN standartlarında geniş kullanım alanı." },
    { name: "Konik Bombe", img: "/images/products/konik-bombe-mini.webp", desc: "Farklı açılarda ve et kalınlıklarında hassas imalat." },
    { name: "Düz Bombe", img: "/images/products/duz-bombe-mini.webp", desc: "Düşük basınçlı tanklar ve özel uygulamalar için." },
    { name: "Yarım Küre Bombe", img: "/images/products/yarim-kure-bombe-mini.webp", desc: "Yüksek mukavemet gerektiren küresel tasarımlar." },
    { name: "Yakalı Bombe", img: "/images/products/yakali-bombe-mini.webp", desc: "Borulama ve bağlantı noktaları için ideal çözüm." },
  ];

  return (
    <section id="urunler" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-brand font-bold uppercase tracking-[0.2em] mb-4">Üretim Yelpazemiz</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark uppercase mb-6">Bombeler ve Özel Parçalar</h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Farklı geometrilerde ve çaplarda, çeşitli malzeme türleri (karbon çelik, paslanmaz, alaşımlı) kullanılarak üretilen bombe çeşitlerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border border-neutral-200 group overflow-hidden"
            >
              <div className="h-64 overflow-hidden bg-neutral-100 relative">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-dark mb-3 uppercase tracking-tight">{p.name}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <a href="#" className="inline-flex items-center text-brand font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                  Detayları Gör <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { name: "Küre Tank İmalatı", img: "/images/products/kure-tank1.webp", desc: "LPG, LNG ve endüstriyel gaz depolama sistemleri için yüksek hacimli küre tank tasarımı ve yerinde montajı." },
    { name: "Isıl İşlem Hizmeti", img: "/images/products/isil-islem-mini.webp", desc: "Gerilim giderme ve normalizasyon işlemleri için son teknoloji fırınlarımızla profesyonel ısıl işlem çözümleri." },
    { name: "Basınçlı Kaplar", img: "/images/products/basincli-kap.webp", desc: "Özel tasarım basınçlı kaplar, hava tankları ve seperatörlerin sertifikalı üretimi." },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-brand font-bold uppercase tracking-[0.2em] mb-4">Endüstriyel Çözümler</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">Mühendislik ve <br /> İmalat Hizmetleri</h2>
          </div>
          <div className="pb-2">
            <p className="text-neutral-400 max-w-sm">
              Sadece parça değil, anahtar teslim endüstriyel çözümler ve mühendislik desteği sunuyoruz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video mb-8 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase mb-4 text-white group-hover:text-brand transition-colors">{s.name}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="w-12 h-1 bg-brand group-hover:w-24 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  const certs = ["ASME", "ISO 9001", "PED 2014/68/EU", "AD-2000 MERKBLATT", "DIN/EN"];
  
  return (
    <section className="py-20 bg-neutral-100 border-y border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {certs.map((cert) => (
            <div key={cert} className="text-2xl md:text-3xl font-display font-bold text-darker tracking-tighter">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="iletisim" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-brand font-bold uppercase tracking-[0.2em] mb-4">Bize Ulaşın</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark uppercase mb-12">İletişime Geçin</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-brand shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-dark uppercase mb-2">Adres</h5>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Marmara Geri Dönüşümcüler San. Sit. Şekerpınar Mah. <br /> Ayçiçek Sk. No: 1 Çayırova / Kocaeli / TÜRKİYE
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-brand shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-dark uppercase mb-2">Telefon & Fax</h5>
                  <p className="text-neutral-500 text-sm">T: +90 (262) 724 92 92</p>
                  <p className="text-neutral-500 text-sm">F: +90 (262) 724 82 21</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-brand shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h5 className="font-bold text-dark uppercase mb-2">E-Posta</h5>
                  <p className="text-neutral-500 text-sm">info@kartalbombe.com.tr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-2xl border border-neutral-100">
            <h3 className="text-2xl font-bold text-dark mb-8 uppercase">Teklif İste</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-neutral-50 border-0 p-4 text-sm focus:ring-2 focus:ring-brand outline-none" />
                <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-neutral-50 border-0 p-4 text-sm focus:ring-2 focus:ring-brand outline-none" />
              </div>
              <input type="text" placeholder="Konu" className="w-full bg-neutral-50 border-0 p-4 text-sm focus:ring-2 focus:ring-brand outline-none" />
              <textarea placeholder="Mesajınız" rows={5} className="w-full bg-neutral-50 border-0 p-4 text-sm focus:ring-2 focus:ring-brand outline-none"></textarea>
              <button className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 uppercase tracking-widest transition-all shadow-lg shadow-brand/20">
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
