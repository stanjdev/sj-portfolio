import React, { useEffect, useContext } from 'react';
import styles from './portfolio.module.css'
import Projects from '../Projects2/Projects';
import Contact from '../Contact/Contact';
import Rectangles from '../Rectangles/Rectangles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Head from 'next/head';

import { LightContext } from '../LightContext';

export default function Portfolio() {
  const { light } = useContext(LightContext);

  useEffect(() => {
    // if (light) {
    //   document.querySelector("p").style.color = "black"
    // } else {
    //   document.querySelector("p").style.color = "white"
    // }
  }, [light])


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
          <p>DEVELOPER</p>
        </div>
        {/* <div className={styles.aboutMeTop}>
          <p>Hi! I'm Stan, a freelance web developer from Los Angeles, CA. I aim to bring design concepts to life and create memorable user experiences.</p>
        </div> */}
          <AnchorLink className={`${styles.see_work} lightConnect`} href="#projects" rel="noopener noreferrer">
            SEE MY WORK
            <div className={`${styles.arrow} lightConnect__arrows`}>
              <div className={`${styles.arrow__down} lightConnect__arrows`}></div>
              <div className={`${styles.arrow__square} lightConnect__arrows`}></div>
            </div>
          </AnchorLink>
      </header>

      <nav id="nav__menu" className={`${styles.nav__menu} lightConnect__bg`}>
        <ul className={styles.menu__items}>
          <AnchorLink className={styles.item} href="#top"><li>Home</li></AnchorLink>
          <AnchorLink className={styles.item} href="#projects"><li>Projects</li></AnchorLink>
          <AnchorLink className={styles.item} href="#contact"><li>Contact</li></AnchorLink>
          <a className={styles.item} href="https://drive.google.com/file/d/1Y2Jz6266iripiKBbXKpHvZ-tZ1nQDkSD/view?usp=sharing" target="_blank" rel="noopener noreferrer"><li>Resume</li></a>
        </ul>
      </nav>

      <div id="nav__button" className={`${styles.nav__button}`}>
        <div id="burgerBars" className={`${styles.nav_toggle_bar} lightConnect__bg`}></div>
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
};