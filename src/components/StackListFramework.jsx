import Mongo from "../assets/languagesLogo/mongo.svg";
import Express from "../assets/languagesLogo/express.svg";
import Node from "../assets/languagesLogo/node.svg";
import React from "../assets/languagesLogo/react.svg";
import Symfony from "../assets/languagesLogo/symfony.svg";


function StackListFramework() {
  return (
    <>
                  <div className="stack-skill">
            <img className="stack-skill-logo" src={React} alt="react" />
          </div>
          <div className="stack-skill">
            <img className="stack-skill-logo" src={Node} alt="node" />
          </div>
          <div className="stack-skill">
            <img
              className="stack-skill-logo"
              src={Express}
              alt="express"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(318deg) brightness(104%) contrast(104%)",
              }}
            />
          </div>
          <div className="stack-skill">
            <img className="stack-skill-logo" src={Symfony} alt="symfony" style={{
              filter:
                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(318deg) brightness(104%) contrast(104%)",
            }}/>
          </div>
          <div className="stack-skill">
            <img className="stack-skill-logo" src={Mongo} alt="mongo" />
          </div>
    </>
  )
}

export default StackListFramework