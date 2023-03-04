import { useCallback, useState } from 'react';

type OnInput = (id: string, value: string, isValid: boolean) => void;

interface FomrData {
   inputs: {
      [key: string]: {
         value: string,
         isValid: boolean
      }
   }
   isFormValid: boolean
}

const useFormHook = (initialInputs: any, initFormValidity: any) => {

   const [formData, setFormData] = useState<FomrData>({
      inputs: initialInputs,
      isFormValid: initFormValidity
   });

   const onInput: OnInput = useCallback((id, value, isValid) => {
      setFormData(prevState => {
         let isFormValid = true;
         for (const input in prevState.inputs) {
            if (input === id) {
               isFormValid = isFormValid && isValid
            } else {
               isFormValid = isFormValid && prevState.inputs[input].isValid
            }
         }
         return {
            ...prevState,
            inputs: {
               ...prevState.inputs,
               [id]: {
                  value,
                  isValid
               }
            },
            isFormValid
         }
      })
   }, []);


   const changeFormData = (inputs: FomrData["inputs"], formValid: FomrData["isFormValid"]) => {
      console.log(inputs, formValid)
      setFormData(prevState => {
         return {
            ...prevState,
            inputs,
            formValid
         }
      })
   };

   return ({ formData, onInput, changeFormData });
}

export default useFormHook;