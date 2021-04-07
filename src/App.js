import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './components/firebase.config';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      <Footer />
    </Router>
  </div>
  );
}

export default App;
