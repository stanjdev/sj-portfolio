import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Stan'
export const siteTitle = 'Stan Jeong Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/sj.png" />
        <meta
          name="description"
          content="SJ Portfolio"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/sj.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/sj.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header> */}

      
      <main>
        <Link href="/"><a><h1 className={`${"App__logo"} ${"sj"}`}>SJ</h1></a></Link>
        {children}</main>
      {!home && (
        <div>
          <div className={styles.backToHome}>
            <Link href="/">
              <a><h2>← Back to home</h2></a>
            </Link>
          </div>
          
          <footer>
            <section className="footerLeftSpace"></section>
            
            <section className="copyright">
              <span>
                HANDCRAFTED
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                      alt="react logo" 
                      style={{height: "1.7em", position: "relative", bottom: "-0.47em"}}
                />
                © 2021 STAN JEONG
              </span>
            </section>

            <section className="socialIcons">
              <ul>
                <a href="https://www.linkedin.com/in/jeongstanley/" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/linkedin.svg" alt="linkedin" style={{height: "1.3em"}}/></li></a>
                <a href="https://github.com/stanjdev" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/github.svg" alt="github" style={{height: "1.3em"}}/></li></a>
                <a href="https://www.instagram.com/stan.wav/" target="_blank" rel="noopener noreferrer"><li><img src="/social_icons/instagram.svg" alt="instagram" style={{height: "1.3em"}}/></li></a>
              </ul>
            </section>
          </footer>

        </div>
        
      )}
    </div>
  )
}