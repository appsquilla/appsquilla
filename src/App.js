import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Consultation from './pages/Consultation/Consultation'
import Services from './pages/Services/Services'
import GetQuote from './pages/Services/GetQuote';


function App() {
  return (
    <div className="App">
      
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/professional-consultation'  component={Consultation} />
          <Route path='/services'  component={Services} />
          <Route path='/get-quote' component={GetQuote} />
          <Route path='/ask-for-demo' component={GetQuote} />
        
    </div>
  );
}

export default App;
