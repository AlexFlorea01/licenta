import './MapaProprietate.css';
import React from'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const MapaProprietate = ({lat,long}) => {

    return ( 
        <MapContainer center={[lat,long]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
            <Popup>Locația proprietății</Popup>
        </Marker>
        </MapContainer>
     );
}
 
export default MapaProprietate;