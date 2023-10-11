import "../../css/parcours.css";

import SkillsList from "../SkillsList";

function Parcours() {
  return (
    <div id="parcours">
      <div className="presentation">
        <h1 style={{ fontWeight: "lighter", opacity: 0.5 }}>Qui suis-je ?</h1>
        <br />
        <p className="presentation-text">
          Je suis un passionné du développement web avec une solide expérience
          de 2 ans dans la création de sites web innovants et fonctionnels.
          <br />
          <br />
          J'attache une grande importance à la conception d'interfaces
          utilisateur intuitives et esthétiquement agréables, tout en veillant à
          ce que chaque site que je crée soit performant, sécurisé et adapté à
          tous les appareils.
        </p>
      </div>
      <div className="soft-skills">
        <h2
          style={{ fontWeight: "lighter", opacity: 0.5, textAlign: "center" }}
        >
          SOFT SKILLS
        </h2>
        <div className="skills-set">
          <SkillsList />
        </div>
      </div>
      <div className="tech-stack"></div>
    </div>
  );
}

export default Parcours;
