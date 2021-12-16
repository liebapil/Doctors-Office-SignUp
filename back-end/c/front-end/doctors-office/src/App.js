import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contact from './routes/Contact';
import Doctor from './routes/Doctor';
import Patient from './routes/Patient';
import Home from './routes/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/doctor" component={Doctor}/>
        <Route path="/patient" component={Patient}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      
    </div>
  );
}

export default App;
