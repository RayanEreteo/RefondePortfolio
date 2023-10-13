import "../../css/Contact.css"

import Git from "../../assets/socialNetworks/github.svg"
import Linkedin from "../../assets/socialNetworks/linkedin.svg"

function Contact() {
  return (
    <div id="contact">
      <div className="main-content">
        <h2
          style={{ fontWeight: "lighter", opacity: 0.5, textAlign: "center" }}
        >
          CONTACT
        </h2>
        <div className="contact-form-container">
            <form action="https://formsubmit.co/rayabf5@gmail.com" method="POST" className="contact-form">
                <h2>Me contacter</h2>
                <br />
                <input type="email" name="email" required placeholder="votre email...."/>
                <textarea name="body" id="body" cols="30" rows="10" maxLength={100} placeholder="votre message...." required></textarea>
                <p>Le message sera envoyé a l'email suivant : rayabf5@gmail.com</p>
                <br />
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <div className="social-networks">
          <a href="https://github.com/RayanEreteo"><img src={Git} alt="github" /></a>
          <a href="https://www.linkedin.com/in/rayan-ereteo-6998b9254/"><img src={Linkedin} alt="linkedin" /></a>
        </div>
        <div className="mark" style={{marginTop: "5rem", margin: "13px"}}>
          <p>Développer par Rayan Ereteo (2023)</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;