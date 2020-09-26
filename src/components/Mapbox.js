import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import "./mapbox.css"

const Mapbox = () => {
  const mapContainer = useRef(null)
  const locations = [
    { lng: -73.92059, lat: 40.76652 },
    { lng: -73.91663, lat: 40.7643 },
    { lng: -73.93165, lat: 40.77291 },
    { lng: -73.92312, lat: 40.76611 },
    { lng: -73.91697, lat: 40.7734 },
  ]

  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74, 40.72],
      zoom: 10.3,
    })
    locations.forEach(loc => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        "This is a test location"
      )
      new mapboxgl.Marker()
        .setLngLat([loc.lng, loc.lat])
        .setPopup(popup)
        .addTo(map)
    })
  }, [])

  return <div ref={el => (mapContainer.current = el)} id="mapbox" />
}

export default Mapbox
