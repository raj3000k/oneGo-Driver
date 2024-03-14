import { IonContent, IonHeader, IonPage,IonImg, IonTitle, IonToolbar } from '@ionic/react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

import { useState } from "react";
import 'react-phone-number-input/style.css'
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import './Tab3.css';
type E164Number = string;


  
  
const newPage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/frontpage"); 
  };
  const [value, setValue] = useState<E164Number | undefined>();
  const handleChange = (newValue?: E164Number | undefined) => {
    // Update state with the new value
    setValue(newValue);
  };
  return (
    
 <IonPage className='bg-white  overflow-auto' >
  
    <h1> Hello </h1>
    </IonPage>
  )
  }

export default newPage;
