import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const sites = [
  { name: 'Agusan Marsh', coords: [8.95, 125.97], co2: 1240, type: 'Mangrove', status: 'Verified' },
  { name: 'Tubbataha Reef', coords: [8.85, 119.8], co2: 890, type: 'Seagrass', status: 'Pending' },
  { name: 'Davao Gulf', coords: [6.8, 125.5], co2: 2100, type: 'Mangrove', status: 'Verified' },
  { name: 'Malampaya Sound', coords: [11.5, 119.4], co2: 540, type: 'Seaweed', status: 'Pending' },
]

export default function MapView() {
  return (
    <MapContainer
      center={[12.0, 122.0]}
      zoom={6}
      className="w-full h-full"
      style={{ background: '#0f172a' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap &copy; CARTO'
      />
      {sites.map((site) => (
        <Circle
          key={site.name}
          center={site.coords}
          radius={site.co2 * 20}
          pathOptions={{
            color: site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillColor: site.status === 'Verified' ? '#10b981' : '#f59e0b',
            fillOpacity: 0.3,
          }}
        >
          <Popup>
            <div className="text-sm">
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