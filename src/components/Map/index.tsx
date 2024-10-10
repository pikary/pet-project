import {FC, useEffect, useRef} from "react";
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
    lat: string,
    long: string,
}



const Map: FC<MapProps> = ({lat, long}) => {
    const mapref = useRef<HTMLDivElement>(null)
    let map: L.Map | undefined = undefined
    const zoom = 15


    const initializeMap = (lat: number, long: number) => {
        if (!map) {
            // Initialize the map only if it hasn't been initialized yet
            map = L.map('map').setView([lat, long], zoom);
        } else {
            // Update the map view if it has already been initialized
            map.setView([lat, long], zoom);
        }

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        L.marker([lat, long]).addTo(map)
    };

    useEffect(() => {
        initializeMap(+lat, +long)
    }, []);

    useEffect(() => {
        if (lat !== undefined && long !== undefined) {
            initializeMap(+lat, +long)
        }
    }, [lat, long]);

    return (
        <div style={{height: 200, width: 400, flexGrow: 1}} id="map" ref={mapref}></div>

    )
}

export default Map