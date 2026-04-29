import { motion } from "framer-motion"
import { Music, Users, Heart } from "lucide-react"

export default function Videos() {
  return (
    <section className="py-20 bg-pink-50 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-3"
        >
          Escucha su voz
          <Music className="w-8 h-8 text-pink-500 inline-block" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 flex items-center justify-center gap-2"
        >
          <Users className="w-5 h-5 text-pink-400" />
          Algunos momentos reales de serenatas llenas de emoción
          <Heart className="w-5 h-5 text-pink-400" />
        </motion.p>

        {/* Videos */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {/* Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-60"
              src="https://youtube.com/embed/WHbaNTF0W-I"
              title="Video serenata 1"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-60"
              src="https://youtube.com/embed/l1FKn9penQM?feature=share"
              title="Video serenata 2"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Video 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-60"
              src="https://youtube.com/embed/QsTSRMUFxi8?feature=share"
              title="Video serenata 3"
              allowFullScreen
            ></iframe>

          </motion.div>

          {/* Video 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-60"
              src="https://www.youtube.com/embed/TodePnErLrM"
              title="Le canto a la mujer de pelo blanco"
              allowFullScreen
            ></iframe>

          </motion.div>

          {/* Video  */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-60"
              src="https://youtube.com/embed/wLxL15PzU-w"
              title="Pintor que pintas paisajes"
              allowFullScreen
            ></iframe>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1701753820951023"
              width="100%"
              height="360"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}