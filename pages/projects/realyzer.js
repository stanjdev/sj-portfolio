import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout';

export default function Realyzer() {
  return (
    <Layout>
      <Head>
        <title>Realyzer: Case Study</title>
      </Head>

      <div className="header">
        <h1>Realyzer</h1>
        <h2>Multi-Variable Calculator for Real Estate Investors</h2>
        {/* <blockquote><em>"Calculate the cash-on-cash return on your next real estate investment property."</em></blockquote> */}
        <blockquote style={{maxWidth: "700px"}}><em>"An investment analytics tool helping users gain insights through property analysis, dynamically sourced tax rates, and a custom, comprehensive mortgage calculator"</em></blockquote>
        <p><a href="https://realyzer.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/realyzer" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <figure className="center">
        <img src="/project_images/realyzer/realyzer-banner.png" alt="{name}" className="center"/>
        <figcaption>Simple header banner with optional "dark-mode" toggle for user's choice of experience</figcaption>
      </figure>

      <figure className="center" style={{maxWidth: "600px"}}>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/YppX0bXFMQ0" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen="true"
        >
        </iframe>
        <figcaption>Example property deal analysis</figcaption>
      </figure>

      <figure className="center">
        <img src="/project_images/gifs/realyzer-walkthrough.gif" alt="realyzer rental property calculator walkthrough usage" className="center"/>
        <figcaption>Walkthrough usage of the app</figcaption>
      </figure>



      <div className="container container__grey">
        <section className="projectInfo">
          <div className=" projectInfo__block">
            <h2>Project Brief:</h2>
            <p>Custom web application created for Real Estate Professionals</p>
          </div>

          <div className=" projectInfo__block">
            <h2>Time Frame:</h2>
            <p>September 2020 - November 2020</p>
            <p>85 Hours Total</p>
          </div>

          <div className=" projectInfo__block">
            <h2>Role / Skills:</h2>
            <p>Lead Developer</p>
          </div>
        </section>
      </div>

      <div className="container container__grey">
        <section className="readingWidth">
          <h2 className="technologiesHeader">Technologies Used:</h2>
          <div className="technologies">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Next.js</li>
            </ul>
            <ul>
              <li>CSS</li>
              <li>Mapbox API</li>
              <li>Cheerio.js</li>
              <li>Single Page Application</li>
            </ul>
          </div>
        </section>
      </div>


      <section className="container readingWidth">

        <h3>Realyzer:</h3>
          <ul>
            <li>Provides a clean and simple-to-use interface that keeps the user focused on gaining their insights.</li>
            <li>Eliminates the need to visit external web sites and tools for property tax or mortgage calculations</li>
            <li>Provides the user with an optional, clean and simple PDF report of their property analysis</li>
          </ul>

          <h3>Project Summary:</h3>
          <p>
            This application was created to help real estate investors and professionals analyze residential and commercial 
            properties, providing metrics in order to determine profitability. It analyzes and assesses any given property's 
            net operating income and cash-on-cash return based on the property's value (the purchase price), down payment, the potential rental income, 
            and the overall expenses of the property, including mortgage payments, property taxes, property insurance, and more.
          </p> 
          <ul>
            <li>Responsive analysis tool designed for real estate investors to determine a rental property's profitability</li>
            <li>Retrieved average Property Tax rates from 50 different U.S. states using Cheerio.js, providing users with calculated Property Tax estimates</li>
            <li>Built-in custom multi-variable mortgage calculator</li>
            <li>PDF page populated with user-inputted data to save/print a PDF copy of their calculated report</li>
            <li>Utilized Mapbox's Geocoding API to determine the X-Y coordinates from a given property address in order to select the appropriate Property Tax rates and to generate a map marker of the actual property</li>
          </ul>




{/* 
          
          - Property taxes cheerio scraper, my scraper api endpoint to make it happen.
          using axios to send a GET request to a website URL that hosted an article about average U.S. property taxes, I retrieved 
          the html data in order to implement Cheerio.js for its data scraping capabilties and selected certain table elements from 
          a specific information table that laid out the 50 states and their corresponding average property tax rates. After successfully 
          scraping this data, my API endpoint would then respond back to the client with this data object to then store it in the Redux 
          global state to be used for property tax calculations later on.


          - collaborated with a full stack product designer via figma wireframes to bring the design to life.
          Product designer Casey Tang mocked up an entire wireframe for the light-mode skin of the application using Figma. Utilizing Figma's
          collaborative capabilities, I was then able to successfully develop the design of the application into a more user-friendly, and well-designed application.


          - redux global state object to keep track of all variables (is this even good practice? probably very messy...)
*/}


        <figure className="center">
          <img src="/project_images/realyzer/realyzer-light.png" alt="realyzer rental property calculator" className="center"/>
          <figcaption>Light Mode</figcaption>
        </figure>

        <figure className="center">
          <img src="/project_images/realyzer/realyzer-dark.png" alt="realyzer rental property calculator dark mode" className="center"/>
          <figcaption>Dark Mode</figcaption>
        </figure>
      </section>




      <section className="container readingWidth">
        <h2 className="challengesHeader">Challenges Faced: </h2>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Mapbox's Geocoding API to Retrieve Coordinates From a Given Property Address</h2>
          <p>
            Using the property address the user inputs into the "Property Address" input field, 
            that address is then dispatched to the global Redux state to be stored. The address is then used in conjunction 
            with the Mapbox Geocoding API to retrieve the coordinates based off the address. With the response data,
            the U.S. state name (e.g. Alabama) from that data is used to query the previously scraped property tax data from 
            an external source to determine the average property tax rate for that particular state. 
            The same coordinates are also used to place the map marker directly on the home address of the property for the user's convenience. Example usage shown below.
          </p>

          <figure className="center">
            <img src="/project_images/gifs/realyzer-mapbox-geocoding.gif" className="center" alt="rental property calculator mapbox geocoding address to coordinates feature"/>
            <figcaption>Geocoding a Property Address to Retrieve Coordinates using Mapbox API</figcaption>
          </figure>
        </div>
      </section>


      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Rendering Image Previews of Multiple User-Uploaded Property Photos</h2>
          <p>
            Using an input element with attributes <code>type="file"</code> and <code>multiple</code> , users can upload multiple property photos at once. 
            These files are then processed and converted into individual image URLs using <code>URL.createObjectURL()</code> in order to be rendered
            into actual <code>{`<img/>`}</code> elements right next to the input element to be previewed by the user, as well as rendered onto the 
            PDF report page.
          </p>

          <pre className="pre">
            <code >
{`<input 
  name="uploadedPhotos" type="file"
  onChange={uploadPropertyPhotos}
  multiple
/>

// To render preview of user-uploaded property photos
const fileObj = [];
const fileArr = [];

const uploadPropertyPhotos = e => {
  fileObj.push(e.target.files);
  for (let i = 0; i < fileObj[0].length; i++) {
    fileArr.push(URL.createObjectURL(fileObj[0][i]))
  }
  const { name } = e.target;
  dispatch(changeValue(fileArr, name))
}
`}
            </code>
          </pre>
        </div>
      </section>


      <section className="container container__grey">
        <div className="readingWidth">
          <h1>Mortgage Calculation Formula</h1>
          {/* 
            - Mortgage calculation writeup, actual formula, my implemented code formula, link to video that helped me

          */}
          <p>
            For the mortgage calculation, the key variables to keep track of were the Property Value, the user's Down Payment Percentage (e.g. 20% down), 
            the Interest Rate (e.g. 4%), and the Length of the Loan (e.g. 30 years). These numbers were then plugged into a complex mortgage calculation formula 
            to determine the user's monthly mortgage payment. The user then has the freedom to adjust the Down Payment and Interest Rate via range inputs
            to dynamically adjust the monthly payments.
          </p>

          <pre className="pre">
            <code >
{`  Mortgage calculation formula:
  M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1]
    P = The Principal loan amount
    r = Monthly Interest Rate
    n = Number of months required to repay the loan
`}
            </code>
          </pre>
          <h1>Result:</h1>
          <figure className="center">
            <img src="/project_images/gifs/realyzer-mortgage-calc.gif" className="center" alt="rental property calculator simple mortgage calculator"/>
            <figcaption>Simple, Adjustable Mortgage Calculator</figcaption>
          </figure>
        </div>
      </section>
     

      {/* <section className="container container__grey">
        <div className="readingWidth">
          <h2>Loading JS script into the React project on mount</h2>
          <p>In order for the Mapbox API to create and load the map on mount, I had to figure out how to load the Javascript <code>{`<script>`}</code> file from a CDN, 
          (as you would normally insert the <code>{`<script>`}</code> tag right before the closing <code>{`<body>`}</code> tag of an HTML file). </p>

          <p>I used this custom <code>loadScript</code> function that takes in any CDN URL and injects it into the React-rendered HTML page on mount, similarly to placing the <code>{`<script>`}</code> tag in the HTML file manually. </p>
          
          <pre className="pre">
            <code >
{`function loadScript(url) {
    const index = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement('script');
    script.src = url;
    index.parentNode.insertBefore(script, index);
}
`}
            </code>
          </pre>
        </div>
      </section> */}



      <section className="container">
        <div className="readingWidth">
          <h2>Final Results:</h2>
          <figure className="center">
            <img src="/project_images/realyzer/pdf-results/pdf1.png" alt="Realyzer rental property calculator PDF page 1 cash on cash return net cash flow" className="caseStudyImage center"/>
            <img src="/project_images/realyzer/pdf-results/pdf2.png" alt="Realyzer rental property calculator PDF page 2 monthly expenses down payment closing costs" className="caseStudyImage center"/>
            <img src="/project_images/realyzer/pdf-results/pdf3.png" alt="Realyzer rental property calculator PDF page 3 mapbox api zillow redfin map marker" className="caseStudyImage center"/>
            <figcaption>Final result pages of user's inputted data available to save as a PDF or print!</figcaption>
          </figure>
        </div>
      </section>
  
    </Layout>
  )
}