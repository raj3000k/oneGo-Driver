import { IonContent, IonHeader, IonPage,IonImg, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/logo.png';
import { useHistory } from 'react-router-dom';
import {CardOne} from './components/cards';

import Tab2 from './Tab2';
import Tab3 from './Tab3';


const Tab1: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/tab3"); // navigate to the '/new' route
  };
  return (
    <IonPage className='bg-white	overflow-auto '>
     
     <div className=" min-h-full flex flex-col justify-center px-6 py-12 lg:px-8">
      
      </div>
    </IonPage>
    
  );
};

export default Tab1;
