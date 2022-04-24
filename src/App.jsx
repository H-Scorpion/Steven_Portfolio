import './App.css';
import About from './components/about/about';
import Navigation from './components/navigation/navigation';
import Experience from './components/experience/experience';
import './styles.css'

function App() {
  return (
    <div className="App">
      <div>
        <Navigation/>
      </div>
      <div className="container-fluid p-0">
        <About/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
