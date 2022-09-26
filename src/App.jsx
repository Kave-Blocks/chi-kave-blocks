import styles from "./style";

import Navbar from "./components/Navbar";
import Innovation from "./components/Innovation";
import Service from "./components/Service";
import Process from "./components/Process";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Innovation />
      <Service />
      <Process />
    </div>
  );
}

export default App;
