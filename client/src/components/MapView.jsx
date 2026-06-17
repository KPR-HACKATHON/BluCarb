import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const sites = [
  { name: 'Agusan Marsh', coords: [8.95, 125.97], co2: 1240, type: 'Mangrove', status: 'Verified' },
  { name: 'Tubbataha Reef', coords: [8.85, 119.8], co2: 890, type: 'Seagrass', status: 'Pending' },
  { name: 'Davao Gulf', coords: [6.8, 125.5], co2: 2100, type: 'Mangrove', status: 'Verified' },
  { name: 'Malampaya Sound', coords: [11.5, 119.4], co2: 540, type: 'Seaweed', status: 'Pending' },
]

function FlyToSite({ selectedSite }) {
  const map = useMap()
  useEffect(() => {
    if (selectedSite) {
      map.flyTo(selectedSite.coords, 9, { duration: 1.5 })
    }
  }, [selectedSite, map])
  return null
}

export default function MapView({ selectedSite, onSelectSite }) {
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
          key={site.name}
          center={site.coords}
          radius={site.co2 * 20}
          pathOptions={{
            color: selectedSite?.name === site.name ? '#ffffff' : site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillColor: site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillOpacity: selectedSite?.name === site.name ? 0.6 : 0.3,
            weight: selectedSite?.name === site.name ? 3 : 1,
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