import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MapView from '../components/MapView'

export default function Dashboard() {
  const [selectedSite, setSelectedSite] = useState(null)

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar selectedSite={selectedSite} onSelectSite={setSelectedSite} />
        <main className="flex-1 relative">
          <MapView selectedSite={selectedSite} onSelectSite={setSelectedSite} />
        </main>
      </div>
    </div>
  )
}