import { motion } from "framer-motion"
import {
    Heart,
    Music,
    MapPin,
    Phone,
    Mail,
    Send,
    ChevronRight,
    MessageCircle,
    Camera,
    Globe
} from "lucide-react"
import guayaquil from "@/assets/logo-guayaquil.png"
import pichincha from "@/assets/logo-pichincha.png" 

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >

                {/* Grid principal */}
                <div className="grid md:grid-cols-4 gap-8 text-left mb-12">

                    {/* Columna 1 - Información principal */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold tracking-tight flex items-center justify-center md:justify-start gap-2">
                            Serenatas Día de la Madre
                            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Música en vivo para momentos inolvidables
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            Transformando momentos especiales en recuerdos eternos
                        </p>
                    </div>

                    {/* Columna 2 - Enlaces rápidos */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
                            <ChevronRight className="w-4 h-4 text-pink-400" />
                            Enlaces rápidos
                        </h4>
                        <ul className="space-y-2 text-center md:text-left">
                            <li><a href="#inicio" className="text-gray-400 hover:text-pink-400 transition">Inicio</a></li>
                            <li><a href="#Artista" className="text-gray-400 hover:text-pink-400 transition">Artista</a></li>
                            <li><a href="#videos" className="text-gray-400 hover:text-pink-400 transition">Videos</a></li>
                            <li><a href="#paquetes" className="text-gray-400 hover:text-pink-400 transition">Paquetes</a></li>
                            <li><a href="#galeria" className="text-gray-400 hover:text-pink-400 transition">Galería</a></li>
                            <li><a href="#testimonios" className="text-gray-400 hover:text-pink-400 transition">Testimonios</a></li>
                        </ul>
                    </div>

                    {/* Columna 3 - Contacto */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
                            <Phone className="w-4 h-4 text-pink-400" />
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-center md:text-left">
                            <li className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+593 980 659 712</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>Jonathanconformetomala@outlook.es</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>Guayas, Pedro Carbo</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4 - Newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 justify-center md:justify-start">
                            <Send className="w-4 h-4 text-pink-400" />
                            Boletín
                        </h4>
                        <p className="text-gray-400 text-sm mb-3 text-center md:text-left">
                            Recibe ofertas exclusivas
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-400 transition"
                            />
                            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg transition">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Redes sociales */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Redes Sociales - Texto + íconos */}
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://www.facebook.com/mayra.mendez.338658"
                                target="_blank"
                                className="text-gray-400 hover:text-pink-400 transition text-sm flex items-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4" /> Facebook
                            </a>
                            <a
                                href="https://wa.me/59380659712?text=Hola,%20quiero%20reservar%20una%20serenata"
                                target="_blank"
                                className="text-gray-400 hover:text-pink-400 transition text-sm flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                WhatsApp
                            </a>
                            <a
                                href="https://www.instagram.com/mayra.mendez.338658/"
                                target="_blank"
                                className="text-gray-400 hover:text-pink-400 transition text-sm flex items-center gap-2"
                            >
                                <Camera className="w-4 h-4" /> Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com/@maybel02e?referer_url=localhost%3A5173%2F&refer=embed&embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404359%2C121497414%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_masking&referer_video_id=7633413495521938709"
                                target="_blank"
                                className="text-gray-400 hover:text-pink-400 transition text-sm flex items-center gap-2"
                            >
                                <Music className="w-4 h-4" /> TikTok
                            </a>

                        </div>

                        {/* Métodos de pago */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-500 text-sm border-t border-gray-100 pt-6 mt-10">

                            {/* Texto Descriptivo */}
                            <span className="font-medium">Pagos seguros mediante transferencia:</span>

                            {/* Contenedor de Logos */}
                            <div className="flex items-center gap-2">

                                {/* Logo Banco Pichincha */}
                                <div className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center justify-center h-10 w-24">
                                    <img
                                        src={pichincha} /* IMPORTANTE: Reemplaza con tu ruta real */
                                        alt="Banco Pichincha"
                                        className="h-full w-auto object-contain" /* Mantiene proporción y centra */
                                    />
                                </div>

                                {/* Logo Banco Guayaquil */}
                                <div className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center justify-center h-10 w-24">
                                    <img
                                        src={guayaquil} /* IMPORTANTE: Reemplaza con tu ruta real */
                                        alt="Banco Guayaquil"
                                        className="h-full w-auto object-contain" /* Mantiene proporción y centra */
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            © 2026 Todos los derechos reservados | Hecho con
                            <Heart className="w-3 h-3 inline mx-1 text-pink-400 fill-pink-400" />
                            para mamás
                        </p>
                    </div>
                </div>

            </motion.div>
        </footer>
    )
}