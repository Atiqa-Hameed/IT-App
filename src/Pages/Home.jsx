import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AditionalContent from "../components/AditionalContent";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AditionalContent />
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
