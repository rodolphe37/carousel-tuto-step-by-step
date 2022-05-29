import "./App.css";
import Banner from "./components/Banner";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="wrapper">
      <Banner />
      <div className="container">
        <Slider />
      </div>
    </div>
  );
}

export default App;
