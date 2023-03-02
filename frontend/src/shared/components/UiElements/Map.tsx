import { useRef, useEffect } from 'react';

declare global {
   interface Window {
      initMap: () => void;
   }
}
const Map = (props: any) => {
   const { center, zoom } = props;

   const mapRef = useRef<HTMLDivElement>(null);

   const initMap = () => {
      const map: google.maps.Map = new google.maps.Map(mapRef.current as HTMLElement, {
         center: props.center,
         zoom: props.zoom
      })
      new window.google.maps.Marker({ position: props.center, map: map });
   };

   useEffect(() => {
      initMap();
   }, [center, zoom])


   return (
      <div ref={mapRef} className={`map ${props.className}`}></div>
   )
}

export default Map