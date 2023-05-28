import './Mapa.css';

const Mapa = () => {

    return ( 
        <MapContainer center={[51.505,-0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <LocationMarker />
            {/* <Marker position={[47.60,26.66]}>
                <Popup>Seconds location</Popup>
            </Marker> */}
        </MapContainer>
     );
}
 
export default Mapa;