import Home from './Components/Home';
import Form from './Components/Form';
import {BrowserRouter ,Link ,Switch ,Route} from 'react-router-dom'
import Analytics from './Components/Analytics';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Login} />
          <Route  path="/Home"  component={Home} />
          <Route  path="/contactUs" component={Form} />
          <Route  path="/analytics" component={Analytics}/>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
