//import {CheckOut,} from '../../styles';
import Button from "components/Button";
import {Container} from "templates/base/ui/menu-right/styles";
import {CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardInput, CardInputPassWord, CardOptionsNote, Hr, CardOptions, CardIcon, CardOptionsItem, CardButton, CardLink} from '../../styles';

//hooks
import useLoginPage from "../../hooks/useLoginPage";
import IsolateReRender from "functions/isolate-re-render";
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function RegisterPage({actions}) {
  const {email, errors, values, control,  handleSubmit, register, setEmail,submitHandler, handleClickShowPassword, handleMouseDownPassword,handlePasswordChange, google,} = useLoginPage()
  return (
    <> 
    <Container>
    <CardWrapper>
    <CardHeader>
      <CardHeading>Registrar-se</CardHeading>
    </CardHeader>

    <CardBody>
      <CardFieldset>
        <CardInput
             placeholder="Nome de Usuário" type="text" required />
      </CardFieldset>

      <CardFieldset>
        <CardInput  {...register('email', {
              required: 'Por valor entre com seu E-mail!',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Digite um email válido.',
              },
            })} placeholder="Digite o E-mail que você usa!" type="text"  value={email}
            onChange={(e) => setEmail(e.target.value)} required />
      </CardFieldset>

      <CardFieldset>
        <CardInputPassWord {...register('password', {
          required: 'Por favor digite a senha!',
          minLength: { value: 6, message: 'Senha precisa ser maior que 5 letras.' },
        })}
         placeholder="Crie sua Senha!" required
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}        
        />
        <CardIcon onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
        {values.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        </CardIcon>
        <CardInputPassWord {...register('password', {
          required: 'Por favor digite a senha Novamente!',
          minLength: { value: 6, message: 'Senha precisa ser maior que 5 letras.' },
        })}
         placeholder="Digite a Senha Novamente!" required
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}        
        />
        <CardIcon onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
        {values.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        </CardIcon>
      </CardFieldset>    
      <CardFieldset>
      {errors?.email && (<div className="text-red-500">{errors.email.message}</div>
          )} 
      </CardFieldset>
      <CardFieldset>
        <CardButton type="button" onSubmit={handleSubmit(submitHandler)}>Cadastrar-se<LoginIcon/></CardButton>
        {/* <CelebrationIcon/> */}
      </CardFieldset>
      <IsolateReRender control={control} />
      <CardFieldset>
      {errors?.password && (
             <div className="text-red-500 ">{errors.password.message}</div>
          )}
      </CardFieldset>
      <CardFieldset>
        <CardLink onClick={() => actions.setSingInPage()}>Já tenho Conta!</CardLink>
      </CardFieldset>
    </CardBody>
  </CardWrapper>
  </Container>
     </>
  );
}