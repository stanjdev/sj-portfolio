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
        <h2>Mindfulness Mobile App for iOS and Android</h2>        
        <blockquote style={{maxWidth: "700px"}}><em>"A language-independent breathing exercise app to ease the world's anxiety"</em></blockquote>
        <p><a href="https://expo.io/@stan.dev/projects/Memoir" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/memoir" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <figure className="center">
        <img src="/project_images/memoir/memoir-thumbnail.gif" alt="{name}" className="center" width={600} style={{borderRadius: 7}}/>
      </figure>



      <div className="container container__grey">
        <section className="projectInfo">

          <div className=" projectInfo__block">
            <h2>My Role/Skills:</h2>
            <h3>React Native Mobile Developer</h3>
          </div>

          <div className=" projectInfo__block">
            <h2>Team Size: 2</h2>
            <h3>Myself + <a style={{color: 'white', textDecoration: 'none'}} href="https://www.caseytang.me/memoir" target="_blank" rel="noopener noreferrer">1 Product Designer</a></h3>
          </div>

          <div className=" projectInfo__block">
            <h2>Time Frame:</h2>
            <h3>November 2020 - January 2021: <br></br>200 Hours Total</h3>
          </div>

          <div className=" projectInfo__block">
            <h2>User Testing:</h2>
            <h3>5.9 Million views on <a style={{color: "lightblue", textDecoration: "none" }} href="https://www.tiktok.com/@memoir_moment" target="_blank" rel="noopener noreferrer">Tiktok</a><br></br> 163,000 followers</h3>
            <p></p>
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


      <section className="container readingWidth">

        <h3 style={{textDecoration: "underline"}} >Memoir</h3>
          <p>
            This mobile app was developed to help ease the world's stress and anxiety.
          </p> 
          <ul>
            <li>Memoir promotes mindfulness and serenity through deep breathing and meditation exercises. Users can sign in with their Facebook, Apple ID, or email to save their favorite exercises and track their personal exercise progress.</li>
            <li>Users have a clean and simple-to-use UI to play and pause exercise videos, set timers, and save favorites.</li>
            <li>Users have access to a variety of breathing exercises and daily recommendations.</li>
            {/* <li>Available on the iOS App Store and works on Android via <a href="https://expo.io/@stan.dev/projects/Memoir" target="_blank" rel="noopener noreferrer">Expo</a>.</li> */}
            <li>Currently in beta testing on TestFlight for iOS, and works on Android via <a href="https://expo.io/@stan.dev/projects/Memoir" target="_blank" rel="noopener noreferrer">Expo</a>.</li>
          </ul>

          <h3>Project Summary:</h3>
          <ul>
            <li>Memoir breathing exercises use visual cues to be followed by anyone in the world, regardless of language.</li>
            <li>Beautiful designs and gestures enhance the overall customer experience.</li>
            <li>Personalized user progress tracking add to the user experience and help to build better habits.</li>
          </ul>



        <figure className="center" style={{margin: "5em 0 0 0"}}>
          <img src="/project_images/memoir/memoir-exercises.jpeg" alt="realyzer rental property calculator" className="center"/>
          <figcaption>Variety of Breathing Exercises Content</figcaption>
        </figure>



        <div style={{display: "flex", width: "100%", flexWrap: "wrap", margin: "5em 0 0 0", }}>
          <Interaction fileName="Memoir Home Screen.mp4" caption="Home Screen"/>
          <Interaction fileName="Memoir_Exercise 1.mp4" caption="Breathing Exercise Player"/>
          <Interaction fileName="Memoir_Exercise 2.mp4" caption="Setting a Timer"/>
          <Interaction fileName="Memoir_Favorites.mp4" caption="Favorites Library"/>
          {/* <Interaction fileName="Memoir Meditation Dial.mp4" caption="Meditation Exercise Settings"/> */}
          <Interaction fileName="Memoir_Signup.mp4" caption="Delayed Signup Prompts"/>
          
          <Interaction fileName="Memoir_Stats.mp4" caption="Animated User Stats"/>
        </div>

      </section>


      {/* <h1 style={{textAlign: 'center'}}>In Progress...</h1> */}

      <section className="container readingWidth">
        <h2 className="challengesHeader">Challenges Faced: </h2>
      </section>


      <section className="container container__grey">
        <div className="readingWidth">
          <h2>UI: User Stats Scroll-Up Numbers Animation</h2>
          
          <div className="challengeResponsive">
            <div className="challengeParagraph">
              <p>
                How I implemented the custom animation for the numbers scrolling up: 
              </p>
              <ul>
                <li>I first made a function to render a short vertical bar of numbers by dividing each specific stat number by 5.</li>
                <li>Then, I used a <code>MaskedView</code> component from Expo to create a mask for the bar to hide behind.</li>
                <li>Whenever this specific screen was focused by the user, a <code>setTimeout</code> triggers the transform animation using <code>Animatable</code>.</li>
                <li>With wild cases such as integers ranging from 0 to long-digit integers like 1,000,000 or beyond, I implemented a custom width solution using conditionals for responsive widths.</li>
              </ul>
            </div>
            <Interaction fileName="Memoir_Stats.mp4" caption="Animated User Stats"/>
          </div>

        </div>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Dynamically Programmed “Moving Target” Goals &amp; Congratulation Alerts</h2>

          <div className="challengeResponsive">
            <div className="challengeParagraph">
              <p>An alert dialog pops up whenever the user hits their "moving target" goals, which would always increase as the current benchmarks were met.</p>
              <ul>
                <li>The practice time goals increase from a 30 minute goal, to a 2 hour goal, to a 5 hour goal, and then increments by 5 hours indefinitely.</li>
                <li>Those conditional rules were stored in a variable and used to trigger the alerts whenever the goals were met and the user visited the stats page.</li>
                <li>The "dismissed" state of the alert begins as 'false' and is then set to 'true' when the user dismisses it.</li>
              </ul>
            </div>
            
            <Interaction fileName="congrats-alert.mov" caption="Congratulations Alert!"/>
          </div>


          <pre className="pre">
            <code >
{`const timeConditions = practiceTime < 1800 ? 1800 : 
practiceTime >= 1800 && practiceTime < 7200 ? 7200 :
practiceTime >= 7200 && practiceTime < 18000 ? 18000 :
practiceTime >= 18000 ? fiveHrGoal.current : null;

const timeGoal = useRef();
useEffect(() => {
  timeGoal.current = timeConditions
}, [])

useEffect(() => {
  if (practiceTime >= timeGoal.current && !dismissedTimeGoal && Math.trunc(timeGoal.current) !== 0) {
    Alert.alert("Congrats!", "You've reached your practice time goal!", [
      {text: "Awesome!", onPress: () => {
        setDismissedTimeGoal(true);
        setTimeout(() => {
          timeGoal.current = timeConditions;
          setDismissedTimeGoal(false);
        }, 1000);
      }}
    ]);
  }
}, [isFocused])
`}
            </code>
          </pre>

        </div>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Used Google Firebase’s Realtime Database to Store Personalized Favorites and Progress Objects</h2>
          <p>
          Users can keep track of their exercise goals and progress such as hours completed, sessions completed, and best streaks achieved.
          </p>
          <ul>
            <li>The number of seconds a user spends on any timed exercises are incremented, which are then converted to minutes and hours as the user progresses.</li>
            <li>The user's "Sessions Completed" tracker increments whenever a user finishes a timed exercise.</li>
            <li>The user's "Current Streak" and "Best Streak" are incremented whenever they start any exercise on the next calendar day. This is determined by comparing the last tracked date with a current <code>new Date()</code> Object.</li>
          </ul>

          <figure className="center">
            <img width="500" src="https://miro.medium.com/max/2400/1*HFlYgB6gVLc4Su9HsB9MZg.png" className="center" alt="rental property calculator mapbox geocoding address to coordinates feature"/>
            <img src="/project_images/memoir/realtime-database.png" className="center" alt="rental property calculator mapbox geocoding address to coordinates feature"/>
            <figcaption>Favorites and progress correspond to each user's unique user ID</figcaption>
          </figure>
        </div>
      </section>


      


      <section className="container container__grey">
        <div className="readingWidth">
          <h1>UI/UX Solution: Horizontal ScrollViews used for Custom Option Selectors</h1>
          
          <div className="challengeResponsive">
            <div className="challengeParagraph">
              <p>
                In order to set timers for breathing exercises, I implemented a horizontal options selector to choose timed intervals.
                My function renders an array of <code>TouchableOpacity</code>'s onto the screen and is hidden/revealed when the user presses the timer icon.
                Selecting a time option starts the timer and hides the options automatically.
              </p>
              <p>Another horizontal ScrollView was used to set the timer for the Meditation Timer Screen.</p>
              <p>I created a custom "scroll wheel" by gathering the measurements for the <code>contentOffset.x</code>, the <code>contentSize.width</code>, and the <code>layoutMeasurement.width</code> and calculating the percentage of space used within the entire <code>ScrollView</code>.</p>
              <p>This homemade "scroll wheel" includes haptic feedback to ensure the user is interacting with the adjuster.</p>
              {/* <Interaction fileName="Memoir Meditation Dial.mp4" caption="Meditation Exercise Settings"/> */}
            </div>
            <Interaction fileName="Memoir_Exercise 2.mp4" caption="Horizontal 'Wheel' to Set Timer"/>
          </div>


          <pre className="pre">
            <code>
{`const timerDurationsOptions = {
    "30s": {mins: 0, secs: 30},
    "1m": {mins: 1, secs: 0},
    "2m": {mins: 2, secs: 0},
    "3m": {mins: 3, secs: 0},
    "5m": {mins: 5, secs: 0},
    "10m": {mins: 10, secs: 0},
    "15m": {mins: 15, secs: 0},
    "20m": {mins: 20, secs: 0},
    "30m": {mins: 30, secs: 0},
  };

  const renderTimerOptions = () => {
    const options = [];
    for (let time in timerDurationsOptions) {
      options.push(
        <TouchableOpacity 
          onPress={() => pressTimerChoice(time)}
          key={time} 
          style={{ padding: 10, paddingRight: 27, paddingLeft: 27}}
        >
          <Text style={{fontFamily: "Assistant-SemiBold", fontSize: 19, color: "white"}}>{time}</Text>
        </TouchableOpacity>
      )
    }
    return options;
  };
`}
            </code>
          </pre>

        </div>
      </section>
     



      <section className="container">
        <div className="readingWidth">
          {/* <h2>Final Results:</h2>
          <figure className="center">
            <img src="/project_images/realyzer/pdf-results/pdf1.png" alt="Realyzer rental property calculator PDF page 1 cash on cash return net cash flow" className="caseStudyImage center"/>
            <img src="/project_images/realyzer/pdf-results/pdf2.png" alt="Realyzer rental property calculator PDF page 2 monthly expenses down payment closing costs" className="caseStudyImage center"/>
            <img src="/project_images/realyzer/pdf-results/pdf3.png" alt="Realyzer rental property calculator PDF page 3 mapbox api zillow redfin map marker" className="caseStudyImage center"/>
            <figcaption>Final result pages of user's inputted data available to save as a PDF or print!</figcaption>
          </figure> */}
          <figure className="center">
            <img src="/project_images/memoir/memoir-splash.png" alt="Memoir Splash intro screen" className="center" width="400" style={{borderRadius: 7}}/>
            <figcaption>Thanks for visiting!</figcaption>
          </figure>
        </div>
      </section>
  
    </Layout>
  )
}



function Interaction({ fileName, caption }) {
  return (
    <figure className="center" style={{marginTop: "2em", marginBottom: "2em"}}>
      <video 
        autostart="true"
        autoPlay 
        loop
        muted 
        style={{borderRadius: 50, width: "300px"}}
        src={`/project_images/memoir/memoir-portfolio-motion/${fileName}`}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}