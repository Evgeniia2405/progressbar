import "./App.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function App() {
  return (
    <div className="page">
      <ProgressBar value={3} maxValue={4} type="goods" />
      <ProgressBar value={1} maxValue={4} type="assembly" />
    </div>
  );
}

export default App;
