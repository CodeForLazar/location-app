import { FormEvent, useState } from 'react';
import { useAppDispatch } from "../../store";
import { authActions } from "../../store/authSlice";

import Card from '../../shared/components/UiElements/Card';
import Input from '../../shared/components/FormElements/Input';
import useFormHook from '../../shared/hooks/useFormHook';
import { VALIDATOR_TYPE_EMAIL, VALIDATOR_TYPE_MINLENGTH, VALIDATOR_TYPE_REQUIRE } from "../../shared/util/validators";
import Button from '../../shared/components/FormElements/Button';

const Auth = () => {

   const dispatch = useAppDispatch();
   const [isLogin, setIsLogin] = useState(true);

   const { formData, onInput, changeFormData } = useFormHook({
      email: {
         value: "",
         isValid: false
      },
      password: {
         value: "",
         isValid: false
      }
   }, false);

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(authActions.login());
      console.log(formData)
   };

   const switchMode = () => {
      if (!isLogin) {
         changeFormData(
            {
               email: {
                  value: formData.inputs.email.value,
                  isValid: formData.inputs.email.isValid
               },
               password: {
                  value: formData.inputs.password.value,
                  isValid: formData.inputs.password.isValid
               }

            }, formData.inputs.email.isValid && formData.inputs.password.isValid);
      } else {
         changeFormData({ ...formData.inputs }, formData.isFormValid);
      }
      setIsLogin(prevState => !prevState);
   };

   return (
      <Card className={"authentication"}>
         <h2>{isLogin ? "Login Requierd" : "Register Now"}</h2>
         <hr />
         <form onSubmit={onSubmit}>
            {!isLogin && <Input
               element="input"
               id="id"
               type="text"
               label="Your Name"
               validators={[VALIDATOR_TYPE_REQUIRE]}
               errorText="Please enter a name."
               onInput={onInput} />}

            <Input
               id='email'
               element='input'
               type='email'
               label='Email'
               validators={[VALIDATOR_TYPE_EMAIL]}
               onInput={onInput}
               errorText="Please enter a valid email"
            />
            <Input
               id='password'
               element='input'
               type='password'
               label='Password'
               validators={[VALIDATOR_TYPE_MINLENGTH]}
               onInput={onInput}
               errorText="Please enter a valid password (at least 5 characters)"
            />
            <Button type="submit" disabled={!formData.isFormValid}>{isLogin ? "LOGIN" : "Register"}</Button>
         </form>
         <Button inverse onClick={switchMode}>SWITCH TO {isLogin ? "REGISTER" : "LOGIN"}</Button>
      </Card>
   )
}

export default Auth