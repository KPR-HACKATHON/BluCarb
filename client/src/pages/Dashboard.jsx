import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MapView from '../components/MapView'

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 relative">
          <MapView />
        </main>
      </div>
    </div>
  )
}