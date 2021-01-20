import React, {useEffect} from 'react';
// import './css/Projects.css';
import AOS from 'aos';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Link from 'next/link';

export default function Projects() {
  
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, [])

  return(
      <div>
        <section className="Projects">
          <h1 data-aos="fade-down" data-aos-delay="0">PROJECTS</h1>

          <ProjectComponent 
            title="MEMOIR" 
            name="memoir" 
            description={"Breathing & Meditation Mobile Application for iOS and Android."} 
            createdWith={"Created using React Native, Expo, JavaScript, CSS, and Google Firebase."}
            // imgLink="memoir/app-icon.png"
            imgWidth={600}
            imgLink="memoir/memoir-thumbnail.gif"
            linkAlt="Memoir Breathing Meditation App Image Link"
            imgAlt="Memoir Breathing Meditation App Icon"
            liveLink="https://expo.io/@stan.dev/projects/Memoir"
            ghLink="https://github.com/stanjdev/memoir"
          />

          <ProjectComponent 
            title="REALYZER" 
            name="realyzer" 
            description={"A multi-variable calculator for real-estate investors."} 
            createdWith={"Made with the React, Redux, Next.js, JavaScript, CSS, Mapbox API, and Cheerio.js."}
            imgLink="gifs/realyzer-walkthrough.gif"
            linkAlt="Realyzer Real Estate Deal Analyzer project"
            imgAlt="Realyzer Real Estate Deal Analyzer gif image"
            liveLink="https://realyzer.app/"
            ghLink="https://github.com/stanjdev/realyzer"
            reverseAlign
          />

          <ProjectComponent 
            title="GOODREADS REVIEWS" 
            name="goodreads" 
            description={"Create an account, search for, and leave reviews for your favorite books."} 
            createdWith={"PERN stack application built with the GoodReads API, React, Redux, Express.js, Node.js, PostgreSQL, Bootstrap, React Router, axios, and Heroku."}
            imgLink="gifs/goodreads-reviewing-books.gif"
            linkAlt="goodreads project"
            imgAlt="GoodReads Reviews GIF image"
            liveLink="https://react-goodreads.herokuapp.com/"
            ghLink="https://github.com/stanjdev/goodreads"
          />

          <ProjectComponent 
            title="KELP" 
            name="kelp" 
            description={"Search for your favorite restaurant in real time with responsive, interactive map."} 
            createdWith={"Built with the Yelp API, Mapbox API, React, Redux, JavaScript, SCSS, CSS Animations, and Flexbox."}
            imgLink="gifs/kelp-interactive-map.gif"
            linkAlt="kelp project"
            imgAlt="Kelp GIF"
            liveLink="https://kelp-search.vercel.app/"
            ghLink="https://github.com/stanjdev/kelp"
            reverseAlign
          />

          <ProjectComponent 
            title="TALO APARTMENTS" 
            name=""
            description={"Responsively designed static, single landing page for Talo Apartment buildings."} 
            createdWith={"Made the SCSS, CSS Flexbox, CSS Grid, BootStrap, CSS Animation, img srcset, and, media queries to be responsive on desktop and mobile."}
            imgLink="talo-apartments/talo.png"
            linkAlt="talo apartments project"
            imgAlt="talo apartments image"
            liveLink="https://talo-apartments.vercel.app/"
            ghLink="https://github.com/stanjdev/talo-real-estate"
          />
 
          <ProjectComponent 
            title="TRIPLEBYTE" 
            name=""
            description={"Responsively designed static landing page mockup of a technology business."} 
            createdWith={"Made the SCSS, CSS Flexbox, CSS Grid, CSS Animation, and, media queries to be responsive on desktop and mobile."}
            imgLink="triplebyte.png"
            linkAlt="triplebyte project"
            imgAlt="Triplebyte image"
            liveLink="https://stanjdev.github.io/triplebyte/"
            ghLink="https://github.com/stanjdev/triplebyte"
            reverseAlign
          />

          
          <div className="getInTouchContainer" data-aos="fade-right">
            <AnchorLink className="getInTouch lightConnect" href="#contact" rel="noopener noreferrer" >
              GET IN TOUCH
              <div className="getInTouch-arrow ">
                <div className="getInTouch-arrow-down lightConnect__arrows"></div>
                <div className="getInTouch-arrow-square lightConnect__arrows"></div>
              </div>
            </AnchorLink>
          </div>

        </section>
      </div>
  )
}

/* 
<ProjectComponent 
  title="MEMOIR" 
  name="memoir" 
  description={"Breathing & Meditation Mobile Application for iOS and Android."} 
  createdWith={"Created using React Native, Expo, JavaScript, CSS, and Google Firebase."}
  imgLink="memoir/app-icon.png"
  linkAlt="Memoir Breathing Meditation App Image Link"
  imgAlt="Memoir Breathing Meditation App Icon"
  liveLink="https://expo.io/@stan.dev/projects/Memoir"
  ghLink="https://github.com/stanjdev/memoir"
/>
*/

function ProjectComponent({ title, name, description, createdWith, imgLink, imgWidth, linkAlt, imgAlt, reverseAlign, liveLink, ghLink }) {
  return (
    <div className={reverseAlign? "projectReverse" : "project"} data-aos="fade-up" data-aos-delay="350">
      <Link href={name && `projects/${name}` || liveLink} alt={linkAlt}>
        <a target={!name ? "_blank" : undefined} rel="noopener noreferrer">
          <div className="projectImage re-deal-analyzer">
            <img src={`project_images/${imgLink}`} alt={imgAlt} width={imgWidth || null}/>
          </div>
        </a>
      </Link>
      <div className="projectText">
        <Link href={name && `projects/${name}` || liveLink}>
          <a target={!name ? "_blank" : undefined} rel="noopener noreferrer">
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{description} <br/> {createdWith}</p>
        {name && <Link href={`/projects/${name}`}><a><button className="caseStudyButton">Case Study</button></a></Link> || null}
        <p><a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a> | <a href={ghLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  )
}