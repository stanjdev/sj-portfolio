import React, { useEffect, useContext } from 'react';
import styles from './css/Rectangles.module.css'

export default function Rectangles() {

  // useEffect(() => {
  //   let first = document.querySelector("#first").childNodes
  //   let second = document.querySelector("#second").childNodes;
  //   if (light) {
  //     first.forEach(rect => rect.style.backgroundColor = "whitesmoke");
  //     second.forEach(rect => rect.style.backgroundColor = "whitesmoke");
  //   } else {
  //     first.forEach(rect => rect.style.backgroundColor = "#2C2C2C");
  //     second.forEach(rect => rect.style.backgroundColor = "#2C2C2C");
  //   }

  // }, [light])

  useEffect(() => {
    // FIRST ATTEMPT - TOO JAGGED
    // let rect1 = document.querySelector('.rect1');
    // let rect2 = document.querySelector('.rect2');
    // let rect3 = document.querySelector('.rect3');
    // let rectangle = document.querySelector('.rectangle');

    // function handleScroll() {
    //   let value = window.scrollY/45;
    //   rect1.style.transform = `translate(${15 + (value * -0.09)}%, ${-22 + (value * 5.76)}%) rotate(${-7 + (value / 5.35)}deg)`
    //   rect2.style.transform = `translate(${12 + (value * 0.025)}%, ${-25 + (value * 5.76)}%) rotate(${-7 + (value / 5.35)}deg)`
    //   rect3.style.transform = `translate(${9 + (value * 0.14)}%, ${-28 + (value * 5.76)}%) rotate(${-7 + (value / 5.35)}deg)`

    //   rect1.style.boxShadow = `${15 + value * -0.6}px 15px 3px rgba(0,0,0,0.5)`
    //   rect2.style.boxShadow = `${15 + value * -0.6}px 15px 3px rgba(0,0,0,0.5)`
    //   rect3.style.boxShadow = `${15 + value * -0.6}px 15px 3px rgba(0,0,0,0.5)`

    // }
    // window.addEventListener('scroll', handleScroll)


    // SECOND ATTEMPT - Intro animation
    let first = document.querySelector("#first").childNodes;
    let second = document.querySelector("#second").childNodes;
    // console.log(first)
    // console.log(second)

    function switcheroo() {
      // console.log('scrolling!')
      if (first[0].style.position === "fixed") {
        first.forEach(rect => rect.style.display = "none")
        second.forEach(rect => rect.style.display = "");
      }
    }

    second.forEach(rect => rect.style.display = "none");
    first.forEach(rect => rect.style.position = "fixed");

    // if (window.pageYOffset > 0) {
    //   setTimeout(() => {
    //     console.log(window.pageYOffset);
    //     window.dispatchEvent(new Event('scroll'))
    //   }, 0)
    // }

    window.addEventListener('scroll', switcheroo);

    
    window.addEventListener('scroll', () => {
      let value = (window.scrollY / 1.23) / (document.body.offsetHeight - (window.innerHeight / 40))
      document.body.style.setProperty('--scroll', value);
    }, false);

  }, [])

  return(
    <div className={styles.rectContainer}>
      <div id="first">
        <div id="rect" className={`${styles.rectangle} ${styles.rect4} ${styles.first}`}></div>
        <div id="rect" className={`${styles.rectangle} ${styles.rect5} ${styles.first}`}></div>
        <div id="rect" className={`${styles.rectangle} ${styles.rect6} ${styles.first}`}></div>
      </div>

      <div id="second">
        <div id="rect" className={`${styles.rectangle} ${styles.rect1} ${styles.second}`}></div>
        <div id="rect" className={`${styles.rectangle} ${styles.rect2} ${styles.second}`}></div>
        <div id="rect" className={`${styles.rectangle} ${styles.rect3} ${styles.second}`}></div>
      </div>
    </div>
  )
}
