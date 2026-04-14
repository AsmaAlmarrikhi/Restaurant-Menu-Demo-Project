"use client"

import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import "leaflet-defaulticon-compatibility";

export const HomeLocationSection = () => {
     const position : LatLngExpression  = [25.297735273138713, 51.5509739554549];
    return (
    <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[145px] px-[20px] lg:px-[135px] h-[100vh] lg:h-[470px]">
        <div className="flex  flex-col justify-around gap-[30px] lg:gap-[70px]">
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
            {/* Map View here */}
        <div className="bg-amber-200 w-full h-full">
            <MapContainer
                center={position}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={position}>
                    <Popup>Old Doha Port</Popup>
                </Marker>

            </MapContainer>
        </div>
    </div>)
};
