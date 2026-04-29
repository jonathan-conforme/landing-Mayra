import { motion } from "framer-motion";
import { Mic, Flower2, Smartphone, Video, Calendar, AlertTriangle } from "lucide-react";
import Cantante from "@/assets/Cantante.jpeg"


export default function Hero() {
  return (
    <section id="inicio"className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-zinc-950">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={Cantante}
          alt="Serenata"
          /* CONTROLES DE LA IMAGEN:
            - w-full h-full: Ocupa todo el contenedor.
            - object-cover: Llena el contenedor recortando los bordes si es necesario. 
              (Cámbialo a 'object-contain' si prefieres que se vea la imagen completa sin recortes, aunque dejará bordes vacíos).
            - object-top: Enfoca la parte superior de la imagen (ideal para retratos). 
              (Puedes probar 'object-center' u 'object-bottom' según el encuadre de la foto).
          */
          className="w-full h-full object-cover object-top opacity-90"
        />
        {/* Overlay oscuro para mejorar el contraste del texto */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20 text-white">
        <h1 className="font-bold text-lg flex items-center gap-2">
          Mayra Mendez<Mic className="w-5 h-5 text-pink-500" />
        </h1>

        <a
          href="https://wa.me/593980659712"
          className="bg-pink-500 px-4 py-2 rounded-xl text-sm font-medium hover:bg-pink-600 transition flex items-center justify-center gap-2"
        >
          Reservar <Smartphone className="w-5 h-5" />
        </a>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 text-center max-w-2xl text-white mt-12">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          /* CAMBIO AQUÍ: 
            Se añadió 'hidden md:flex' para que no salga en celulares (modo responsive)
            y solo aparezca en pantallas de tamaño medio en adelante.
          */
          className="hidden md:flex text-4xl md:text-6xl font-bold tracking-tight flex-col md:flex-row items-center justify-center gap-3 md:gap-4"
        >
          Serenatas para el Día de la Madre 
          <Flower2 className="w-10 h-10 text-pink-400 shrink-0" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden mt-6 text-lg md:text-xl text-gray-200 flex-col md:flex-row items-center justify-center gap-3 md:gap-4"
        >
          Sorprende a mamá con una experiencia única llena de emoción
           <Flower2 className="w-10 h-10 text-pink-400 shrink-0" />
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/593980659712"
            className="bg-pink-500 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition flex items-center justify-center gap-2"
          >
            Reservar ahora <Smartphone className="w-5 h-5" />
          </a>

          <a
            href="#videos"
            className="border border-white/70 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-2xl hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
          >
            Ver videos <Video className="w-5 h-5" />
          </a>
        </motion.div>

        {/* FECHAS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-gray-300 space-y-2"
        >
          <p className="flex items-center justify-center gap-2 font-medium text-white">
            <Calendar className="w-5 h-5 text-pink-400" /> Sábado 09 y Domingo 10 de Mayo
          </p>
          <p className="text-sm flex items-center justify-center gap-1.5 text-yellow-400/90 font-medium">
            <AlertTriangle className="w-4 h-4" /> Cupos limitados
          </p>
        </motion.div>

      </div>

    </section>
  );
}