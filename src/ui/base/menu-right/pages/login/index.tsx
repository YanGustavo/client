//components
// import LoginCard from 'ui/pages/components/cards-model/login';
// //hooks
// import useLogin from "hooks/useLogin";

// export default function LoginPage() {
//   const { error, loading, redirect, activeLogin, google } = useLogin(); 
//   return (
//     <>
//      <LoginCard activeLogin={activeLogin} google={google}/>
//      </>
//   );
// }
'use client'
//import Loading from "components/Loading";
//import {Container, ContainerFlush} from "templates/base/styles";
//hooks
import useLoginPage from "./hooks/useLoginPage";

export default function LoginPage() {
  const {content} = useLoginPage(); 

  return (
    <>    
        {content}  
     </>
  );
}