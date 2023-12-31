import "../../css/Portfolio.css";
import ProjectCard from "../ProjectCard";

import Clicker from "../../assets/thumbnail/Clicker.jpg";
import Calc from "../../assets/thumbnail/Calc.jpg"
import Cat from "../../assets/thumbnail/Cat.jpg"
import Weather from "../../assets/thumbnail/Weather.jpg"

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="main-content">
        <h2
          style={{ fontWeight: "lighter", opacity: 0.5, textAlign: "center" }}
        >
          PORTFOLIO
        </h2>
        <div className="portfolio-projects">
          <ProjectCard
            name={"SpaceBar Clicker"}
            desc={
              "Un jeu où vous devez presser la barre espace pour augmenter votre score. 3 power-ups sont disponibles pour vous aider à augmenter votre score le plus vite possible."
            }
            thumbnail={Clicker}
            link={"https://spacebar-clicker-23fc2.web.app"}
            sourceCodeLink={"https://github.com/RayanEreteo/ClickerGame"}
          />
           <ProjectCard
            name={"Calculatrice"}
            desc={
              "Une calculatrice au design simple."
            }
            thumbnail={Calc}
            link={"https://reactcalculator-3f724.web.app"}
            sourceCodeLink={"https://github.com/RayanEreteo/react-calculator"}
          />
           <ProjectCard
            name={"Info Météo"}
            desc={
              "Une simple application météo ou vous récupérez les informations météorologique d'une ville."
            }
            thumbnail={Weather}
            link={"https://infometeo-78814.web.app"}
            sourceCodeLink={"https://github.com/RayanEreteo/WeatherApp"}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
