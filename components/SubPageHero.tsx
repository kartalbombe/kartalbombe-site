import React from "react";
import { motion } from "framer-motion";

interface SubPageHeroProps {
  title: string;
  breadcrumb: { name: string; href?: string }[];
}

export default function SubPageHero({ title, breadcrumb }: SubPageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 bg-darker overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex items-center gap-2 mb-6">
            <a href="/" className="text-neutral-500 hover:text-brand transition-colors text-sm font-medium">Ana Sayfa</a>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-neutral-700">/</span>
                {item.href ? (
                  <a href={item.href} className="text-neutral-500 hover:text-brand transition-colors text-sm font-medium">
                    {item.name}
                  </a>
                ) : (
                  <span className="text-brand font-medium text-sm">{item.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight">
            {title}
            <span className="block h-2 w-24 bg-brand mt-6" />
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
