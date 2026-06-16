export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <span className="text-white font-bold text-lg tracking-wide">
          Blu<span className="text-emerald-400">Carb</span>
        </span>
        <span className="text-gray-500 text-xs ml-2">
          Philippine Blue Carbon Platform
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-400">DENR CAVCS Aligned</span>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-emerald-400">Live</span>
      </div>
    </nav>
  )
}