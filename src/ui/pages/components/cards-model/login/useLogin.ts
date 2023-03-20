import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};
const useLogin = (activeLogin: any) => { 
  const [email, setEmail] = React.useState("");
  const {register, control, handleSubmit, formState:  { errors }} = useForm<FormValues>();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const submitHandler = () => {
    activeLogin(email, values.password);
  };
  
 return{
  email,
  errors,
  values,
  control,
  setEmail,
  handleSubmit,  
  register,
  submitHandler,
  handleClickShowPassword,
  handleMouseDownPassword,
  handlePasswordChange,
  
};  
}
export default useLogin;