import "./Proyects.css"
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
function CardProjects({img,title,context,linkcode,linkweb}){
    return(
       <div className="card">
          <img className="demo" src={img} alt="" /> 
          <h3 style={{margin:0}}>{title}</h3>      
          <p className="context">{context}</p>
          <div className="links" >
            <a className="linkss" href={linkcode}><span>Code <BsGithub /></span></a>
            <a className="linkss" href={linkweb}><span>Web <FaExternalLinkAlt /></span></a>
          </div>          
       </div>
    )
}
export default CardProjects