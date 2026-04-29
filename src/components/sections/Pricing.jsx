import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  Music,
  Mic2,
  Headphones,
  Heart,
  Clock,
  AlertCircle,
  CreditCard,
  Star,
  Sparkles,
  Calendar,
  Car
} from "lucide-react"

export default function Pricing() {
  const packages = [
    {
      id: 1,
      title: "2 Canciones",
      description: "Serenata corta pero especial",
      price: 25,
      priceColor: "text-pink-500",
      buttonText: "Reservar",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      features: [
        { icon: Music, text: "2 canciones en vivo", color: "text-pink-400" },
        { icon: Mic2, text: "Interpretación personalizada", color: "text-pink-400" },
        { icon: Headphones, text: "Serenata a domicilio", color: "text-pink-400" }
      ],
      highlight: false,
      delay: 0
    },
    {
      id: 2,
      title: "3 Canciones",
      description: "La experiencia más completa",
      price: 30,
      priceColor: "text-pink-600",
      buttonText: "Reservar ahora",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      features: [
        { icon: Music, text: "3 canciones en vivo", color: "text-pink-500" },
        { icon: Heart, text: "Mayor duración y emoción", color: "text-pink-500" },
        { icon: Headphones, text: "Serenata a domicilio", color: "text-pink-500" }
      ],
      highlight: true,
      delay: 0.2
    },
    {
      id: 3,
      title: "Evento Privado",
      description: "Para ocasiones especiales",
      price: 50,
      priceColor: "text-purple-600",
      buttonText: "Consultar disponibilidad",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        { icon: Music, text: "5+ canciones en vivo", color: "text-purple-400" },
        { icon: Clock, text: "Duración extendida", color: "text-purple-400" },
        { icon: Sparkles, text: "Setlist personalizado", color: "text-purple-400" },
        { icon: Calendar, text: "Disponibilidad en eventos", color: "text-purple-400" }
      ],
      highlight: false,
      delay: 0.4,
      isSpecial: true,
      priceNote: "Precio base"
    }
  ]

  return (
    <section className="py-20 bg-white px-6" id="paquetes">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Paquetes de Serenata
          </h2>
          <p className="mt-4 text-gray-600">
            Elige la opción perfecta para sorprender a mamá
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: pkg.delay }}
              whileHover={{ y: pkg.highlight ? -10 : -8 }}
              className="h-full"
            >
              <Card className={`rounded-3xl transition-all duration-300 h-full flex flex-col ${pkg.highlight
                  ? "shadow-xl border-2 border-pink-500 relative"
                  : pkg.isSpecial
                    ? "shadow-md border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50"
                    : "shadow-md border border-gray-200 hover:shadow-xl"
                }`}>

                {/* Badge para paquete destacado */}
                {pkg.highlight && (
                  <span className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 whitespace-nowrap font-medium">
                    <Star className="w-3 h-2 fill-white" />
                    Más elegido
                  </span>
                )}

                <CardHeader className="text-center pt-8">
                  <CardTitle className={`text-2xl font-bold ${pkg.isSpecial ? 'text-purple-700' : 'text-gray-800'}`}>
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center flex-grow">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-extrabold ${pkg.priceColor}`}>${pkg.price}</span>
                    {pkg.priceNote && (
                      <span className="text-xs text-gray-400">{pkg.priceNote}</span>
                    )}
                  </div>

                  <ul className="mt-8 space-y-3 text-gray-600">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2.5">
                        <feature.icon className={`w-4.5 h-4.5 ${feature.color}`} strokeWidth={1.75} />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pb-8">
                  <motion.a
                    href="https://wa.me/59380659712?text=Hola,%20quiero%20reservar%20una%20serenata"
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-center ${pkg.buttonColor} text-white py-3.5 rounded-xl transition shadow-md cursor-pointer block font-semibold`}
                  >
                    {pkg.buttonText}
                  </motion.a>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info extra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-600 text-sm">
            <p className="flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>Cupos limitados</span>
            </p>
            <div className="hidden sm:block w-px h-4 bg-gray-300 my-auto"></div>
            <p className="flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-500" />
              <span>Reserva con anticipo</span>
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  )
}