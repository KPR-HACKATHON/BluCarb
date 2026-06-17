import { useEffect } from 'react'
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function FlyToSite({ selectedSite }) {
  const map = useMap()
  useEffect(() => {
    if (selectedSite) {
      map.flyTo([selectedSite.lat, selectedSite.lng], 9, { duration: 1.5 })
    }
  }, [selectedSite, map])
  return null
}

export default function MapView({ sites, selectedSite, onSelectSite }) {
  return (
    <MapContainer
      center={[12.0, 122.0]}
      zoom={6}
      style={{ height: '100%', width: '100%', background: '#0f172a' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap &copy; CARTO'
      />
      <FlyToSite selectedSite={selectedSite} />
      {sites.map((site) => (
        <Circle
          key={site.id}
          center={[site.lat, site.lng]}
          radius={site.co2 * 20}
          pathOptions={{
            color: selectedSite?.id === site.id ? '#ffffff' : site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillColor: site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillOpacity: selectedSite?.id === site.id ? 0.6 : 0.3,
            weight: selectedSite?.id === site.id ? 3 : 1,
          }}
          eventHandlers={{
            click: () => onSelectSite(site),
          }}
        >
          <Popup>
            <div style={{ fontSize: '13px' }}>
              <strong>{site.name}</strong><br />
              Type: {site.type}<br />
              Sequestration: {site.co2} tCO₂e<br />
              Status: {site.status}
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  )
}