import Header  from './components/Header/index'
import Hero  from './components/Hero/index'
import Companies from './components/Companies/index'
import Residencies from './components/Residencies';
import Value from './components/Value'
import Contacts from './components/Contacts';
import  GetStarted  from './components/GetStated';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
    <div>
      <Header/>
      <Hero/>
    </div>
    <div>
      <Companies/>
      <Residencies/>
      <Value/>
    </div>
    <div>
      <Contacts/>
      <GetStarted/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
