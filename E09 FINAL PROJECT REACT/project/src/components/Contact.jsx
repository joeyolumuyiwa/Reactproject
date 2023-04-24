import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
function sendMail(){
  const link = "mailto:joe.olumuyiwa@gmail.com"
          + "&subject=" + encodeURIComponent("This is my subject")
          + "&body=" + encodeURIComponent(document.getElementById("comment"));
          window.location.href = link;
        }


  return (
    <div>
      <h2>Contact</h2>
      <hr />
      <h3>E-MAIL</h3>
      <p>joe.olumuyiwa@gmail.com</p>
      <h3>Social Network</h3>
      <FontAwesomeIcon icon={faArrowRight} />
      <a
        className="linkedin"
        href="http://https://www.linkedin.com/in/joseph-olumuyiwa-3911371/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <br />
      <FontAwesomeIcon icon={faArrowRight} />
      <a
        className="github"
        href="https://github.com/joeyolumuyiwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>


      <div className="container mt-3 contactContent">
            <h1 className="text-center">Contact Me</h1>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <div style={{maxWidth:"100%",overflow:"hidden",color:"red",width:"500px",height:"500px"}}>
                        <div id="embedmap-canvas" style={{height:"100%", width:"100%",maxWidth:"100%"}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.9005965823208!2d12.386205076889773!3d51.29455332622978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f990c2deb4c3%3A0x8561b347e029b987!2sGersterstra%C3%9Fe%2015%2C%2004279%20Leipzig!5e0!3m2!1sde!2sde!4v1681892670101!5m2!1sde!2sde" style={{width:"100%", height:"100%", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <a className="googlemaps-html" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a>
                        
                    </div>
                </div>

                <div className="col-lg-6">
                    <form>
                        <input type="text" className="form-control form-control-lg" placeholder="Name"/>
                        <input type="email" className="form-control mt-3" placeholder="Email"/>
                        <input type="text" className="form-control mt-3" placeholder="Subject"/>
                        <div className="mb-3 mt-3">
                            <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button type="button" onClick={sendMail()} className="btn btn-success mt-3">Contact Me</button>
                    
                </div>

            </div>
        </div>

    </div>
  );
};

export default Contact;
