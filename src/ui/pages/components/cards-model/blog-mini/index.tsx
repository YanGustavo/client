import * as SBlogMini from "./styles";
export default function BlogMini() {
return(
<SBlogMini.Body>
  <div className="blog-card">
    <img className="blog-img" src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
    <div className="text-overlay">
      <h2>Essential Atom Packages</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus... &nbsp;&nbsp;<a href="#" className="read-more">Read More</a></p>
    </div>
  </div>
</SBlogMini.Body>
  )
  }