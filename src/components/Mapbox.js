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

    useEffect(()=>{
        mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container:mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74, 40.72],
            zoom: 10.3
        })
    },[])



    return(
        <div 
        ref={el => mapContainer.current = el} id='mapbox' 
        style={styles}/>
        )
}

export default Mapbox