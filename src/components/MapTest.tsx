/* eslint-disable @typescript-eslint/ban-ts-comment */
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
      // Limpieza adecuada del contenedor del mapa
      const mapContainers = document.querySelectorAll('.leaflet-container')
      mapContainers.forEach(container => {
        // @ts-ignore
        if (container._leaflet_id) {
          // @ts-ignore
          container._leaflet_id = null
        }
      })
    }
  }, [])

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', zIndex: 10 }}
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
