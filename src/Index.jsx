import "./index.css";
function Index() {
  return (
    <div className="containerinfo">
      <h1>My Portafoil</h1>
      <div className="info">
        <object
          className="fade-in"
          type="image/svg+xml"
          data="aaa.svg"
          height={300}
        />

        <div className="myinfo">
          Mi nombre es Victor Manuel. Soy desarrollador Junior Front-end y
          Back-end con estudios en metodologias agiles y tradicionales con una
          amplia gama de manejo de lenguajes
          <div className="link">
            <a className="sublink" href="https://github.com/VictorGabriel2022">
              My CV
            </a>
            <a className="sublink" href="https://github.com/VictorGabriel2022">
              My Github
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
