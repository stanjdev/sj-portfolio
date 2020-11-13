import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout';

export default function Kelp() {
  return (
    <Layout>
      <Head>
        <title>Kelp: Case Study</title>
      </Head>

      <div className="header">
        <h1>Kelp</h1>
        <h2>Business Search Web App Tool</h2>
        <blockquote><em>"Search for your favorite coffee shop in real-time with an interactive map view."</em></blockquote>
        <p><a href="https://kelp-search.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/kelp" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <figure className="center">
        <img src="/project_images/kelp_searchbar.png" alt="{name}" className="center"/>
        <figcaption>Search bar with 3 different "Sort By" options</figcaption>
      </figure>



      <div className="container container__grey">
        <section className="projectInfo">
          <div className=" projectInfo__block">
            <h2>Project Brief:</h2>
            <p>Codecademy Pro Capstone <br/> React Project</p>
          </div>

          <div className=" projectInfo__block">
            <h2>Timeline:</h2>
            <p>August 2020 - September 2020</p>
            <p>41 Hours Total</p>
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
              <li>SCSS</li>
              <li>CSS keyframe animations</li>
            </ul>
            <ul>
              <li>Yelp API</li>
              <li>Mapbox API</li>
              <li>CORS Anywhere</li>
              <li>Single Page Application</li>
            </ul>
          </div>
        </section>
      </div>


      <section className="container readingWidth">
          <h3>Summary:</h3>
          <li>Responsive business search tool created with an interactive Mapbox map view to find businesses from retrieved Yelp API data</li>
          <li>Client-side fetch of Yelp API endpoints implemented using <a href="https://cors-anywhere.herokuapp.com/" target="_blank">CORS Anywhere</a></li>

          <p>
            This application started off as a Codecademy Pro React course project that I further developed to have an interactive map experience 
            as well as a responsive, mobile experience.
          </p>
          <p>
          The biggest challenges I faced dealt with connecting the map markers to behave according to my vision. I only had access to 
          the Yelp API data of each search result, which gave me the address and coordinates for each business found. I then hooked 
          up that data to Mapbox, and made sure the results and the map markers communicated bi-directionally whenever clicking or pressing 
          on either or.
          </p>
          <span>How I did it: </span>
          <ul>
            <li>
              In my Map component, on the map markers side, whenever you click or press any map marker, I used React-Redux to dispatch an 
              action type of <code>“MARKER_CLICKED”</code> with a payload of <code>marker.properties.id</code> that stored that info 
              in my global Redux state. Using the <code>useEffect()</code> hook in the parent component, this event would trigger 
              the actual business from the search results list to be scrolled into view automatically using the <code>scrollIntoView()</code> 
              method and the DOM manipulation <code>classList.add()</code> method to add highlighting styling to the selected result.
            </li>
            <br/>
            <li>
              In my individual Business component, on the BusinessList side, whenever you click on an image of a business from the 
              search results, it extracts the Yelp coordinates data from that business, sends it back up to the parent component, 
              and then sets the current state of the <code>clickedOnBusiness</code>, and finally sends that back down to the Map 
              component to fly into the actual map marker with the matching coordinates using the Mapbox API's <code>flyTo()</code> method.
            </li>
          </ul>

          <p>
            Another challenge I faced was making sure to clear the map markers from previous search results whenever querying 
            for new searches so they wouldn’t pile up (the previous map markers did not clear automatically after running a new search). 
            I used the <code>useRef()</code> hook and the <code>.current</code> property to keep track of the current search results 
            data in an array, and compared that array against the next, new search results. If they didn’t match, I looped through the 
            current array of existing map markers and removed them in order to empty the array and make room for the new incoming search results.
          </p>

        <figure className="center">
          <img src="/project_images/kelp-mobile.png" className="center"/>
          <figcaption>Mobile view of search bar</figcaption>
        </figure>

        <figure className="center">
          <img src="/project_images/kelp_map.png" alt="kelp MapBox map view" className="caseStudyImage center"/>
          <figcaption>Map view provided by MapBox API</figcaption>
        </figure>
      </section>




      <section className="container readingWidth">
        <h2 className="challengesHeader">Challenges Faced: </h2>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Creating a Custom, Interactive Map</h2>
          {/* https://github.com/stanjdev/kelp/issues/14 - ultimately ended with scrollIntoView(), check actual code.  */}
          <p>
            Using the React Hook, <code>useEffect()</code>, I created a function to toggle an "active" CSS class, 
            adding or removing highlighting styling whenever users click on any map markers. 
            Concurrently, I used <code>scrollIntoView</code> with <code>behavior: "smooth"</code> to effortlessly glide to 
            the business listing of the selected map marker.
          </p>

          <figure className="center">
            <img src="/project_images/gifs/kelp-interactive-map.gif" className="center"/>
            <figcaption>2-way interactive map! <br/> Fixed/sticky map that scrolls with you!</figcaption>
          </figure>
        </div>
      </section>


      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Clearing existing markers from previous searches</h2>
          {/* https://github.com/stanjdev/kelp/issues/13 clearing the markers before loading new search results every new search render */}
          <p>
            Using the React Hook, <code>useRef()</code> and the <code>.current</code> property, I was able to retrieve the 
            existing array of map markers from the previous search and compare it against 
            the new array of businesses populated by Yelp from running a new search. 
          </p>
          <p>
            If those two arrays weren't exactly alike, I used the built-in MapBox 
            <code> marker.remove() </code> function to clear all markers from the map.
          </p>

          <pre className="pre">
            <code >
{`if (currentMarkers.current !== businesses) {
        currentMarkers.current.forEach(marker => marker.remove());
  }
`}
            </code>
          </pre>
        </div>
      </section>


      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Map resizing bug: Required automatic triggering of window-resizing event </h2>
          {/* https://github.com/stanjdev/kelp/issues/13 clearing the markers before loading new search results every new search render */}
          <p>
            For my map's display/hide toggle, I came across a bug where the Mapbox map displayed inconveniently at 1/4th the 
            container's size when toggling to display. The only way to set the size back to normal was by resizing the window manually.
          </p>
          <p>
            In my map toggle button's <code>handleClick</code> function, I included this <code>setTimeout()</code> function to dispatch 
            a window resize trigger event to automatically cause a resize AFTER the map displayed from invisible to visible.
          </p>

          <pre className="pre">
            <code >
{`setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
`}
            </code>
          </pre>
        </div>
      </section>
     

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Loading JS script into the React project on mount</h2>
          <p>In order for the Mapbox API to create and load the map on mount, I had to figure out how to load the Javascript <code>{`<script>`}</code> file from a CDN, 
          (as you would normally insert the <code>{`<script>`}</code> tag right before the closing <code>{`<body>`}</code> tag of an HTML file). </p>

          <p>I used this custom <code>loadScript</code> function that takes in any CDN URL and injects it into the React-rendered HTML page on mount, similarly to placing the <code>{`<script>`}</code> tag in the HTML file manually. </p>

          {/* The script needs to look at the <code>window</code> level, i.e. <code>window.document.body</code> or <code>window.initMap = this.initMap</code> */}
          {/* LIFESAVER video: https://www.youtube.com/watch?v=W5LhLZqj76s (initMap is not a function error: because the script needs to look at the 'window' level. so at window.document.body.. etc. window.initMap = this.initMap) https://www.elharony.com/initmap-is-not-a-function/ - HUGE: SETTING UP JS SCRIPT IN REACT PROJECT! */}
          
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
          <img src="/project_images/kelp_tandoori.png" alt="search for tandoori" className="caseStudyImage center"/>
          <img src="/project_images/kelp_juice.png" alt="search for juice" className="caseStudyImage center"/>
          <img src="/project_images/kelp_icecream.png" className="caseStudyImage center"/>
          <figcaption>Businesses data imported from <a href="https://www.yelp.com/developers/documentation/v3/business_search" target="_blank">Yelp API</a>. Search for your favorite bites!</figcaption>
        </figure>
      </div>
      </section>
  
    </Layout>
  )
}