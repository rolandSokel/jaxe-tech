export default function Hero() {
  return (
    <main className="relative flex min-h-screen w-full bg-center bg-no-repeat bg-cover bg-[url(/images/hero/hero-bg-cover.png)] flex-col gap-8 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-orange-400/25 to-red-400/25 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-6xl w-full flex px-8 md:px-20 flex-col gap-8 items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-6">
            <span className="text-orange-400 font-medium text-sm tracking-wide">🚀 AGENCE DIGITALE AU TOGO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-clashdisplay font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Création de sites web et applications
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {" "}
              performantes
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-200 font-DM_Sans max-w-4xl leading-relaxed">
          JAXE TECH développe des solutions digitales sur mesure pour
          <span className="text-orange-400 font-semibold"> booster votre activité</span> et vous démarquer de la
          concurrence.
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
          <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Contactez-nous
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl">
            <span className="flex items-center gap-2">
              Demandez un devis
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </main>
  )
}
