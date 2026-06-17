export default function Sidebar({ sites, selectedSite, onSelectSite }) {
  return (
    <aside className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col overflow-y-auto">
      {/* Map Layer Controls */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Map Layers
        </h2>
        <div className="space-y-2">
          {['Ecosystem Coverage', 'Sequestration Heatmap', 'Carbon Priority Index'].map((layer) => (
            <label key={layer} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-emerald-500" />
              <span className="text-sm text-gray-300">{layer}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Site List */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Coastal Sites
        </h2>
        <div className="space-y-2">
          {sites.map((site) => (
            <div
              key={site.id}
              onClick={() => onSelectSite(site)}
              className={`rounded-lg p-3 cursor-pointer transition border ${
                selectedSite?.id === site.id
                  ? 'bg-emerald-900 border-emerald-500'
                  : 'bg-gray-800 border-transparent hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-white">{site.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  site.status === 'Verified'
                    ? 'bg-emerald-900 text-emerald-400'
                    : 'bg-yellow-900 text-yellow-400'
                }`}>
                  {site.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{site.type}</span>
                <span className="text-xs text-emerald-400 font-mono">{site.co2} tCO₂e</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Site Detail Panel */}
      {selectedSite && (
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Site Details
          </h2>
          <div className="bg-gray-800 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Site Name</span>
              <span className="text-xs text-white font-medium">{selectedSite.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Ecosystem Type</span>
              <span className="text-xs text-white">{selectedSite.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Sequestration</span>
              <span className="text-xs text-emerald-400 font-mono">{selectedSite.co2} tCO₂e</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">CAVCS Status</span>
              <span className={`text-xs font-medium ${
                selectedSite.status === 'Verified' ? 'text-emerald-400' : 'text-yellow-400'
              }`}>
                {selectedSite.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Coordinates</span>
              <span className="text-xs text-gray-300 font-mono">
                {selectedSite.lat}°N, {selectedSite.lng}°E
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h2>
        <div className="space-y-2">
          {['Apply for Carbon Credits', 'Submit to DENR Portal', 'Download FCAR Report', 'View Token Registry'].map((action) => (
            <button
              key={action}
              className="w-full text-left text-sm text-gray-300 bg-gray-800 hover:bg-emerald-900 hover:text-emerald-400 transition rounded-lg px-3 py-2"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}