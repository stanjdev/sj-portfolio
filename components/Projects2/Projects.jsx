/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
// import './css/Projects.css';
import AOS from 'aos';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Link from 'next/link';

const GOODREADSURL = 'https://goodreads-reviews.onrender.com'

export default function Projects() {
  const [goodReadsLink, setGoodReadsLink] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();

    checkForGoodReadsResponseStatus()
  }, [])

  const checkForGoodReadsResponseStatus = async () => {
    // With cors-anywhere, you must temporarily unlock access to it by pressing button: https://cors-anywhere.herokuapp.com/corsdemo 
    // fetch url, if 503 error here
    await fetch(GOODREADSURL, {
      mode: 'cors',
      headers: {
        "Content-Type": "text/xml",
        "X-PINGOTHER": "pingpong",
      },
    }).then(function(response) {
      console.log("result response: ", response)
      console.log(`response status code for goodreads link: ${response.status}`)
      if (response.status !== 200) {
        setGoodReadsLink('')
      } else {
        setGoodReadsLink(GOODREADSURL)
      }
    }).catch(function(err) {
      console.error("error is: ", err)
    })
  }

  return(
      <div>
        <section className="Projects">
          <h1 data-aos="fade-down" data-aos-delay="0">PROJECTS</h1>

          <ProjectComponent
            title="SHOPIFY, SHOP CASH"
            name="shopify"
            description={"Shop Cash rewards points on Shopify's Shop mobile app."}
            createdWith={"Built with React Native, TypeScript, GraphQL, and Jest"}
            imgWidth={600}
            imgLink="shopify/shop-cash.webp"
            liveLink="https://shop.app/"
            reverseAlign
          />
          
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
            liveLink="https://apps.apple.com/us/app/memoir-breathing/id1544869710"
            ghLink="https://github.com/stanjdev/memoir"
          />

          <ProjectComponent
            title="REALYZER"
            name="realyzer"
            description={"A multi-variable calculator for real-estate investors."}
            createdWith={"Made with React, Redux, Next.js, JavaScript, CSS, Mapbox API, and Cheerio.js."}
            imgLink="gifs/realyzer-walkthrough.gif"
            linkAlt="Realyzer Real Estate Deal Analyzer project"
            imgAlt="Realyzer Real Estate Deal Analyzer gif image"
            liveLink="https://realyzer.app/"
            ghLink="https://github.com/stanjdev/realyzer"
            reverseAlign
          />

          <ProjectComponent
            title="NFT MARKETPLACE"
            name=""
            description={"A responsively-designed marketplace to discover digital art & collect NFTs."}
            createdWith={"Made with React, TypeScript, CSS, and HTML."}
            imgWidth={600}
            imgLink="nft-marketplace.png"
            linkAlt="nft-marketplace project"
            imgAlt="nft-marketplace-image"
            liveLink="https://nft-marketplace-anima.vercel.app/"
            ghLink="https://github.com/stanjdev/nft-marketplace"
          />

          <ProjectComponent
            title="GOODREADS REVIEWS"
            name="goodreads"
            description={"Create an account, search for, and leave reviews for your favorite books."}
            createdWith={"PERN stack application built with the GoodReads API, React, Redux, Express.js, Node.js, PostgreSQL, Bootstrap, React Router, axios, Heroku, and Render."}
            imgLink="gifs/goodreads-reviewing-books.gif"
            linkAlt="goodreads project"
            imgAlt="GoodReads Reviews GIF image"
            liveLink={GOODREADSURL}
            ghLink="https://github.com/stanjdev/goodreads"
            reverseAlign
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
            reverseAlign
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
EXAMPLE:
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
      <Link legacyBehavior href={name && `projects/${name}` || liveLink} alt={linkAlt}>
        <a target={!name ? "_blank" : undefined} rel="noopener noreferrer">
          <div className="projectImage re-deal-analyzer">
            <img src={`project_images/${imgLink}`} alt={imgAlt} width={imgWidth || null}/>
          </div>
        </a>
      </Link>
      <div className="projectText">
        <Link legacyBehavior href={name && `projects/${name}` || liveLink}>
          <a target={!name ? "_blank" : undefined} rel="noopener noreferrer">
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{description} <br/> {createdWith}</p>
        {name && <Link legacyBehavior href={`/projects/${name}`}><a><button className="caseStudyButton">Case Study</button></a></Link> || null}
        <p>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">{liveLink && 'Live'}{liveLink === GOODREADSURL && <small style={{fontSize: 12}}> (may take 1 minute to load)</small>}</a>
          {liveLink && ghLink && ' | '} 
          <a href={ghLink} target="_blank" rel="noopener noreferrer">{ghLink && 'GitHub'}</a>
        </p>
      </div>
    </div>
  )
}
