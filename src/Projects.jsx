import "./Proyects.css";
import { TbWorld } from "react-icons/tb";
import {FaCode} from "react-icons/fa";
function Projects() {
  return (
    <div className="containerproyects">
      <h1>Proyects</h1>
      <div className="proyects">
        <div className="proyects-sub1">
        <img src="/image copy 4.png" alt="" />
          <div className="enlaces"> 
             <a href="https://github.com/VictorGabriel2022/bazar-demoReactVite" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://victorgabriel2022.github.io/bazar-demoReactVite/" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
        </div>
        <div className="proyects-sub2">
        <img src="/image.png" alt="" />
          <div className="enlaces"> 
             <a href="https://github.com/VictorGabriel2022/bazar-demoReactVite" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://victorgabriel2022.github.io/bazar-demoReactVite/" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
        </div>
        <div className="proyects-sub3">
          <img src="/image copy 3.png"  alt="" />
          <div className="enlaces"> 
             <a href="https://github.com/VictorGabriel2022/bazar-demoReactVite" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://victorgabriel2022.github.io/ecomerce-angular/catalogo" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
         
        </div>
        <div className="proyects-sub4">
        <img src="/image copy.png" alt="" />
          <div className="enlaces"> 
             <a href="https://github.com/VictorGabriel2022/bazar-demoReactVite" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://lively-halva-cff51d.netlify.app" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
        </div>
        <div className="proyects-sub5">
        <img src="/image copy 2.png" alt="" />
          <div className="enlaces"> 
             <a href="https://victorgabriel2022.github.io/react-rickandmorty/" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://victorgabriel2022.github.io/react-rickandmorty/" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
        </div>
        <div className="proyects-sub6">
        <img src="/image.png" alt="" />
          <div className="enlaces"> 
             <a href="https://github.com/VictorGabriel2022/bazar-demoReactVite" className="circle-button ">GitHub <FaCode /></a>
             <a href="https://victorgabriel2022.github.io/bazar-demoReactVite/" className="circle-button ">Web Demo <TbWorld /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
