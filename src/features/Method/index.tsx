import Image from "next/image"
import { Methodes } from "./Data-Method"
import { CheckCircle } from "lucide-react"

export default function Method() {
  return (
    <section id="method" className="relative w-full flex items-center bg-center bg-no-repeat bg-cover bg-[url(/images/method-cover.png)] justify-center min-h-[600px]">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-[1228px] grid grid-cols-1 lg:grid-cols-2 gap-12 w-full p-8">
        <div className="flex flex-col items-start justify-center space-y-6">
          {/* <div className="inline-block">
            <span className="text-actif font-clashdisplay text-sm font-semibold tracking-wider uppercase mb-2 block">
              Notre Méthode
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-actif to-orange-400 rounded-full"></div>
          </div> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6">
            <CheckCircle className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-medium">Notre Méthode</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-clashdisplay font-bold text-white leading-tight">
            Une approche{" "}
            <span className="bg-gradient-to-r from-actif to-orange-400 bg-clip-text text-transparent">centrée</span> sur
            vos besoins
          </h2>

          <p className="text-lg text-gray-200 font-DM_Sans leading-relaxed max-w-lg">
            Chaque projet commence par l’écoute et la compréhension de vos objectifs.
            Nous analysons vos besoins pour concevoir des solutions digitales
            sur mesure, alliant innovation, performance et simplicité d’utilisation,
            afin de garantir des résultats concrets et durables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Methodes.map((method, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-actif/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-actif to-orange-500 shadow-lg group-hover:shadow-actif/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                <Image
                  src="/images/icon/icon-04.svg"
                  width={28}
                  height={28}
                  alt="method icon"
                  className="relative z-10 filter brightness-0 invert"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-clashdisplay font-bold text-white leading-tight group-hover:text-actif transition-colors duration-300">
                  {method.title}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-actif/60 to-transparent mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-actif/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-actif/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  )
}
