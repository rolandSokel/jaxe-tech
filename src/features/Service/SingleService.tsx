import { cn } from "@/src/lib/utils"

interface SingleServiceProps {
  color: string
  title: string
  description: string
}

export default function SingleService({ service }: { service: SingleServiceProps }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20",
        "flex flex-col gap-6 min-h-[320px] w-full max-w-sm",
        service.color === "bg-actif" ? "bg-gradient-to-br from-orange-500/20 to-red-500/10 border-orange-500/30" : "",
      )}
    >
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />

      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center",
          "bg-gradient-to-br from-orange-500 to-red-500 shadow-lg",
          service.color === "bg-actif" ? "from-orange-400 to-red-400" : "from-blue-500 to-purple-500",
        )}
      >
        <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-current opacity-80" />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-clashdisplay font-bold text-white leading-tight">{service.title}</h3>
        <p className="text-gray-200 font-DM_Sans leading-relaxed text-sm flex-1">{service.description}</p>
      </div>

      <div className="pt-4 border-t border-white/10">
        <button className="text-orange-400 font-DM_Sans font-medium text-sm hover:text-orange-300 transition-colors duration-200 group-hover:translate-x-1 transform">
          En savoir plus →
        </button>
      </div>
    </div>
  )
}
