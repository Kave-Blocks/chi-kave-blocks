import styles from "./style";

import Navbar from "./components/Navbar";
import Innovation from "./components/Innovation";
import Service from "./components/Service";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Innovation />
      <Service />
    </div>
  );
}

export default App;
