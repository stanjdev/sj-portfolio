import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout';

export default function Memoir() {
  return (
    <Layout>
      <Head>
        <title>Memoir: Case Study</title>
      </Head>

      <div className="header">
        <img src="/project_images/memoir/app-icon.png" alt="{name}" className="center" width={150} style={{borderRadius: 7}}/>
        <h1>Memoir</h1>
        <h2>Breathing &#38; Meditation Mobile Application for iOS and Android</h2>
        <blockquote style={{maxWidth: "700px"}}><em>"Breathing, Meditation app for iOS &#38; Android promoting mindfulness through breathing exercises and personal progress tracking"</em></blockquote>
        <p><a href="https://expo.io/@stan.dev/projects/Memoir" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/memoir" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <figure className="center">
        <img src="/project_images/memoir/memoir-thumbnail.gif" alt="{name}" className="center" width={600} style={{borderRadius: 7}}/>
        <figcaption>Memoir</figcaption>
      </figure>


      <figure className="center">
        <img src="/project_images/memoir/memoir-splash.png" alt="Memoir Splash intro screen" className="center" width="400"/>
        <figcaption>Memoir splash screen intro</figcaption>
      </figure>



      <div className="container container__grey">
        <section className="projectInfo">
          <div className=" projectInfo__block">
            <h2>Project Brief:</h2>
            <p>Mobile application promoting mindfulness through breathing and meditation exercises. Users can track their progress and favorites</p>
          </div>

          <div className=" projectInfo__block">
            <h2>Timeline:</h2>
            <p>November 2020 - January 2021</p>
            <p>170 Hours Total</p>
          </div>

          <div className=" projectInfo__block">
            <h2>Role / Skills:</h2>
            <p>Lead React Native Mobile Developer</p>
          </div>
        </section>
      </div>

      <div className="container container__grey">
        <section className="readingWidth">
          <h2 className="technologiesHeader">Technologies Used:</h2>
          <div className="technologies">
            <ul>
              <li>React Native</li>
              <li>Expo</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
            <ul>
              <li>Figma</li>
              <li>Google Firebase</li>
              <li>Apple Developer Program</li>
              <li>Sign In With Facebook</li>
            </ul>
          </div>
        </section>
      </div>

      <h1 style={{textAlign: 'center'}}>In Progress...</h1>

      <section className="container readingWidth">

        <h3>Memoir:</h3>
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





        <figure className="center">
          <img src="/project_images/memoir/memoir-exercises.jpeg" alt="realyzer rental property calculator" className="center"/>
          <figcaption>Memoir Breathing Exercises Variety</figcaption>
        </figure>



        <div style={{display: "flex", width: "100%", flexWrap: "wrap"}}>
          <Interaction fileName="Memoir Home Screen.mp4" caption="Home Screen with Horizontal Scrolling Libraries"/>
          <Interaction fileName="Memoir_Exercise 1.mp4" caption="Breathing Exercise Player"/>
          <Interaction fileName="Memoir_Exercise 2.mp4" caption="Setting a Timer"/>
          <Interaction fileName="Memoir_Favorites.mp4" caption="Favorites Library"/>
          <Interaction fileName="Memoir Meditation Dial.mp4" caption="Meditation Dial"/>
          <Interaction fileName="Memoir_Signup.mp4" caption="Sign Up Prompts"/>

          <Interaction fileName="Memoir_Stats.mp4" caption="User Stats"/>
        </div>

      </section>



      {/* <section className="container readingWidth">
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
     

      <section className="container container__grey">
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
      </section>



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
      </section> */}
  
    </Layout>
  )
}



function Interaction({ fileName, caption }) {
  return (
    <figure className="center">
      <video 
        autostart 
        autoPlay 
        loop
        muted 
        style={{borderRadius: 10}}
        src={`/project_images/memoir/memoir-portfolio-motion/${fileName}`}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}