import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Country from './components/Country'
import CountryDetails from './components/CountryDetails'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Country />
        </Route>        

        <Route exact path="/detail/:name">
          <CountryDetails />
        </Route>

        <Route path="*"> 
          <PageNotFound />
        </Route>   
      </Switch>
    </div>
   </Router>
  );
}

export default App;
