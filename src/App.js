import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero";
import Featured from "./component/Featured";
import SectionHow from "./component/SectionHow";
import SectionMeal from "./component/SectionMeal";
import SectionTestimonial from "./component/SectionTestimonial";
import SectionPricing from "./component/SectionPricing";
import SectionCta from "./component/SectionCta";
import Footer from "./component/Footer";
import Login from "./Login/Login";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>

    </Routes>
    </BrowserRouter>
  );
}


function Home() {
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




