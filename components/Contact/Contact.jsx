/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import './css/Contact.css'
import AOS from 'aos';
import MyForm from '../Formspree Form/MyForm';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, [])

  const [status, setStatus] = useState();


  // https://formspree.io/forms
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return(
        <div>
          <section className="Contact">
            <h1 data-aos="fade-down">LET&apos;S CREATE</h1>

            <form onSubmit={handleSubmit} data-aos="fade-up" action="https://formspree.io/mjvpvlrr" method="POST">
              <div className="aboutMe">
                <h2>About Me</h2>
                <p>I&apos;m Stan, a software developer from LA. I like turning ideas into reality with memorable user experiences. Currently focused on continual growth and improving the lives of others through programming.</p>
              </div>
              <div className="inputs">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Name"/>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" placeholder="Email"/>
              </div>
              <div className="textArea">
                <textarea name="message" placeholder="Tell me about your project:" rows="7" cols="40"></textarea>
                {status === "SUCCESS" ? <p>Thanks!</p> : null}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                <input className="sendButton" type="submit" value="SUBMIT" style={{fontWeight: 500}}/>
              </div>
            </form>

            <div className="backToTopContainer" data-aos="fade-right" data-aos-delay="50">
            {/* <div className="backToTopContainer" > */}
              <AnchorLink className="backToTop" href="#top" rel="noopener noreferrer">
                BACK TO TOP
                <div className="arrow">
                  <div className="arrow-up"></div>
                  <div className="arrow-square"></div>
                </div>
              </AnchorLink>
            </div>

          </section>

          {/* <MyForm /> */}

          <footer>
            <section className="footerLeftSpace"></section>

            <section className="copyright">
              <span>
                HANDCRAFTED
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="react logo"
                      style={{height: "1.7em", position: "relative", bottom: "-0.47em", margin: "0 0.4em 0 0.2em"}}
                />
                © STAN JEONG
              </span>
            </section>

            <section className="socialIcons">
              <ul>
                <a href="https://www.linkedin.com/in/jeongstanley/" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/linkedin.svg" alt="linkedin" style={{height: "1.3em"}}/></li></a>
                <a href="https://github.com/stanjdev" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/github.svg" alt="github" style={{height: "1.3em"}}/></li></a>
                {/* <a href="https://www.instagram.com/stan_jeong/" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/instagram.svg" alt="instagram" style={{height: "1.3em"}}/></li></a> */}
              </ul>
            </section>
          </footer>
        </div>
  )
}
