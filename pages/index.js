import Head from 'next/head';
import Image from 'next/image';
import BannerHome from '../components/BannerHome/BannerHome';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HighlightHome from '../components/HighlightHome/HighlightHome';
import HomePresentation from '../components/HomePresentation/HomePresentation';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';
import ReleaseHome from '../components/ReleaseHome/ReleaseHome';
import RulerHome from '../components/RulerHome/RulerHome';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cannaha</title>
        <meta name="description" content="Generated by Cannaha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <BannerHome />
        <HomePresentation />
        <ReleaseHome />
        <HighlightHome />
        <RulerHome />
        <InstagramFeed />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
