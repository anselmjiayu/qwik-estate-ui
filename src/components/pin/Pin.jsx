/** @jsxImportSource react */
import { Marker, Popup } from "react-leaflet"
import './pin.scss'

export function Pin({item}) {
    return(
        <Marker className="pin" position={[item.latitude, item.longitude]}>
                <Popup>
                <div className="popupContainer">
                  <img className="pin-preview" src={item.img} alt=""/>
                    <div className="textContainer">
                      <a href={'/property/'+item.id}>{item.title}</a>
                      <span className="bed">{item.bedroom} bedroom</span>
                      <b>$ {item.price}</b>
                    </div>
                </div>

                </Popup>
            </Marker>
    )}
