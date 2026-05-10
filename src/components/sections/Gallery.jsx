import { motion } from "framer-motion"
import { Camera, Heart, Sparkles, Image as ImageIcon } from "lucide-react"
import img1 from "@/assets/Duran.jpeg"
import img2 from "@/assets/img1.jpeg"
import img3 from "@/assets/img2.jpeg"
import img4 from "@/assets/img3.jpeg"
import img5 from "@/assets/img4.jpeg"

const imagenesGaleria = [
   {
    id: 1,
    url: img1,
    titulo: "Una noche inolvidable",
    descripcion: "Un regalo lleno de emoción"
  },
  {
    id: 2,
    url: img2,
    titulo: "Serenata sorpresa",
    descripcion: "Momentos de emoción"
  },
  {
    id: 3,
    url: img3,
    titulo: "Entrega de flores",
    descripcion: "Celebración especial"
  },
  {
    id: 4,
    url: img4,
    titulo: "Momento único",
    descripcion: "Recuerdo imborrable"
  },
  {
    id: 5,
    url: img5,
    titulo: "Abrazo familiar",
    descripcion: "Unión y amor"
  }
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}


export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3"
        >
          Momentos especiales
          <Camera className="w-8 h-8 text-pink-500 inline-block" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 flex items-center justify-center gap-2"
        >
          <Heart className="w-5 h-5 text-pink-400" />
          Capturando sonrisas y emociones
          <Sparkles className="w-5 h-5 text-pink-400" />
        </motion.p>

        {/* Grid animado */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >

          {imagenesGaleria.map((imagen, index) => (
            <motion.div
              key={imagen.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              {/* Imagen con hover zoom */}
              <motion.img
                src={imagen.url}
                alt={imagen.titulo}
                className="object-cover h-72 w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=Imagen+no+disponible";
                }}
              />
              
              {/* Overlay que aparece al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{imagen.titulo}</h3>
                <p className="text-white/80 text-sm">{imagen.descripcion}</p>
                
                {/* Ícono decorativo */}
                <div className="absolute top-3 right-3 bg-pink-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Botón para ver más fotos */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-md flex items-center gap-2 mx-auto"
        >
          <ImageIcon className="w-5 h-5" />
          Ver galería completa
        </motion.button>

      </div>
    </section>
  )
}