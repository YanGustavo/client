import {Card, Action,Button,} from "@/ui/pages/components/cards-model/profile";
import {Container, ContainerFlush} from "templates/base/style";
//icons
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import Favorite from "@mui/icons-material/Favorite";
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
//hooks
import useProfile from "./hooks/useProfile";
//context
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

export default function ProfilePage() {
  const {content} = useProfile(); 
  const [{profile_page}, actions] = useBaseContext();
  return (
    <>    
    <Card>
    <Action>
      <Button onClick={() => actions.order()}><SummarizeRounded/></Button>
    <Button onClick={() => actions.favorite()}><Favorite/></Button>
    <Button onClick={() => actions.message()}><EmailIcon/></Button>
    <Button onClick={() => actions.config()}><SettingsIcon/></Button>
    </Action>
    </Card>
    
    <Container>
      <ContainerFlush>{content}</ContainerFlush>
    </Container>  
  </>
  );
}