import React from 'react';
import { useForm } from 'react-hook-form';
import SignInPage from '../pages/sing-in';
import RegisterPage from '../pages/register';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

// type FormValues = {
//   email: string;
//   password: string;
// };
const useLoginPage = () => {
  //login SetPages
    const [content, setContent] = React.useState(<Loading/>); 
    const [{ login_page, loading }, actions] = useBaseContext();
    //login Functions
    const [email, setEmail] = React.useState("");
    const {register, control, handleSubmit, formState:  { errors }} = useForm(); //<FormValues>
    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
    });
    function navigate(){
      if (login_page === actionTypes.SET_SIGNIN_PAGE) {
        setContent(<SignInPage actions={actions}/>);
      }else if (login_page === actionTypes.SET_REGISTER_PAGE) {
        setContent(<RegisterPage actions={actions}/>);
      }else{
        setContent(<SignInPage actions={actions}/>);
      }
    }

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

    
  // React.useEffect(() => {
  //   if (userInfo) {
  //    router.push(redirect || '/');
  //   }
  // }, [userInfo, router, redirect]);
  const google = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
  };
  const activeLogin= (email, password) => { //:any :any
    // dispatch(login(email, password));
  };

        React.useEffect(() => {
          navigate();
        },[login_page]);
  
  return{ 
    email,
    content,
  errors,
  values,
  control,  
  handleSubmit,  
  register,
  loading,
  setEmail,
  submitHandler,
  handleClickShowPassword,
  handleMouseDownPassword,
  handlePasswordChange,
  activeLogin,
  google,
   
  };

}
export default useLoginPage;