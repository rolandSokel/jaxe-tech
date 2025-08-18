import SingleService from "./SingleService"
import { Services } from "./Data-Service"

export default function Service() {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover bg-[url(/images/method-cover.png)] flex items-center justify-center py-20">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-4">
            <span className="text-orange-400 font-DM_Sans font-medium text-sm">Nos Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-clashdisplay font-bold text-white mb-6 leading-tight">
            Solutions Digitales
            <span className="block text-orange-400">Sur Mesure</span>
          </h2>
          <p className="text-gray-300 font-DM_Sans leading-relaxed text-lg max-w-3xl">
            Chez JAXE TECH, nous proposons une gamme complète de services digitaux pour accompagner votre croissance. De
            la création de sites web à la formation, notre équipe d'experts est là pour vous aider à atteindre vos
            objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {Services.map((service, index) => (
            <SingleService key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}
