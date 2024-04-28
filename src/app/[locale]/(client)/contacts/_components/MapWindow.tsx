"use client";

import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import MapSkeleton from "@/components/ui//Skeletons/MapSkeleton/MapSkeleton";

const containerStyle = {
  width: "650px",
  height: "335px",
};

const center = {
  lat: 50.4501,
  lng: 30.5234,
};

function MapWindow() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    return <MapSkeleton />;
  }

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker
        position={{
          lat: center.lat,
          lng: center.lng,
        }}
      />
    </GoogleMap>
  );
}

export default MapWindow;
