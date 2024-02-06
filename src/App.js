import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteFooter from './components/common/SiteFooter';
import SiteNav from './components/common/SIteNav';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <SiteNav/>
      <Home/>
      <SiteFooter/>
    
    </div>
  );
}

export default App;
