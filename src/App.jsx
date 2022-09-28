import styles from "./style";
import Navbar from "./components/Navbar";
import Innovation from "./components/Innovation";
import Service from "./components/Service";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Innovation />
      <Service />
      <Process />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
