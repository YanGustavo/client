import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};
const useFormLogin = (activeLogin: any) => { 
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {register, control, handleSubmit, formState:  { errors }} = useForm<FormValues>();
  const submitHandler = () => {
    activeLogin(email, password);
  };
  
 return{
  email,
  password,
  errors,
  setEmail,
  setPassword,
  handleSubmit,  
  register,
  submitHandler,
  control,
};  
}
export default useFormLogin;