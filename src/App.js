import logo from './logo.svg';
import './App.css';
import Rechart from './compo/Rechart';
import { Line, LineChart } from 'recharts';
import { BrowserRouter , Switch , Route, Link  } from 'react-router-dom';
import Header from './compo/Header/Header';
import NotFund from './compo/Not Found/NotFund';
import About from './About/About';
import NavMeanu from './NavMeanu/NavMeanu';
import UserDetail from './UserDetail/UserDetail';


function App() {
 
  return (

    <div>
     
      <BrowserRouter> 
        <NavMeanu></NavMeanu>
      <Switch>
           <Route path='/header'>
            <Header></Header>
            </Route>
             <Route exact path='/'>
                <Header></Header>
            </Route> 
            <Route path='/notfound'>
                <NotFund></NotFund>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path="/:id">
              <UserDetail></UserDetail>
            </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
   
  );         
};

export default App;




