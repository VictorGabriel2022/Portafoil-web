import "./index.css";
import { BsGithub } from "react-icons/bs";
function Index() {
  return (
    <div className="containerinfo">
  <div className="wrapper">
      <img className="itemRight items1" src="js.png" alt="JavaScript" />
      <img src="css-3.png" className="itemRight items2" alt="CSS3" />
      <img src="html-5.png" className="itemRight items3" alt="HTML5" />
      <img src="github.png" className="itemRight items4"alt="GitHub" />
      <img src="science.png" className="itemRight items5" alt="Science" />    
      <img src="css-3.png" className="itemRight items6" alt="CSS3" />
       <img src="html-5.png" className="itemRight items7" alt="HTML5" />
        <img className="itemRight items8" src="mysql.png" alt="MySQL" />
      </div>
      <div className="info">
        <object type="image/svg+xml" data="aaa.svg" height={300} />
        <div className="myinfo fade-in">
          <h1 className="fade-in">My Portafoil</h1>
          Desarrollador Junior de React con habilidades en JavaScript, HTML, CSS y experiencia en la creación de aplicaciones web dinámicas y receptivas. Apasionado por aprender nuevas tecnologías y mejorar continuamente mis habilidades.
          <div className="link">
            <a className="sublink" href="https://github.com/VictorGabriel2022">
              <span>My CV</span>
            </a>
            <a className="sublink" href="https://github.com/VictorGabriel2022">
              <span>My Github <BsGithub style={{alignSelf:"center",marginLeft:1}}/></span>
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
      <img className="itemLeft items1" src="js.png" alt="JavaScript" />
      <img src="css-3.png" className="itemLeft items2" alt="CSS3" />
      <img src="html-5.png" className="itemLeft items3" alt="HTML5" />
      <img src="github.png" className="itemLeft items4"alt="GitHub" />
      <img src="science.png" className="itemLeft items5" alt="Science" />    
      <img src="css-3.png" className="itemLeft items6" alt="CSS3" />
       <img src="html-5.png" className="itemLeft items7" alt="HTML5" />
        <img className="itemLeft items8" src="mysql.png" alt="MySQL" />
      </div>
    </div>   
  
  );
}
export default Index;
