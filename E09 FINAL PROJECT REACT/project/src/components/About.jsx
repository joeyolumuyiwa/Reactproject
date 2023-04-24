import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Resume from "../images/JOSEPHOLUMUYIWA.pdf"

const About = () => {
  return (
    <div className='abouttext'>
      <div className='about'>
      <h1>About</h1>
      <hr />
      <p className='abouttextp'>I am Joseph Olumuyiwa, and I am searching for a job in Web Development. I have over 10 years of experience in related job positions. I started working as a Operation Agent in an IT company gradually moving to a Manager. I am a team player. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities my current job position cannot provide. I have enough experience to occupy a managing position and I will be glad to work on increasing the customer loyalty rate of your company. My professional expertise in operations can provide valuable insights and a fresh perspective on product development. Personally, I can acquire new knowledge and skills in product launch and management. I am ready for long-time cooperation.</p>
      <FontAwesomeIcon icon={faArrowRight} />
      <a target="_blank" href={Resume} without rel='noreferrer'><p className='curriculum'>curriculum vitae</p></a>
      </div>
      <div className="homeContainer">
        <div className="homeHtml">
          <div className="homeH1Span">
            <h1>HTML</h1>
            <span>
              HTML is the standard markup language for Web pages. With HTML you
              can create your own Website. HTML is easy to learn - You will
              enjoy it!
            </span>
          </div>
          <div className="homeImgContainer">
            <img src="/images/html.png" alt="" className="homeImg" />
          </div>
        </div>
        <div className="homeCss">
          <div className="homeH1Span2">
            <h1>CSS</h1>
            <span>
              CSS is the language we use to style an HTML document. CSS
              describes how HTML elements should be displayed. This tutorial
              will teach you CSS from basic to advanced.
            </span>
          </div>
          <div className="homeImgContainer2">
            <img src="/images/css.webp" alt="" className="homeImg2" />
          </div>
        </div>
        <div className="homeSass">
          <div className="homeH1Span3">
            <h1>Sass</h1>
            <span>
              Sass is a CSS pre-processor. Sass reduces repetition of CSS and
              therefore saves time. CSS with superpowers. Sass is the most
              mature, stable, and powerful professional grade CSS extension
              language in the world.
            </span>
          </div>
          <div className="homeImgContainer3">
            <img src="/images/sass.png" alt="" className="homeImg3" />
          </div>
        </div>
        <div className="homeReact">
          <div className="homeH1Span4">
            <h1>Reactjs</h1>
            <span>
              React is a JavaScript library for building user interfaces. React
              is used to build single-page applications. React allows us to
              create reusable UI components.
            </span>
          </div>
          <div className="homeImgContainer4">
            <img src="/images/react-js.png" alt="" className="homeImg4" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About