import Image from "next/image"

export default function About() {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-[1228px] grid grid-cols-1 lg:grid-cols-2 gap-16 w-full p-8">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end items-center order-2 lg:order-1">
          <div className="relative group">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 p-2 rounded-3xl backdrop-blur-sm border border-orange-500/20">
              <Image
                src="/images/about.jpg"
                alt="About JAXE TECH - Innovation Technologique"
                width={500}
                height={400}
                className="rounded-2xl w-full max-w-[450px] h-[400px] object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-start text-left space-y-6 order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-orange-400 font-clashdisplay font-semibold tracking-wide">
              À PROPOS DE JAXE TECH
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-clashdisplay font-bold text-white leading-tight">
            L'Innovation{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Technologique
            </span>{" "}
            au Service des Entreprises Africaines
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 font-DM_Sans leading-relaxed max-w-xl">
            Située à Lomé, JAXE TECH accompagne les entreprises togolaises et africaines dans leur transformation
            digitale. Nous allions expertise technique, design et stratégie marketing pour que chaque site ou
            application devienne un levier de croissance.
          </p>

          {/* Stats or Features */}
          {/* <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-orange-400 font-clashdisplay">100+</div>
              <div className="text-sm text-gray-400 font-DM_Sans">Projets Réalisés</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-orange-400 font-clashdisplay">5+</div>
              <div className="text-sm text-gray-400 font-DM_Sans">Années d'Expérience</div>
            </div>
          </div> */}

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-clashdisplay font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
              <span className="relative z-10">Découvrir nos Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
