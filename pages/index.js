import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, service } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { Constants } from "../common/Constants";
import Service from '../components/service';

const Home = () => {
  return (
    <>
      <Head>
        <title>{Constants.keystoneHealthcareSolutions}</title>
        <meta
          name="description"
          content={Constants.keystoneHealthcareSolutions}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle={Constants.keystoneHealthcareSolutions}
        title="Why Choose Us?">
Keystone Health Consultants is at the forefront of anesthesia care, offering unparalleled consulting services to healthcare providers. With a focus on innovation, quality, and efficiency, we partner with hospitals, surgery centers, and clinics to enhance their anesthesia services.      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      </SectionTitle>
      <Testimonials /> */}
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle> */}
      {/* <Faq /> */}
      <Service data={service} />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;