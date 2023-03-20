import {Container, ContainerFlush, ToggleMenu, Main, Template,} from './style';
import useBase from './useBase';

import Header from "ui/base/header";
import Footer from "ui/base/footer";
//icons header
import BarChart from "@mui/icons-material/BarChart";

const Base = ({children}: { children: React.ReactNode }) => {
 const {toggle_menu_visibility, actions} = useBase();
 console.log("toggle"+toggle_menu_visibility);
return (
  <Template>
    <Header>
     <ToggleMenu className={toggle_menu_visibility ? '' : 'hidden'}>
        <BarChart className="toggleIcon" onClick={() => actions.setMenuRightVisible()}/>
      </ToggleMenu> 
      </Header>
  <Main>
    {children}
  <Footer/>
  </Main>
  </Template>
)
}
export default Base;