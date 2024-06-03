import CardProjects from "./CardProjects";

function Projects() {
  return (
    <div className="cardproject">
      <CardProjects
        img="/image.png"
        title="Ecomerce Optica-React"
        context="Web created by Reactjs,css and html"
        linkcode="https://github.com/VictorGabriel2022/bazar-demoReactVite"
        linkweb="https://victorgabriel2022.github.io/bazar-demoReactVite/"
      />
       <CardProjects
        img="/image copy.png"
        title="Vision Check"
        context="App created by javascript,css and html"
        linkcode="https://github.com/VictorGabriel2022/bazar-demoReactVite"
        linkweb="https://lively-halva-cff51d.netlify.app/"
      />
        <CardProjects
        img="/image copy 2.png"
        title="Vision Check"
        context="Web consumiendo una api by Reactjs,css and html"
        linkcode="https://github.com/VictorGabriel2022/bazar-demoReactVite"
        linkweb="https://victorgabriel2022.github.io/bazar-demoReactVite/"
      />
      <CardProjects img="/image copy 3.png" context="Ecomerce-Angular" />
      <CardProjects img="/image copy 4.png" context="Calendario" />
      <CardProjects img="/portafolio.png" context="Portafolio" />
    </div>
  );
}
export default Projects;
