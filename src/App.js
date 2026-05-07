import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './styles.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;