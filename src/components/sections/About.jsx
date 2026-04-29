import { motion } from "framer-motion";
import { Music, Flower2, Calendar, MapPin, User } from "lucide-react";
import mayra from "@/assets/Mayra.jpeg"
export default function About() {
  return (
    <section id="Artista" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={mayra}
            alt="Mayra Maribel Méndez Jordan"
            className="rounded-2xl shadow-lg w-64 md:w-80 object-cover aspect-[4/5]"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Artista
          </h2>

          {/* Nombre */}
          <p className="mt-3 flex items-center gap-2 text-pink-500 font-semibold">
            <User className="w-5 h-5" />
            Mayra Maribel Méndez Jordan
          </p>

          {/* Descripción */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Cantante con más de 20 años de trayectoria, actualmente radicada en Pedro Carbo. 
            Su estilo se caracteriza por transmitir emoción y cercanía en cada presentación.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Su repertorio incluye serenatas, chichas, cumbias y baladas, adaptándose a cada 
            ocasión para crear momentos únicos e inolvidables.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Especializada en serenatas románticas, ideal para cumpleaños, aniversarios 
            y fechas especiales.
          </p>

          {/* Detalles con iconos */}
          <div className="mt-8 space-y-4 text-gray-700">

            <p className="flex items-center gap-3">
              <Music className="w-5 h-5 text-pink-500" />
              <span>
                <strong className="text-gray-900">Estilo:</strong> Serenatas, chichas, cumbias y baladas
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Flower2 className="w-5 h-5 text-pink-500" />
              <span>
                <strong className="text-gray-900">Eventos:</strong> Cumpleaños, aniversarios y fechas especiales
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span>
                <strong className="text-gray-900">Trayectoria:</strong> 20 años de experiencia
              </span>
            </p>

            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span>
                <strong className="text-gray-900">Ubicación:</strong> Reside en Pedro Carbo • Origen: El Guabo, El Oro
              </span>
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}