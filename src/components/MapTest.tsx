'use client'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression, LatLngTuple } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

interface MapProps {
  posix: LatLngExpression | LatLngTuple,
  zoom?: number,
}

const defaults = {
  zoom: 19
}

const MapTest = ({ posix, zoom = defaults.zoom }: MapProps) => {
  useEffect(() => {
    return () => {
      // Cleanup any initialized map container to avoid the error
      const mapContainer = document.querySelector('.leaflet-container')
      if (mapContainer) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mapContainer._leaflet_id = null
      }
    }
  }, [])

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={posix} draggable={false}>
        <Popup>Hey ! I study here</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapTest
