import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UiElements/Card';
import useFormHook from '../../shared/hooks/useFormHook';
import { VALIDATOR_TYPE_REQUIRE, VALIDATOR_TYPE_MINLENGTH } from "../../shared/util/validators";

const DUMMY_PLACES = [
   {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
         lat: 40.7484405,
         lng: -73.9878584
      },
      creator: 'u1'
   },
   {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
         lat: 40.7484405,
         lng: -73.9878584
      },
      creator: 'u2'
   }
];


const UpdatePlace = (props: any) => {

   const [loading, setLoading] = useState(true);

   const params = useParams();
   const { placesId } = params;

   const currentPlace = DUMMY_PLACES.find((place) => place.id === placesId);


   const { formData, onInput } = useFormHook({
      title: {
         value: currentPlace && currentPlace.title,
         isValid: true
      },
      description: {
         value: currentPlace && currentPlace.description,
         isValid: true
      }
   }, true);

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData)
   }


   if (!currentPlace) {
      <div className='center'>
         <Card>
            <h2>Could not find place!</h2>
         </Card>
      </div>
   }

   if (!formData.inputs.title.value) {
      <div className='center'>
         <h2>Loading...</h2>
      </div>
   }

   return (
      <form className='place-form' onSubmit={onSubmit}>
         <Input
            id={"descriTitleption"}
            element={"input"}
            type="text"
            label="Title"
            validators={[VALIDATOR_TYPE_REQUIRE]}
            errorText="Please enter a valid title."
            onInput={onInput}
            initValue={formData.inputs.title.value}
         />
         <Input
            id={"description"}
            element={"textarea"}
            label="Description"
            validators={[VALIDATOR_TYPE_MINLENGTH]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={onInput}
            initValue={formData.inputs.description.value}
         />
         <Button type="submit" disabled={!formData.isFormValid}>
            UPDATE PLACE
         </Button>
      </form>
   )
}

export default UpdatePlace