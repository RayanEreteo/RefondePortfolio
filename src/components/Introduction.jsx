import "../css/Introduction.css";

// Logo stack import
import Mongo from "../assets/languagesLogo/mongo.svg";
import Express from "../assets/languagesLogo/express.svg";
import Node from "../assets/languagesLogo/node.svg";
import React from "../assets/languagesLogo/react.svg";

function Introduction() {
  return (
    <div className="introduction">
       <div className="line" style={{width: "200%", height: "6px", background: "grey"}}></div>
      <div className="main-container">
        <h2 className="main-title">RAYAN ERETEO</h2>
        <p className="catchword">Un développeur web full-stack</p>
        <div className="stack-container">
          <img className="stack-logo" src={Mongo} alt="MongoDB" />
          <img
            className="stack-logo"
            src={Express}
            alt="express"
            // changement de la couleur du logo express
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(318deg) brightness(104%) contrast(104%)",
            }}
          />
          <img className="stack-logo" src={React} alt="react" />
          <img className="stack-logo" src={Node} alt="node"  style={{width: '120px', height: '120px'}}/>
        </div>
        <h1 className="stack-name">M.E.R.N</h1>
      </div>
    </div>
  );
}

export default Introduction;
