import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Movies from "./components/Movies";

import "./css/standard.css";

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Movies />
      <Footer />
    </>
  );
}

export default App;
