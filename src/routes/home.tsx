import About from '../components/about/about';
import Banner from '../components/banner/banner';
import Builders from '../components/builders/builders';
import Footer from '../components/footer/footer';
import Properties from '../components/properties/properties';

export default function Home() {
  return (
    <>
      <Banner />
      <Builders />
      <About />
      <Properties />
      <Footer />
    </>
  );
}
