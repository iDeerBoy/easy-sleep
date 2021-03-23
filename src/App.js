import './App.css';
import Header from './componets/header/header';
import FilterSection from './componets/filterSection/filterSection';
import Results from './componets/results/results';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterSection />
      <Results/>
    </div>
  );
}

export default App;
