import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Featured from "./component/Featured";
import SectionHow from "./component/SectionHow";
import SectionMeal from "./component/SectionMeal";
import SectionTestimonial from "./component/SectionTestimonial";
import SectionPricing from "./component/SectionPricing";
import SectionCta from "./component/SectionCta";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <SectionHow />
        <SectionMeal />
        <SectionTestimonial />
        <SectionPricing />
        <SectionCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
