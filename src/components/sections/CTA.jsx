import { motion } from "framer-motion";
import { Flower2, AlertCircle, MessageCircle, Sparkles, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-500 to-rose-500 text-center text-white px-6 relative overflow-hidden">

      {/* Glow decorativo de fondo */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        /* Contenedor centralizado para que no se expanda demasiado en PC */
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 leading-tight">
          Haz que mamá viva un momento inolvidable
          <Flower2 className="w-10 h-10 text-yellow-200 shrink-0" />
        </h2>

        {/* Texto destacado (Badge) */}
        <p className="mt-8 inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-pink-50 font-medium text-sm md:text-base">
          <Clock className="w-4 h-4" />
          Cupos limitados para el día de las madres
          <Sparkles className="w-4 h-4" />
        </p>

        {/* Botón Principal */}
        <motion.a
          href="https://wa.me/593980659712?text=Hola,%20quiero%20reservar%20una%20serenata%20para%20el%20Día%20de%20la%20Madre"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          /* inline-flex y w-full sm:w-auto mejoran la UX en móviles */
          className="mt-10 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-rose-50 transition-all flex inline-flex items-center justify-center gap-3 w-full sm:w-auto"
        >
          <MessageCircle className="w-6 h-6" />
          Reservar por WhatsApp
        </motion.a>

        {/* Urgencia / FOMO (Fear of missing out) */}
        <p className="mt-6 text-sm text-pink-100 flex items-center justify-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 text-yellow-300" />
          Solo quedan pocos cupos disponibles
        </p>

      </motion.div>

    </section>
  );
}