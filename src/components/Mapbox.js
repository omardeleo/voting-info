import React,{useEffect,useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    width: "50vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
  };

  
const Mapbox = ()=>{
    const mapContainer = useRef(null)
    const locations=[
      {lng:-73.920590,lat:40.766520},
      {lng:-73.916630,lat:40.764300},
      {lng:-73.931650,lat:40.772910},
      {lng:-73.923120,lat:40.766110},
      {lng:-73.916970,lat:40.77340},
    ]

    useEffect(()=>{
        mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container:mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74, 40.72],
            zoom: 10.3
        })
        locations.forEach(loc=>
            new mapboxgl.Marker()
                .setLngLat([loc.lng,loc.lat])
                .addTo(map)
        )
    },[])



    return(
        <div 
        ref={el => mapContainer.current = el} id='mapbox' 
        style={styles}/>
        )
}

export default Mapbox