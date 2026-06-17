export default function Navbar({ stats }) {
  const statItems = [
    { label: 'Total Sites', value: stats?.totalSites ?? '-', unit: '' },
    { label: 'Verified', value: stats?.verifiedSites ?? '-', unit: 'sites' },
    { label: 'Sequestration', value: stats?.totalSequestration ? Number(stats.totalSequestration).toLocaleString() : '-', unit: 'tCO₂e' },
    { label: 'Tokens Minted', value: stats?.tokensMinted ?? '-', unit: 'tokens' },
    { label: 'Pending', value: stats?.pendingSites ?? '-', unit: 'sites' },
  ]

  return (
    <nav className="px-6 py-3 flex items-center justify-between bg-gray-900 border-b border-gray-800 z-10">
      {/* Left — Logo */}
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

      {/* Right — Stats + Live */}
      <div className="flex items-center gap-5">
        {statItems.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-5">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 uppercase tracking-wider leading-none">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-white">{stat.value}</span>
                {stat.unit && (
                  <span className="text-xs text-emerald-400">{stat.unit}</span>
                )}
              </div>
            </div>
            {index < statItems.length - 1 && (
              <div className="w-px h-6 bg-gray-700" />
            )}
          </div>
        ))}
        <div className="w-px h-6 bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">DENR CAVCS</span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-emerald-400">Live</span>
        </div>
      </div>
    </nav>
  )
}