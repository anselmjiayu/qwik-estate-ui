/** @jsxImportSource react */
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet'
import "./map.scss"
import "leaflet/dist/leaflet.css"
import { Pin } from '../pin/Pin';
import type { CardData } from '../card/card';

export default function Map({items}:{items:CardData[]}):JSX.Element{
    return (
    <MapContainer center={[53.505, -2.09]} zoom={7} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    );
}

