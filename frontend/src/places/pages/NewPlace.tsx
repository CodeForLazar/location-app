import { FormEvent, useCallback, useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import useFormHook from '../../shared/hooks/useFormHook';
import {
   VALIDATOR_TYPE_REQUIRE,
   VALIDATOR_TYPE_MINLENGTH
} from '../../shared/util/validators';


const NewPlace = (props: any) => {

   const { formData, onInput } = useFormHook({
      title: {
         value: "",
         isValid: false
      },
      description: {
         value: "",
         isValid: false
      },
      address: {
         value: "",
         isValid: false
      },

   }, false);



   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log("asdf"); // send this to the backend!
   };

   return (
      <form className="place-form" onSubmit={onSubmit}>
         <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_TYPE_REQUIRE]}
            errorText="Please enter a valid title."
            onInput={onInput}
         />
         <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_TYPE_MINLENGTH]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={onInput}
         />
         <Input
            id="address"
            element="input"
            label="Address"
            validators={[VALIDATOR_TYPE_REQUIRE]}
            errorText="Please enter a valid address."
            onInput={onInput}
         />
         <Button type="submit" disabled={!formData.isFormValid}>
            ADD PLACE
         </Button>
      </form>
   );
};

export default NewPlace;