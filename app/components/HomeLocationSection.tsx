"use client"

import { Icon, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const HomeLocationSection = () => {
    const position : LatLngExpression  = [25.297735273138713, 51.5509739554549];

    const customIcon = new Icon({
        iconUrl: '../images/LocationIcon.png',
        iconSize: [38, 38], // [width, height]
        iconAnchor: [22, 100], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[145px] px-[20px] lg:px-[135px] h-[100vh] lg:h-[470px] mb-[90px] lg:mb-[150px]">

            <div className="md:flex-1 flex flex-col justify-around gap-[30px] lg:gap-[70px]">
                <div className="flex  flex-col gap-[16px]">
                    <h4 className="text-[28px] lg:text-[50px] font-bold w-full">
                        Our Restaurants. <br/>
                        Where to Find Us?   
                    </h4>
                    <p className="text-[14px] lg:text-[20px]">
                        Want to have a superb meal in an exceptional setting with family, friends or work colleagues, here are the addresses of our restaurants.
                    </p>
                </div>
                <button className="bg-white text-black rounded-[40px] px-[54px] py-[20px] text-[16px] lg:text-[18px] w-full lg:w-fit">
                    Find The Nearest Cheffest
                </button>
            </div>

            {/* --------------  Map View  --------------  */}
            <div className="bg-amber-200 w-full h-full md:flex-1">
                <MapContainer
                    center={position}
                    zoom={14}
                    style={{ height: "100%", width: "100%" }}>

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position} icon={customIcon}>
                        <Popup>Old Doha Port</Popup>
                    </Marker>

                </MapContainer>
            </div>
        </div>
    );
};
