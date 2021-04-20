import './App.scss';
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { Route, Switch, useLocation } from "react-router-dom";
import { NotFound } from "./NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Titlebar } from "./Titlebar"
import { Profile } from "./Profile";
import { Wishlist } from './Wishlist';
import { Search } from './Search';

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={200}
        classNames="fade"
        key={location.pathname}
      >
        <div className="App">
          <div className="div-1"> <Titlebar /> </div>
          <div className="div-2"> <Navbar /> </div>
          <div className="div-3"> 
            <Switch location={location}>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}


export default App;