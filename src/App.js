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
import SignUp from "./Login/SignUp";
import { AuthProvider } from "./Login/AuthContext";
import ProfileSite from "./component/Profile/ProfileSite";
import NotFound from "./component/NotFound/404";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/profile" element={<ProfileSite />} />
          <Route path="/howitworks" element={<div><Navbar/><SectionHow /><Footer /></div>} />
          <Route path="/meals" element={<div><Navbar/><SectionMeal /><Footer /></div>} />
          <Route path="/testmonial" element={<div><Navbar/><SectionTestimonial /><Footer /></div>} />
          <Route path="/pricing" element={<div><Navbar/><SectionPricing /><Footer /></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
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




