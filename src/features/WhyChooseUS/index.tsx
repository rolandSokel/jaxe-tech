import { CheckCircle, MapPin, Palette, Search, HeadphonesIcon } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Basée au Togo",
    description:
      "Une équipe locale qui comprend parfaitement le marché africain et ses spécificités culturelles et économiques.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Palette,
    title: "Design moderne + stratégie marketing",
    description:
      "Nous combinons créativité visuelle et stratégie marketing pour créer des expériences digitales qui convertissent.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Search,
    title: "SEO optimisé",
    description: "Tous nos projets sont conçus pour être bien référencés sur Google et attirer un trafic qualifié.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Support personnalisé",
    description: "Un accompagnement sur mesure avec une équipe dédiée qui vous suit tout au long de votre projet.",
    gradient: "from-orange-500 to-red-600",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="relative py-20 bg-no-repeat bg-cover bg-[url(/images/method-cover.png)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6">
            <CheckCircle className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-medium">Nos Avantages</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-clashdisplay font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r font-clashdisplay from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Pourquoi nous
            </span>
            <br />
            <span className="bg-gradient-to-r font-clashdisplay from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              choisir ?
            </span>
          </h2>

          <p className="text-gray-300 font-DM_Sans leading-relaxed text-lg max-w-3xl mx-auto">
            JAXE TECH combine expertise locale, innovation technologique et accompagnement personnalisé pour faire de
            votre projet digital un véritable succès.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-full h-full text-white" />
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 cursor-pointer">
            <span>Commencer votre projet</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
