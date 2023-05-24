import '../styles/global.css'
import './globals.css'
import '../styles/contact_css/Contact.css'
import '../styles/projects_css/Projects.css'
import 'aos/dist/aos.css';

import { LightContextProvider } from '../components/LightContext'

export default function App({ Component, pageProps }) {
  return (
      <LightContextProvider>
        <Component {...pageProps} />
      </LightContextProvider>
  )
};
