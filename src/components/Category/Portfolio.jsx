import "../../css/Portfolio.css";
import ProjectCard from "../ProjectCard";

import Clicker from "../../assets/thumbnail/Clicker.jpg";
import Calc from "../../assets/thumbnail/Calc.jpg"
import Cat from "../../assets/thumbnail/Cat.jpg"

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
              "Un simple jeu de clicker ou pouvez acheter des atouts avec vos points"
            }
            thumbnail={Clicker}
            link={"https://youtube.com"}
          />
           <ProjectCard
            name={"Calculatrice"}
            desc={
              "Un simple jeu de clicker ou pouvez acheter des atouts avec vos points"
            }
            thumbnail={Calc}
            link={"https://youtube.com"}
          />
           <ProjectCard
            name={"Génerateur de chat"}
            desc={
              "Un simple jeu de clicker ou pouvez acheter des atouts avec vos points"
            }
            thumbnail={Cat}
            link={"https://youtube.com"}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
