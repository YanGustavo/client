//import {CheckOut,} from '../../styles';
import Button from "components/Button";
import {Container} from "templates/base/ui/menu-right/styles";
import {CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardInput, CardInputPassWord, CardOptionsNote,  CardOptions, CardIcon, CardOptionsItem, CardButton, CardLink} from '../../styles';
import {P, Hr,} from "components/Typography";

//hooks
import useLoginPage from "../../hooks/useLoginPage";
import IsolateReRender from "functions/isolate-re-render";
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function SignInPage({actions}) {
  const {email, errors, values, control,  handleSubmit, register, setEmail,submitHandler, handleClickShowPassword, handleMouseDownPassword,handlePasswordChange, google,} = useLoginPage()
  return (
    <> 
    <Container>
    <CardWrapper>
    <CardHeader>
      <CardHeading>Entrar</CardHeading>
    </CardHeader>

    <CardBody>
      <CardFieldset>
        <CardInput  {...register('email', {
              required: 'Por valor entre com seu E-mail!',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Digite um email válido.',
              },
            })} placeholder="E-mail" type="text"  value={email}
            onChange={(e) => setEmail(e.target.value)} required />
      </CardFieldset>

      <CardFieldset>
        <CardInputPassWord {...register('password', {
          required: 'Por favor digite a senha!',
          minLength: { value: 6, message: 'Senha precisa ser maior que 5 letras.' },
        })}
         placeholder="Senha" required
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        
        />
        <CardIcon onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
        {values.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        </CardIcon>
      </CardFieldset>

      <CardFieldset>
        <CardOptionsNote><Hr><h1>... entre com:</h1><p><DownhillSkiingIcon/></p></Hr></CardOptionsNote>

        <CardOptions>
          {/* <CardOptionsItem>
            <CardIcon className="fab fa-google" big />
          </CardOptionsItem>

          <CardOptionsItem>
            <CardIcon className="fab fa-twitter" big />
          </CardOptionsItem>

          <CardOptionsItem>
            <CardIcon className="fab fa-facebook" big />
          </CardOptionsItem> */}
          <button onClick={google} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
     >
       <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
         <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
         <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
         <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
         <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
       </svg>
       Login com Google
     </button>
        </CardOptions>
      </CardFieldset>

      <CardFieldset>
        <CardButton type="button" onSubmit={handleSubmit(submitHandler)}>Entrar <LoginIcon/></CardButton>
      </CardFieldset>
      <CardFieldset>
      {errors?.email && (<div className="text-red-500">{errors.email.message}</div>
          )} 
      </CardFieldset>
      <IsolateReRender control={control} />
      <CardFieldset>
      {errors?.password && (
             <div className="text-red-500 ">{errors.password.message}</div>
          )}
      </CardFieldset>
      <CardFieldset>
        <CardLink onClick={() => actions.setRegisterPage()}>Não tenho Conta!</CardLink>
      </CardFieldset>
    </CardBody>
  </CardWrapper>
  </Container>
     </>
  );
}