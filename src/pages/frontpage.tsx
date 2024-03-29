import { IonIcon, IonContent, IonButtons, IonHeader, IonMenuButton, IonMenu, IonPage, 
    IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';

import CardOne from './components/cards';


const Frontpage: React.FC = () => {
  

 
  return (
    <div className='bg-white h-full w-full overflow-auto' >
       
        <div className='p-2'>
            <div className='text-black'>
            <h1>My Rides</h1></div>
            <div className='p-1 flex-row space-y-3 ' >
     <CardOne title="Passenger: Harsh"  fair={340} from="Delhi Airport" 
     dropped="Gurgaon Central" />
     <CardOne title="Passenger: Medha"  fair={507} from="Mahipalpur, Delhi" 
     dropped="Gurgaon Central" />

<CardOne title="Passenger: Raj"  fair={400} from="Vasant Kunj, Delhi" 
     dropped="Mahipalpur " />

<CardOne title="Passenger: Somya"  fair={550} from="Sarojini Nagar, Delhi" 
     dropped="Vasant Kunj Central" />
     </div>
     </div>
      
      
    
      </div>
  );
};

export default Frontpage;
