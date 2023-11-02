/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout';
import Gist from 'react-gist';

export default function Memoir() {
  return (
    <Layout>
      <Head>
        <title>Memoir: Case Study</title>
        <link rel="icon" href="/sj.png" />
        <meta name="description" content="Memoir, an app to help ease the world's anxiety." />
        <meta name="image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
        <meta property="og:title" content="Memoir: Case Study" />
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="https://stanjeong.vercel.app/projects/memoir" />
        <meta property="og:image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
        <meta property="og:description" content="Memoir, an app to help ease the world's anxiety." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@stan_jeong" />
        <meta name="twitter:title" content="Memoir: Case Study" />
        <meta name="twitter:description" content="Memoir, an app to help ease the world's anxiety." />
        <meta name="twitter:image" content="https://stanjeong.vercel.app/project_images/memoir/app-icon.png" />
      </Head>

      <div className="header">
        <img src="/project_images/memoir/app-icon.png" alt="{name}" className="center" width={150} style={{borderRadius: 7}}/>
        <h1>Memoir</h1>
        <h2>Deep Breathing &#38; Mindfulness on iOS and Android</h2>
        <blockquote style={{maxWidth: "700px"}}><em>&quot;A language-independent meditation app to help ease the world&apos;s anxiety&quot;</em></blockquote>
        <p><a href="https://expo.io/@stan.dev/projects/Memoir" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/stanjdev/memoir" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <figure className="center">
        <img src="/project_images/memoir/memoir-thumbnail.gif" alt="{name}" className="center" width={600} style={{borderRadius: 7}}/>
      </figure>


      <div className="container container__grey stats_section">
        <section className="projectInfo">
          <div className="projectInfo__block">
            <h2>My Role:</h2>
            <h3>Lead Developer / Cofounder</h3>
          </div>

          <div className="projectInfo__block">
            <h2>Team Size: Two</h2>
            <h3>Myself + <a style={{color: 'white', textDecoration: 'none'}} href="https://www.caseytang.me/memoir" target="_blank" rel="noopener noreferrer">1 Product Designer</a></h3>
          </div>

          {/* <div className=" projectInfo__block">
            <h2>Time Frame:</h2>
            <h3>November 2020 - March 2021: <br></br>{`> 200 Hours`}</h3>
          </div> */}

          <div className="projectInfo__block">
            <h2>User Testing:</h2>
            <h3>5.9 Million views on <a style={{color: "lightblue", textDecoration: "none" }} href="https://www.tiktok.com/@memoir_moment" target="_blank" rel="noopener noreferrer">Tiktok</a><br></br> 158,000 followers</h3>
            <p></p>
          </div>

          <div className="projectInfo__block">
            <h2 className='technologiesHeader'>Download:</h2>
            <h3>
              <a href="https://apps.apple.com/us/app/memoir-breathing/id1544869710" target="_blank" rel="noopener noreferrer">iOS App Store</a>
              <br></br>
              <a href="https://play.google.com/store/apps/details?id=com.memoir.memoir" target="_blank" rel="noopener noreferrer">Google Play Store</a>
            </h3>
          </div>
        </section>
        <section className="readingWidth">
          <h2 className="technologiesHeader">Technologies Used:</h2>
          <div className="technologies">
            <ul className='technologies-list'>
              <li>React Native</li>
              <li>Expo</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
            <ul className='technologies-list'>
              <li>Figma</li>
              <li>Google Firebase</li>
              <li>Apple Developer Program</li>
              <li>Sign In With Facebook</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="container">
        <h1 className='header'>TikTok Marketing</h1>
        <figure className="center">
          <video
            autostart="true"
            autoPlay
            loop
            muted
            className='tiktok-duet-video'
            style={{borderRadius: "7px"}}
            src={`/project_images/memoir/memoir-tiktok-collage.mp4`}
          />
          <figcaption>Viral TikTok &ldquo;duet&ldquo; trend</figcaption>
        </figure>
      </section>

      <section className="container readingWidth">
        <h3 style={{textDecoration: "underline"}}>Memoir Features</h3>
          <ul>
            <li>Memoir promotes mindfulness and serenity through deep breathing and meditation exercises.</li>
            <li>Users can sign in with their Facebook, Apple ID, or email to save their favorite exercises and track their personal exercise progress.</li>
            <li>Users have a clean and simple-to-use UI to play and pause exercise videos, set timers, and save favorites.</li>
            <li>Personalized user progress tracking add to the user experience and help to build better habits.</li>
            {/* <li>Memoir breathing exercises use visual cues to be followed by anyone in the world, regardless of language.</li> */}
            {/* <li>Beautiful designs and gestures enhance the overall customer experience.</li> */}
          </ul>


        <figure className="center" style={{margin: "5em 0 0 0"}}>
          <img src="/project_images/memoir/memoir-exercises.jpeg" alt="memoir exercises" className="center"/>
          <figcaption>Variety of Breathing Exercises Content</figcaption>
        </figure>



        <div style={{display: "flex", width: "100%", flexWrap: "wrap", margin: "5em 0 0 0", }}>
          <Interaction fileName="Memoir_Home_Screen.mp4" caption="Home Screen"/>
          <Interaction fileName="Memoir_Exercise_1.mp4" caption="Breathing Exercise Player"/>
          <Interaction fileName="Memoir_Exercise_2.mp4" caption="Setting a Timer"/>
          <Interaction fileName="Memoir_Favorites.mp4" caption="Favorites Library"/>
          {/* <Interaction fileName="Memoir Meditation Dial.mp4" caption="Meditation Exercise Settings"/> */}
          <Interaction fileName="Memoir_Signup.mp4" caption="Delayed Signup Prompts"/>
          <Interaction fileName="Memoir_Stats.mp4" caption="Animated User Stats"/>
        </div>
      </section>

      <section className="container container__grey">
        <div className='readingWidth user-journey-content'>
          <h1 className="userJourneyHeader">User Journey</h1>
          <img className="diagram-background center" src="/project_images/memoir/user-journey-memoir-architecture.png" alt="{name}" />
          
          <h2 className='center mg-top'>Guiding Customers to Create an Account</h2>
          <p>
            We delayed the account creation process to allow the customer to explore the app before committing to signing up.
          </p>
          <p>
            We designed the app to allow customers to be able to try out the free exercises as they please, and would be prompted to create an account when visiting the favorites or profile pages.
          </p>
          <p>
            This kept an incentive for the customer to create an account while reducing the chance of them leaving the app due to an early account creation request.
          </p>
          <img className="diagram-background center" src="/project_images/memoir/user-journey-new-customer-flow.png" alt="{name}" />
        </div>
      </section>


      <section className="container readingWidth">
        <h2 className="challengesHeader">Challenges Faced: </h2>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Caching the Downloaded Image and Video Assets from Firebase Storage using Expo FileSystem API</h2>

          <div className="challengeResponsive">
            <div className="challengeParagraph">
              <p>The following code gist was shrunken from the original code for simplification. The original uses a regular expression checker to categorize assets as &quot;images&quot; or &quot;videos&quot;.</p>
              <ul>
                <li>Firstly, the specifically requested <code>image</code> and <code>videoFile</code> assets are passed down as props to the individual <code>Exercise</code> components. </li>
                <li><code>useState()</code> hooks are then initialized to set the actual image and videos to be rendered for later on. The <code>useEffect()</code> hook will run the initial caching function on mount. </li>
                <li><code>cacheAsset</code> is an <code>async</code> function, that first checks if the file already exists within the cache to prevent unnecessary download requests, saving bandwidth.</li>
                <li>If it wasn&apos;t cached, the download URL of the file is retrieved from Firebase Storage. The URL is used to download the file to the device&apos;s cache using the Expo FileSystem API. The <code>useState()</code> states are then stored using the newly downloaded assets. </li>
                <li>Finally, with the stored states, the <code>cachedImage</code> is used to render the exercise image. When you press on that image, it navigates to the <code>ExerciseVideo</code> screen along with the <code>cachedVideo</code> passed down as a <code>route.param</code>.</li>
              </ul>
            </div>
          </div>

          {/* <pre className="pre">
            <code>
{`import React, { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import firebase from 'firebase';
const storage = firebase.storage();

export default function Exercise({ image }) {
  const [cachedImg, setCachedImg] = useState();

  useEffect(() => {
    cacheAsset(image);
  }, [])

  const cacheAsset = async (asset) => {
    const path = FileSystem.cacheDirectory + "/" + asset;
    const file = await FileSystem.getInfoAsync(path);

    // If image was already cached, read from previous cache and return.
    if (file.exists) {
      setCachedImg( {uri: file.uri} );
      return;
    }

    // Else if it wasn't cached, get the download URL for the new file from Firebase Storage
    const ref = storage.ref("/" + "exercise-images" + "/" + asset);
    const uri = await ref.getDownloadURL();

    // Download that new file into the device's cache using the FileSystem API
    const newAsset = await FileSystem.downloadAsync(uri, path);
    setCachedImg( {uri: newAsset.uri} );
    return;
  }

  return <Image
            source={ cachedImg }
            style={{ height: height * 0.4, width: width * 0.9 }}
            resizeMode="contain"
          />
};
`}
            </code>
          </pre> */}

          <Gist
            id="261a720d9e4a16e982ffa518b7f916a4"
          />

        </div>
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
              <p>An alert dialog pops up whenever the user hits their &quot;moving target&quot; goals, which would always increase as the current benchmarks were met.</p>
              <ul>
                <li>The practice time goals increase from a 30 minute goal, to a 2 hour goal, to a 5 hour goal, and then increments by 5 hours indefinitely.</li>
                <li>Those conditional rules were stored in a variable and used to trigger the alerts whenever the goals were met and the user visited the stats page.</li>
                <li>The &quot;dismissed&quot; state of the alert begins as &lsquo;false&lsquo; and is then set to &lsquo;true&lsquo; when the user dismisses it.</li>
              </ul>
            </div>

            <Interaction fileName="congrats-alert.mov" caption="Congratulations Alert!"/>
          </div>


          {/* <pre className="pre">
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
          </pre> */}

          {/* <Gist id="f8ce14bac0348f74e49facafc267e96b" /> */}
        </div>
      </section>

      <section className="container container__grey">
        <div className="readingWidth">
          <h2>Used Google Firebase&lsquo;s Realtime Database to Store Personalized Favorites and Progress Objects</h2>
          <p>
          Users can keep track of their exercise goals and progress such as hours completed, sessions completed, and best streaks achieved.
          </p>
          <ul>
            <li>The number of seconds a user spends on any timed exercises are incremented, which are then converted to minutes and hours as the user progresses.</li>
            <li>The user&lsquo;s &quot;Sessions Completed&quot; tracker increments whenever a user finishes a timed exercise.</li>
            <li>The user&lsquo;s &quot;Current Streak&quot; and &quot;Best Streak&quot; are incremented whenever they start any exercise on the next calendar day. This is determined by comparing the last tracked date with a current <code>new Date()</code> Object.</li>
          </ul>

          <figure className="center">
            <img width="500" src="https://miro.medium.com/max/2400/1*HFlYgB6gVLc4Su9HsB9MZg.png" className="center" alt="memoir real time database google firebase"/>
            <img src="/project_images/memoir/realtime-database.png" className="center" alt="rental property calculator mapbox geocoding address to coordinates feature"/>
            <figcaption>Favorites and progress correspond to each user&lsquo;s unique user ID</figcaption>
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
                My function renders an array of <code>TouchableOpacity</code>&lsquo;s onto the screen and is hidden/revealed when the user presses the timer icon.
                Selecting a time option starts the timer and hides the options automatically.
              </p>
              <p>Another horizontal ScrollView was used to set the timer for the Meditation Timer Screen.</p>
              <p>I created a custom &quot;scroll wheel&quot; by gathering the measurements for the <code>contentOffset.x</code>, the <code>contentSize.width</code>, and the <code>layoutMeasurement.width</code> and calculating the percentage of space used within the entire <code>ScrollView</code>.</p>
              <p>This homemade &quot;scroll wheel&quot; includes haptic feedback to ensure the user is interacting with the adjuster.</p>
              {/* <Interaction fileName="Memoir Meditation Dial.mp4" caption="Meditation Exercise Settings"/> */}
            </div>
            <Interaction fileName="Memoir_Exercise_2.mp4" caption="Horizontal 'Wheel' to Set Timer"/>
          </div>


          {/* <pre className="pre">
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
          </pre> */}

          <Gist id="f6c8bf50b88fa212377b626274ee1f1a"/>
        </div>
      </section>


      <section className="container">
        <div className="readingWidth">
          <figure className="center">
            <img src="/project_images/memoir/memoir-splash.png" alt="Memoir Splash intro screen" className="center" width="400" style={{borderRadius: 7}}/>
            <figcaption>Thanks for visiting!</figcaption>
          </figure>
        </div>
      </section>

    </Layout>
  )
};



function Interaction({ fileName, caption }) {
  return (
    <figure className="center" style={{marginTop: "2em", marginBottom: "2em"}}>
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
};
