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


          <div className="project" data-aos="fade-up" data-aos-delay="250">
              <Link href="/projects/kelp" alt="kelp project">
                <a>
                  <div className="projectImage kelp">
                    <img src="project_images/gifs/kelp-interactive-map.gif" alt="Kelp GIF"/>
                  </div>
                </a>
              </Link>
              <div className="projectText">
                
                <Link href="/projects/kelp">
                  <a>
                    <h2>KELP</h2>
                    <img src="project_images/kelp-mobile.png" alt="Kelp Image"/>
                  </a>
                </Link>
                <p>Search for your favorite restaurant in real time with responsive, interactive map view.<br />Built with the <strong>Yelp API</strong>, <strong>Mapbox API</strong>, <strong>React, Redux, JavaScript, SCSS, CSS Animations,</strong> and <strong>Flexbox.</strong></p>
                <Link href="/projects/kelp">Case Study</Link>
                <p><a href="https://kelp-search.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/kelp" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              </div>
            </div>


            <div className="projectReverse" data-aos="fade-up" data-aos-delay="350">
              <Link href="projects/goodreads" alt="goodreads project">
                <a>
                  <div className="projectImage goodreads">
                    <img src="project_images/gifs/goodreads-reviewing-books.gif" alt="GoodReads Reviews GIF"/>
                  </div>
                </a>
              </Link>
              <div className="projectText">
                
                <Link href="/projects/goodreads">
                  <a>
                    <h2>GOODREADS REVIEWS</h2>
                    <img src="project_images/goodreads.png" alt="GoodReads Reviews"/>
                  </a>
                </Link>
                <p>Log in, search for, and leave reviews for your favorite books! <br></br><strong>PERN</strong> stack application built with the <strong>GoodReads API</strong>, <strong>React, Redux, Express.js, Node.js, PostgreSQL, Bootstrap, React Router</strong>, and <strong>axios</strong>.</p>
                <Link href="/projects/goodreads">Case Study</Link>
                <p><a href="https://react-goodreads.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/goodreads" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              </div>
            </div>



            {/* <div className="project" data-aos="fade-up" data-aos-delay="450">
              <div className="projectImage" >
                <img src={Logo} alt=""/>
              </div>
              <div className="projectText">
                <h2>REAL ESTATE ANALYZER</h2>
                <p>Use this calculator to see if your new home is a good purchase! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga doloremque quo impedit illum voluptate deserunt deleniti porro ducimus quas quasi ut eius inventore quidem tenetur, et minus sit consequatur.</p>
              </div>
            </div> */}
            
            <div className="project" data-aos="fade-up" data-aos-delay="250">
              <a href="https://talo-apartments.vercel.app/" alt="talo apartments project" target="_blank" rel="noopener noreferrer">
                <div className="projectImage">
                  <img src="project_images/talo-apartments/talo.png" alt="talo apartments image" width="550px"/>
                </div>
              </a>
              <div className="projectText">
                <h2>TALO APARTMENTS</h2>
                <p><strong>Responsively designed</strong> static, single landing page for Talo Apartment buildings.<br></br>Made the <strong>SCSS</strong>, <strong>CSS Flexbox</strong>, <strong>CSS Grid</strong>, <strong>BootStrap</strong>, <strong>CSS Animation</strong>, <strong>img srcset</strong>, and, <strong>media queries</strong> to be responsive on desktop and mobile.</p>
              </div>
            </div>

          
            <div className="projectReverse" data-aos="fade-up" data-aos-delay="250">
              <a href="https://stanjdev.github.io/triplebyte/" alt="triplebyte project" target="_blank" rel="noopener noreferrer">
                <div className="projectImage triplebyte">
                  <img src="project_images/triplebyte.png" alt="Triplebyte image"/>
                </div>
              </a>
              <div className="projectText">
                <h2>TRIPLEBYTE</h2>
                <p><strong>Responsively designed</strong> static landing page mockup of a technology business.<br></br>Made the <strong>SCSS</strong>, <strong>CSS Flexbox</strong>, <strong>CSS Grid</strong>, <strong>CSS Animation</strong>, and, <strong>media queries</strong> to be responsive on desktop and mobile.</p>
              </div>
            </div>

            {/* <div className="project" data-aos="fade-up" data-aos-delay="350">
              <div className="projectImage">
                <img src={Logo} alt=""/>
              </div>
              <div className="projectText">
                <h2>MOVIE BROWSER MOBILE APP</h2>
                <p>Search for your favorite movie and navigate to see who starred, directed, and other information! <br></br> Built with <strong>React Native</strong> and <strong>Expo</strong></p>
              </div>
            </div>

            <div className="project" data-aos="fade-up" data-aos-delay="450">
              <div className="projectImage" >
                <img src={Logo} alt=""/>
              </div>
              <div className="projectText">
                <h2>PROJECT NAME</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga doloremque quo impedit illum voluptate deserunt deleniti porro ducimus quas quasi ut eius inventore quidem tenetur, et minus sit consequatur.</p>
              </div>
            </div> */}




          
          
          <div className="getInTouchContainer" data-aos="fade-right">
            <AnchorLink className="getInTouch" href="#contact" rel="noopener noreferrer" >
              GET IN TOUCH
              <div className="getInTouch-arrow">
                <div className="getInTouch-arrow-down"></div>
                <div className="getInTouch-arrow-square"></div>
              </div>
            </AnchorLink>
          </div>
        </section>
      </div>
  )
}