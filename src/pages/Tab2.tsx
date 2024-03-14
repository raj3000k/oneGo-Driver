import React from 'react';
import { IonIcon, IonContent, IonButtons, IonHeader, IonMenuButton, IonMenu, IonPage, 
  IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { carOutline } from 'ionicons/icons'; // Assuming you want to use a car icon

import ExploreContainer from '../components/ExploreContainer';

// Example profile image
import profileImage from '../assets/profile.png';

// Map Box Integration
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect, useRef, useState } from "react";
import MapGL, { Marker } from 'react-map-gl';


// MapBox Integration Imports Ends


interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Tab2: React.FC = () => {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: 21.2497, // Initialize latitude
    longitude: 81.6050, // Initialize longitude
    zoom: 3.5,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, []);
  
  
  return (
    <>
      <IonMenu contentId="main-content" side="start">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {/* Profile Section */}
            <IonItem>
  <IonAvatar style={{ width: '70px', height: '70px', border: '5px solid #fff' }}>
    <img src={profileImage} alt="Profile" />
  </IonAvatar>
  <IonLabel>
    <h2>Your Name</h2>
    <p>Your Email</p>
  </IonLabel>
</IonItem>
            {/* Menu options */}
            <IonItem routerLink="/edit-profile">
              <IonLabel>Edit my profile </IonLabel>
            </IonItem>
            <IonItem routerLink="/my-rides">
  <IonIcon icon={carOutline} slot="start" />
  <IonLabel>My Rides</IonLabel>
</IonItem>
            <IonItem routerLink="/settings">
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content" className='bg-white'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            
          </IonToolbar>
        </IonHeader>


        { <Map
        mapboxAccessToken="pk.eyJ1IjoiaGFyc2h1MDcxMSIsImEiOiJjbG9ncmpqMmsxMzNxMmlxcGpqM21uOHVjIn0.UNBaBHVEWs9ogPvEZcPyoQ"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map> } 


              

       
      </IonPage>
    </>
  );
};

export default Tab2;
