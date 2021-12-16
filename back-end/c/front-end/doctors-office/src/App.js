import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contact from './routes/Contact';
import Doctor from './routes/Doctor';
import Patient from './routes/Patient';
import Home from './routes/home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/doctor" component={Doctor}/>
            <Route path="/patient" component={Patient}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
