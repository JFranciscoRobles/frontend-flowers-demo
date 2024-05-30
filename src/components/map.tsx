'use client'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Link from 'next/link'
import Typography from './ui/typography'

const Map = () => {
  return (
    <MapContainer
      preferCanvas
      center={[32.50847511838948, -116.9926386568509]}
      zoom={11}
      scrollWheelZoom
      style={{ height: '100%', width: '600px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[32.50847511838948, -116.9926386568509]}>
        <Popup>
          <Link href='https://www.google.com.mx/'>
            <Typography>¡Haz click aquí para ver la ubicación!</Typography>
          </Link>

        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
