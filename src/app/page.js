import Image from 'next/image'
import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

/*
=================
=================
*/


import '../../styles/global.css'
import '../../styles/contact_css/Contact.css'
import '../../styles/projects_css/Projects.css'
import 'aos/dist/aos.css';


import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Date from '../../components/date'

// import { getSortedPostsData } from '../../lib/posts'
import Portfolio from '../../components/Portfolio/portfolio'

import { useContext } from 'react';
// import { LightContext } from '../../components/LightContext'

// We need this to fetch the data first before the SSG static generation of the page.
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// };

export default function Home({ allPostsData }) {
  // const { light, setLight } = useContext(LightContext);

  // const handleClick = () => {
  //   setLight(!light);
  //   console.log(light)
  // }


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
    </div>
  )
}


