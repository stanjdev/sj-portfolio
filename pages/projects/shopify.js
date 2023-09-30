import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout';
import Image from 'next/image';

export default function Shopify() {
  return (
    <Layout>
      <Head>
        <title>Shopify, Shop Cash: Case Study</title>
        <link rel="icon" href="/sj.png" />
        <meta name="image" content="https://stanjeong.vercel.app/project_images/shopify/shopify-logo.png" />
        <meta property="og:title" content="Shopify, Shop Cash" />
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="https://stanjeong.vercel.app/projects/shopify" />
        <meta property="og:image" content="https://stanjeong.vercel.app/project_images/shopify/shopify-logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@stan_jeong" />
        <meta name="twitter:image" content="https://stanjeong.vercel.app/project_images/shopify/shopify-logo.png" />
      </Head>

      <div className="header">
        <Image src="/project_images/shopify/shopify-logo.png" alt="{name}" className="center" width={150} height={150} style={{borderRadius: 7}}/>
        <h1>Shopify, Shop Cash</h1>
        <h2>Shop Cash rewards points on Shopify&apos;s <a href="https://shop.app/" target="_blank" rel="noopener noreferrer">Shop</a> mobile app</h2>
        <blockquote style={{maxWidth: "700px"}}><em>&quot;Activity View allows users to self-monitor their Shop Cash activity&quot;</em></blockquote>
      </div>

      <figure className="center">
        <video height="780" controls >
          <source src="/project_images/shopify/activity_view_portfolio_video.mp4" type="video/mp4"/>
        </video>
      </figure>
      
      <div className="container container__grey">
        <section className="readingWidth">
          <h2 className="technologiesHeader">Technologies Used:</h2>
          <div className="technologies">
            <ul>
              <li>TypeScript</li>
              <li>React Native</li>
              <li>GraphQL</li>
            </ul>
            <ul>
              <li>Jest</li>
              <li>Figma</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
};
