import NavBar from "./compenents/NavBar.js";
import Contact from "./compenents/Contact.js";
import FeedBacks from "./compenents/FeedBack.js";
import Hero from "./compenents/Hero.js";
import bg from "./parts/bg.png";
import ImageShow from "./compenents/ImageShow.js";
function App() {
  return (
    <div>
      <NavBar />
      <div
        className=" bg-no-repeat bg-cover bg-fixed "
        style={{ backgroundImage: `url(${bg})` }}>
        <div>
          <Hero />
          <FeedBacks />
          <ImageShow />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
