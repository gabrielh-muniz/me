import { Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_DATA } from "@/lib/data";

export default function CallToAction() {
  return (
    <section id="cta" className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-muted/30 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-muted/30 rounded-full blur-3xl -z-10" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Vamos trabalhar juntos!
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tem um projeto em mente ou quer discutir oportunidades? Adoraria
              ouvir você. Vamos criar algo incrível juntos!
            </motion.p>

            <motion.a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em contato
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
