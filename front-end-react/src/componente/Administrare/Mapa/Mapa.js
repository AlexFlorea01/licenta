import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import React,{useEffect, useState} from 'react';
import './Mapa.css';


const Mapa = ({setLangLong}) => 
{
const [position, setPosition] = useState(null)


    useEffect(()=>{
      if(position != null)
      {
        setLangLong(position[0], position[1])
      }
    },[position])

    function LocationMarker() {
    
        const map = useMapEvents({
          click() {
            map.on('click', function(e){
              var coord = e.latlng;
              var lat = coord.lat;
              var lng = coord.lng;
              console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
              setPosition([lat, lng])
              });
            
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>Locatia proprietatii</Popup>
          </Marker>
        )
      }
      
    return(
        <MapContainer center={[47.1585, 27.6014]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <LocationMarker />
        </MapContainer>
    )
}
 
export default Mapa;