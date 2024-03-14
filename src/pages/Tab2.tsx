import React from 'react';
import { IonIcon, IonContent, IonButtons, IonHeader, IonMenuButton, IonMenu, IonPage, 
  IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { carOutline } from 'ionicons/icons'; // Assuming you want to use a car icon

import ExploreContainer from '../components/ExploreContainer';

// Example profile image
import profileImage from '../assets/profile.png';

const Tab2: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content" side="start">
        <IonHeader>
          <IonToolbar color=" [#1656B7]">
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
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* Content of the main page goes here */}
          {/* Pass the name prop to ExploreContainer */}
          <ExploreContainer name="Your Name" />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
