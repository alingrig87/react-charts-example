// src/App.jsx
import './App.css';
import LineChartExample from './LineChartExample.tsx';
import OneLineLineChart from './OneLineLineChart.tsx'

function App() {
  return (
    <div className="App">
      <h1>React Charts with Vite</h1>
      <LineChartExample />
      <OneLineLineChart />
    </div>
  );
}

export default App;
