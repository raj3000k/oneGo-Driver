import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from "react";
import 'react-phone-number-input/style.css'
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import './Tab3.css';
type E164Number = string;



  // Initialize state with undefined or E164Number
  

  // Assuming this is your onChange handler
  
const Tab3: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/tab2"); 
  };
  const [value, setValue] = useState<E164Number | undefined>();
  const handleChange = (newValue?: E164Number | undefined) => {
    // Update state with the new value
    setValue(newValue);
  };
  return (
    
 <IonPage className='bg-white  overflow-auto' >
    <form className='p-2 '>
    <div className=' flex flex-col -my-20 p-8'>
    <img
            className="mx-auto h-25 w-25"
            src="src/assets/logo.png"
            alt="Your Company"
          />
          </div>

      <div className="space-y-1 ">
        <div className="border-b border-gray-900/10 pb-1 -mt-15 ">
          <h1 className=" font-semibold leading-7 text-gray-900 text-3xl ">Driver Registration</h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill all the details carefully.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-1">
              <label htmlFor="fisrtname" className="block text-sm font-medium leading-6 text-gray-900">
                Fisrt Name
              </label>
              
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="firstname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="lastname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-4">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Ph No
              </label>
              
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <PhoneInput
                     value={value}
                     onChange={handleChange}
                     placeholder="Ph No"
                    className=" flex w-full rounded-md border bg-transparent pl-1 text-gray-900 
                     placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6  "
                    
                  />
                </div>
              </div>
              <div className="mt-4">
              <label htmlFor="liscence" className="block text-sm font-medium leading-6 text-gray-900">
                Driving Liscence No
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset
                 ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="liscence"
                    id="liscence"
                    autoComplete="liscence"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Driving Liscence No"
                  />
                </div>
              </div>
              

              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="vehicle" className="block text-sm font-medium leading-3 text-gray-900">
                Add Vehicle Details
              </label>
              <div className="lex rounded-md shadow-sm ring-1 ring-inset
                 ring-gray-300 focus-within:ring-2 focus-within:ring-inset mt-2 focus-within:ring-indigo-600 sm:max-w-md">
              <input
                    type="text"
                    name="vehicle"
                    id="vehicle"
                    autoComplete="vehicle"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Vehicle No"
                  />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Enter Complete Vehicle Details.</p>
            </div>

            <div className=" flex flex-col  items-center ">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload Id Proof
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-8 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-[#1656B7] 
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2
                       hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">Aadhar card/Pan Card/ Passport</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Vehicle Insurance Details</h2>
          

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            

            <div className="sm:col-span-4">
              <label htmlFor="ins" className="block text-sm font-medium leading-6 text-gray-900">
                Previous Insurance Policy
              </label>
              <div className="sm:col-span-2">
             
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5
                   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>


          </div>
        </div>

      
      </div>

      <button 
      className=' text-white p-2 rounded-md bg-[#1656B7] h-8 w-full' onClick={handleClick}
      >Next</button>
    </form>
    </IonPage>
  )
  }

export default Tab3;
