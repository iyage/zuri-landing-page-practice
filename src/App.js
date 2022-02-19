import Bensfit from "./Bensfit";
import Anoucement from "./components/Anoucement";
import CourseSection from "./components/CourseSection";
import Desc from "./components/Desc";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Desc />
      <CourseSection />
      <Anoucement />
      <Bensfit />
      <Footer />
    </div>
  );
}

export default App;
