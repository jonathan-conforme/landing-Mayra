import { motion } from "framer-motion"
import { MessageCircle, Music, Heart, Star, User } from "lucide-react"
import fotos from "../../assets/fotos.jpg"  
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Array de testimonios con datos personalizables
const testimonios = [
  {
    id: 1,
    nombre: "Glenda Ines",
    ubicacion: "Pedro Carbo, Sector Durán",
    texto: "Excelente servicio. Cantó en mi cumpleaños y creó un ambiente muy especial. Súper recomendado para cualquier ocasión.",
    icono: Heart,
    colorIcono: "text-red-400",
    imagen: fotos, // Cambiar por imagen real
    rating: 5
  },
  {
    id: 3,
    nombre: "Xavier Gómez",
    ubicacion: "Pedro Carbo, Sector Durán",
    texto: "Recomendado al 100%. Cantó en mi cumpleaños y fue un momento inolvidable, lleno de emoción. La serenata superó mis expectativas.",
    icono: Music,
    colorIcono: "text-yellow-500",
    imagen: foto3, // Cambiar por imagen real
    rating: 5
  },
  {
    id: 2,
    nombre: "Jenniffer Conforme",
    ubicacion: "Pedro Carbo, Sector Durán",
   texto: "Me dio serenata en mi cumpleaños, fue un momento muy especial. Recomendado.",
    icono: Music,
    colorIcono: "text-pink-500",
    imagen: foto2, // Cambiar por imagen real
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-pink-50 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3"
        >
          Lo que dicen nuestros clientes
          <MessageCircle className="w-8 h-8 text-pink-500 inline-block" />
        </motion.h2>

        {/* Cards con stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >

          {testimonios.map((testimonio) => (
            <motion.div
              key={testimonio.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Imagen de perfil */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {testimonio.imagen ? (
                    <img
                      src={testimonio.imagen}
                      alt={`Foto de ${testimonio.nombre}`}
                      className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/80?text=Usuario";
                      }}
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center border-4 border-pink-200">
                      <User className="w-10 h-10 text-pink-400" />
                    </div>
                  )}
                  
                  {/* Indicador de verificado */}
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Nombre y ubicación */}
              <div className="text-center mb-3">
                <h3 className="font-semibold text-gray-800">{testimonio.nombre}</h3>
                <p className="text-xs text-gray-400">{testimonio.ubicacion}</p>
              </div>

              {/* Rating con estrellas */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Ícono decorativo y testimonio */}
              <div className="flex justify-center mb-2">
                <testimonio.icono className={`w-5 h-5 ${testimonio.colorIcono}`} />
              </div>
              
              <p className="text-gray-600 italic">"{testimonio.texto}"</p>
            </motion.div>
          ))}

        </motion.div>

        {/* Botón para ver más testimonios */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-md"
        >
          Ver más testimonios
        </motion.button>

      </div>
    </section>
  )
}