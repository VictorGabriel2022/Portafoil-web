import "./cv.css";
function Cv() {
  return (
    <div className="experience">
      <h1>My Experience</h1>
      <ul>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">2021 al 2023</div>
          <div className="title">Egresado:</div>
          <div className="descr">
            Instituto de Educación Superior Tecnológico IDAT
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">Lenguajes:</div>
          <div className="title"></div>
          <div className="descr">React , JavaScript,Css,Html,MySql,</div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">Diplomas:</div>
          <div className="title"></div>
          <div className="descr">
            <p>• Scrum Fundamentals Certified (SFC™)</p>
            <p>
              • https://www.scrumstudy.com
              /certification/verify?type=SFC&number=956644
            </p>
            <p>• CCNAv7: Introducción a Redes</p>
            <p>• IT Essentials: PC Hardware and Software</p>
            <p>• Partner: NDG Linux Essentials</p>
            <p>• Partner: PCAP - Programming Essentials in Python</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Cv;
