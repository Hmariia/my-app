import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App