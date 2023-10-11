import Html from "../assets/languagesLogo/html5.svg"
import Css from "../assets/languagesLogo/css.svg"
import Javascript from "../assets/languagesLogo/js.svg"
import Php from "../assets/languagesLogo/php.svg"
import Python from "../assets/languagesLogo/python.svg"


function StackList() {
  return (
    <>
        <div className="stack-skill"><img className='stack-skill-logo' src={Html} alt="react" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Css} alt="css" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Javascript} alt="js" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Php} alt="php" /></div>
        <div className="stack-skill"><img className='stack-skill-logo' src={Python} alt="python" /></div>
    </>
  )
}

export default StackList