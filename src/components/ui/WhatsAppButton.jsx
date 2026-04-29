import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Send } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Ocultar botón al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const whatsappNumber = "593980659712"
  const mensaje = "Hola,%20quiero%20reservar%20una%20serenata"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip flotante */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-16 bottom-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span>¡Reserva ahora!</span>
                </div>
                {/* Triángulo */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-gray-900"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${mensaje}`}
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(236, 72, 153, 0.3)",
                "0 4px 25px rgba(236, 72, 153, 0.6)",
                "0 4px 20px rgba(236, 72, 153, 0.3)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl transition-all duration-300 group"
          >
            {/* Efecto de pulso */}
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
            
            {/* Ícono principal */}
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
            
            {/* Badge de notificación */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-bounce">
              <Send className="w-3 h-3" />
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}