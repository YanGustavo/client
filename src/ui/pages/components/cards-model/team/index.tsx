import * as STeam from './styles';
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Team= () => {

return (
  <STeam.Body>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div className="team-content">
          <h3 className="name">Michele Miller</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FacebookIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><GoogleIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><TwitterIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><LinkedInIcon/></a></li>
        </ul>
      </div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div className="team-content">
          <h3 className="name">Patricia Knott</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
        <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FacebookIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><GoogleIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><TwitterIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><LinkedInIcon/></a></li>
        </ul>
      </div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=856"/>
        </div>
        <div className="team-content">
          <h3 className="name">Yan Gustavo</h3>
          <h4 className="title">SEO</h4>
        </div>
        <ul className="social">
        <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FacebookIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><GoogleIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><TwitterIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><LinkedInIcon/></a></li>
        </ul>
      </div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
        </div>
        <div className="team-content">
          <h3 className="name">Mary Huntley</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
        <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FacebookIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><GoogleIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><TwitterIcon/></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><LinkedInIcon/></a></li>
        </ul>
      </div>
    </STeam.Body>
  );
  };
  export default Team;