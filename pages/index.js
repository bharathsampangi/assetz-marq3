import Head from 'next/head'
import Footer from '../components/common/Footer'
import Navigation from '../components/common/Navigation'
import Main from '../components/main/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>3 & 4 BHK Apartments for Sale in Whitefield | Assetz Marq</title>
        <link rel="icon" href="/images/Marq-Logo-Original.webp" />
        <meta name="description" 
          content="Assetz Marq 2.0 offers 3 &amp; 4 BHK ultra-modern apartments in Whitefield 
          spread across 22 acres with 6 acres of park and 25+ world-class amenities. Know more." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.assetzmarqofficial.in/"></link>
      </Head>

      <Navigation />

      <main>
        <Main />
      </main>

      <div id="modal-root"></div>
      <Footer />
    </div>
  )
}
