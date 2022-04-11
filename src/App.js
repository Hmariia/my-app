import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App