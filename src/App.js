
import './App.css';
import FirstCompo from './AllCompo/FirstCompo/FirstCompo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navlink from './AllCompo/Navlink/Navlink';
import About from './AllCompo/About/About';
import Contact from './Contact/Contact';
import BlogDetail from './BlogDetail.js/BlogDetail';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Navlink></Navlink>


        <Switch>
            <Route path='/home' >
                <FirstCompo></FirstCompo>
            </Route>
            <Route path='/blog' >
              <FirstCompo></FirstCompo>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
                <Contact></Contact>
            </Route>
            <Route path='/:id' >
                <BlogDetail></BlogDetail>
            </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;


