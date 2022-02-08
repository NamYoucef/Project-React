import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import AddProduct from './pages/AddProd';
import ShowProd from './pages/ShowProd';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path="/list-product"><App/></Route>
          <Route path='/add-product'><AddProduct/></Route>
          <Route path='/show-product/:_id'><ShowProd/></Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
