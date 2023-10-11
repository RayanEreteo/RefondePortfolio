import Mongo from "../assets/languagesLogo/mongo.svg";
import Express from "../assets/languagesLogo/express.svg";
import Node from "../assets/languagesLogo/node.svg";
import React from '../assets/languagesLogo/react.svg'

import Html from "../assets/languagesLogo/html5.svg"
import Css from "../assets/languagesLogo/css.svg"
import Javascript from "../assets/languagesLogo/js.svg"


function StackList() {
  return (
    <>
        <div className="stack-skill"><img className='stack-skill-logo' src={Html} alt="react" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Css} alt="css" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Javascript} alt="js" /></div>
    </>
  )
}

export default StackList