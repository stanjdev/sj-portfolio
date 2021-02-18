import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import Portfolio from '../components/Portfolio/portfolio'

import { useContext, useEffect } from 'react';
import { LightContext } from '../components/LightContext'

// We need this to fetch the data first before the SSG static generation of the page.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
};

export default function Home({ allPostsData }) {
  const { light, setLight } = useContext(LightContext);

  const handleClick = () => {
    setLight(!light);
    console.log(light)
  }
  

  // DARKMODE LIGHT SWITCH, entire code is too tangled to do everything one by one
  // useEffect(() => {
  //   console.log(light);
  //   // !document.body.classList.toggle('darkmode');
  //   if (light) {
  //     // backgrounds
  //     document.querySelector("header").style.backgroundColor = "white";
  //     document.querySelectorAll("section").forEach(section => section.style.backgroundColor = "white");
  //     document.querySelectorAll('.lightConnect__bg').forEach(x => x.style.backgroundColor = "white");
      
  //     // font
  //     document.querySelectorAll('p').forEach(p => p.style.color = "black");
  //     document.querySelectorAll('strong').forEach(w => w.style.color = "black");
  //     document.querySelectorAll('h1').forEach(h1 => h1.style.color = "black");
  //     document.querySelectorAll('h2').forEach(h2 => h2.style.color = "black");
  //     document.querySelectorAll('.lightConnect').forEach(x => x.style.color = "black");
  //     document.querySelectorAll('.lightConnect__arrows').forEach(x => x.style.borderColor = "black");
  //   } else {

  //   }
  // }, [light])


  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
        <meta name="description" content="Project Portfolio of Developer, Stan Jeong" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content="https://stanjeong.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Project Portfolio of Developer, Stan Jeong" />
        <meta property="og:image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content="Project Portfolio of Developer, Stan Jeong" />
        <meta name="twitter:url" content="https://stanjeong.vercel.app/" />
        <meta name="twitter:image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
      </Head>

    {/* <button style={{position: "fixed", zIndex:100, right: "1em", top: "50vh", color: "black"}} id="lightswitch" onClick={handleClick}>lights</button> */}

    <Portfolio />


      {/* <section className={utilStyles.headingMd}>
        <p>I'm <strong>Stan</strong></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/projects/first-post"><a>My First Post</a></Link>
            <br />
              <small className={utilStyles.lightText}>
                Whatever the date is 
              </small>
          </li>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  )
}


























// OG tutorial page
// import Head from 'next/head';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Read <Link href="/posts/first-post"><a>first post!</a></Link>
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className="card"
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   )
// }
