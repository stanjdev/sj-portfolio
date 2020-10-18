import React, { useEffect } from 'react';
import styles from './portfolio.module.css'
import Projects from '../Projects2/Projects';
import Contact from '../Contact/Contact';
import Rectangles from '../Rectangles/Rectangles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Head from 'next/head';

function Portfolio() {

  useEffect(() => {
    let navButton = document.querySelector("#nav__button");
    let navMenu = document.querySelector("#nav__menu");
    // console.log(styles)
    
    navButton.addEventListener('click', function() {
      navMenu.classList.toggle(styles.menu__expanded);
      navButton.classList.toggle(styles.expanded);
    });
  }, []);


  return (
    <div className={styles.App}>

      <Head>
        <link rel="icon" href="/sj.png" />
      </Head>

      <header className={styles.App__header} id="top">
        <h1 className={`${styles.App__logo} ${styles.sj}`}>SJ</h1>
        <div className={styles.title}>
          <p>STAN JEONG,</p>
          <p>WEB DEVELOPER</p>
        </div>
        {/* <div className={styles.aboutMeTop}>
          <p>Hi! I'm Stan, a freelance web developer from Los Angeles, CA. I aim to bring design concepts to life and create memorable user experiences.</p>
        </div> */}
          <AnchorLink className={styles.see_work} href="#projects" rel="noopener noreferrer">
            SEE MY WORK
            <div className={styles.arrow}>
              <div className={styles.arrow__down}></div>
              <div className={styles.arrow__square}></div>
            </div>
          </AnchorLink>
      </header>

      <nav id="nav__menu" className={styles.nav__menu}>
        <ul className={styles.menu__items}>
          <AnchorLink className={styles.item} href="#top"><li>Home</li></AnchorLink>
          <AnchorLink className={styles.item} href="#projects"><li>Projects</li></AnchorLink>
          <AnchorLink className={styles.item} href="#contact"><li>Contact</li></AnchorLink>
          <a className={styles.item} href="https://drive.google.com/file/d/1wKmb6asVY1bEmuOYXdJxMzqmR8W6cQSq/view?usp=sharing" target="_blank" rel="noopener noreferrer"><li>Resume</li></a>
        </ul>
      </nav>

      <div id="nav__button" className={styles.nav__button}>
        <div className={styles.nav_toggle_bar}></div>
      </div>


      <section id='projects'>
        <Projects />
      </section>

      <section id='contact'>
        <Contact />
      </section>
      
      <Rectangles />

    </div>
  );
}

export default Portfolio;




// OLD CLASS BASED COMPONENT:

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {}
//   }

//   render() {

//     // (function() {
//     //   var hamburger = {
//     //     navToggle: document.querySelector('.nav-button'),
//     //     // navmenu: document.querySelector('.nav-menu'),
//     //     doToggle: function(e) {
//     //     e.preventDefault();
//     //     this.navToggle.classList.toggle('expanded');
//     //     // this.navmenu.classList.toggle('expanded');
//     //     }
//     //   };

//     //     hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
//     //     // hamburger.navmenu.addEventListener('click', function(e) { hamburger.doToggle(e); });
//     //   }());


    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //       <h1 className="App-logo sj">SJ</h1>
    //       <div className="title">
    //         <p>STAN JEONG,</p>
    //         <p>WEB DEVELOPER</p>
    //       </div>
    //       <a className="see-work" href="/" rel="noopener noreferrer">
    //         SEE MY WORK
    //         <div className="arrow">
    //           <div className="arrow-down"></div>
    //           <div className="arrow-square"></div>
    //         </div>
    //       </a>
    //     </header>
  
    //     <nav className="nav-menu">
    //       <ul>
    //         <li>Home</li>
    //         <li>Projects</li>
    //         <li>Contact</li>
    //         <li>Resume</li>
    //       </ul>
    //     </nav>

    //     <div className="nav-button">
    //       <div className="nav-toggle-bar"></div>
    //     </div>


    //     <div className="rectangle rect1"></div>
    //     <div className="rectangle rect2"></div>
    //     <div className="rectangle rect3"></div>
    //   </div>
    // );
//   }
// }


