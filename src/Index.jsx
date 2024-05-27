import "./index.css";
function Index() {
  return (
    <div className="containerinfo">
     
      <div className="info">
        <object
          
          type="image/svg+xml"
          data="aaa.svg"
          height={300}
        />

        <div className="myinfo fade-in"> 
        <h1 className="fade-in">My Portafoil</h1>
          Mi nombre es Victor Manuel. Soy desarrollador Junior Front-end y
          Back-end con estudios en metodologias agiles y tradicionales con una
          amplia gama de manejo de lenguajes
          <div className="link">
            <a className="sublink" href="https://github.com/VictorGabriel2022">
              <span>My CV</span>
            </a>
            <a className="sublink" href="https://github.com/VictorGabriel2022">
                <span>My Github </span>
            </a>
          </div>
        </div>
      </div>
      <h2>Lenjuajes:</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          <img src="js.png" alt="JavaScript" />
          <img src="css-3.png" alt="CSS3" />
          <img src="html-5.png" alt="HTML5" />
          <img src="github.png" alt="GitHub" />
          <img src="science.png" alt="Science" />
          <img src="mysql.png" alt="MySQL" />
          <img src="js.png" alt="JavaScript" />
          <img src="css-3.png" alt="CSS3" />
          <img src="html-5.png" alt="HTML5" />
          <img src="github.png" alt="GitHub" />
          <img src="science.png" alt="Science" />
          <img src="mysql.png" alt="MySQL" />
        </div>
      </div>
    </div>
  );
}
export default Index;
