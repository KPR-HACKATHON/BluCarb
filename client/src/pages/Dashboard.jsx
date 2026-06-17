import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MapView from '../components/MapView'
import { getSites, getStatsSummary } from '../services/api'

export default function Dashboard() {
  const [selectedSite, setSelectedSite] = useState(null)
  const [sites, setSites] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sitesRes, statsRes] = await Promise.all([
          getSites(),
          getStatsSummary(),
        ])
        setSites(sitesRes.data.data)
        setStats(statsRes.data.data)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-400 text-sm">Loading BluCarb data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <Navbar stats={stats} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sites={sites}
          selectedSite={selectedSite}
          onSelectSite={setSelectedSite}
        />
        <main className="flex-1 relative">
          <MapView
            sites={sites}
            selectedSite={selectedSite}
            onSelectSite={setSelectedSite}
          />
        </main>
      </div>
    </div>
  )
}