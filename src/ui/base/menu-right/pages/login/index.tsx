//components
import LoginCard from 'ui/pages/components/cards-model/login';
//hooks
import useLogin from "hooks/useLogin";

export default function LoginPage() {
  const { error, loading, redirect, activeLogin, google } = useLogin(); 
  return (
    <>
     <LoginCard activeLogin={activeLogin} google={google}/>
     </>
  );
}