import React from "react";
import SubPageHero from "../../components/SubPageHero";
import { motion } from "framer-motion";

export default function Page() {
  const projects = [
    { loc: "Almanya", code: "AD2000", pressure: "-1/+5,5 BAR", volume: "23,6 m3", material: "S355JR", desc: "ÇİFT ÇİDARLI VAKUM TANKI" },
    { loc: "Türkiye", code: "ASME VIII DIV.1", pressure: "16 BAR", volume: "144 m3", material: "SA-516 GR.70", desc: "AZOT TANKI" },
    { loc: "Paslanmaz Baca", code: "ASME VIII DIV.1", pressure: "-", volume: "-", material: "SA-240 304L", desc: "PASLANMAZ BACA (L:52m)" },
    { loc: "İtalya", code: "ASME VIII DIV.1", pressure: "82,5 BAR", volume: "8 m3", material: "SA-516 GR.70", desc: "FİLTRE SEPERATOR" },
    { loc: "Irak", code: "AD-2000", pressure: "-", volume: "5000 m3", material: "P355GH", desc: "KÜRE DEPOLAMA TANKI" },
    { loc: "İsviçre", code: "EN 13445", pressure: "10 BARG", volume: "34 m3", material: "P355GH", desc: "KARBON FİLTRE TANKI" },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      <SubPageHero 
        title="Projelerimiz" 
        breadcrumb={[{ name: "Projeler" }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {["Akkuyu NGS Depolama Tankları", "İzmir/İzmit Rafinerisi Propan Sistemi", "Otoklav İmalatı", "53 Metrelik Gaz Tahliye Bacası"].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-darker p-8 border-l-2 border-brand group"
              >
                <h4 className="font-bold uppercase group-hover:text-brand transition-colors">{p}</h4>
              </motion.div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-darker">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand">Lokasyon / Proje</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand">Dizayn Kodu</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand">Basınç</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand">Hacim</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand">Malzeme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map((p, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className="font-bold uppercase">{p.desc}</div>
                      <div className="text-xs text-neutral-500 mt-1">{p.loc}</div>
                    </td>
                    <td className="px-6 py-6 text-sm text-neutral-400">{p.code}</td>
                    <td className="px-6 py-6 text-sm text-neutral-400">{p.pressure}</td>
                    <td className="px-6 py-6 text-sm text-neutral-400">{p.volume}</td>
                    <td className="px-6 py-6 text-sm text-neutral-400">{p.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
