'use client'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker, WMSTileLayer, LayersControl, ZoomControl, Circle, LayerGroup } from 'react-leaflet'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'

const fillRedOptions = { fillColor: 'red' }

const Map = () => {
  return (
    <div className='h-full'>
      <MapContainer className="w-auto h-full overflow-x-hidden flex flex-col" center={[-8.678666826841013, 115.22745690368244]} zoom={13} zoomControl={false}>
        <LayersControl position="topright">
          {/* control basemap */}
          <LayersControl.BaseLayer checked name="Street">
            <TileLayer attribution='&copy;Google Street</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Hibrid">
            <TileLayer attribution='&copy; Google Satelite</a> contributors'
              url="http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]}></TileLayer>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satelite">
            <TileLayer attribution='&copy; Google Hibrid</a> contributors'
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]}></TileLayer>
          </LayersControl.BaseLayer>
          {/* control layer overlay */}
          <LayersControl.Overlay name="Marker with popup">
            <LayerGroup>
              <Marker icon={
                new L.Icon({
                  iconUrl: MarkerIcon.src,
                  iconRetinaUrl: MarkerIcon.src,
                  iconAnchor: [12.5, 41],
                  iconSize: [25, 41],
                  shadowSize: [41, 41]
                })
              } position={[-8.678666826841013, 115.22745690368244]}></Marker>
              <Marker icon={
                new L.Icon({
                  iconUrl: MarkerIcon.src,
                  iconRetinaUrl: MarkerIcon.src,
                  iconAnchor: [12.5, 41],
                  iconSize: [25, 41],
                  shadowSize: [41, 41]
                })
              } position={[-8.676546804236699, 115.23554254402437]}></Marker>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Batas Kota">
            <WMSTileLayer url='http://geoserver.wefgis-sync.com:8585/geoserver/kota-denpasar/wms' layers='kota-denpasar:batas-kab' format='image/png' attribution='Geoserver' transparent></WMSTileLayer>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Batas Kecamatan">
            <WMSTileLayer url='http://geoserver.wefgis-sync.com:8585/geoserver/kota-denpasar/wms' layers='kota-denpasar:bata-kecamatan' format='image/png' attribution='Geoserver' transparent></WMSTileLayer>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Batas Desa">
            <WMSTileLayer url='http://geoserver.wefgis-sync.com:8585/geoserver/kota-denpasar/wms' layers='kota-denpasar:batas-desa' format='image/png' attribution='Geoserver' transparent></WMSTileLayer>
          </LayersControl.Overlay>
        </LayersControl>
        {/* zoom control */}
        <ZoomControl position='bottomleft'></ZoomControl>

      </MapContainer>
    </div>
  )
}

export default Map