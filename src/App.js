import logo from './logo.svg';
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import NotFound from './components/NotFound';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Cart from "./components/cart/Cart"
import './App.css';
import TemplateProvider from './components/templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from "./components/ItemDetails/DetailView"
import {Box} from "@material-ui/core"

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
            <Header />
            <Box style ={{marginTop: 54}}>
            <Switch>
              <Route exact path ="/" component={Home}></Route> 
              <Route exact path ="/cart" component={Cart}></Route> 
              <Route exact path ="/product/:id" component={DetailView}></Route>
              <Route component={NotFound} />
              </Switch>
              </Box >
          </BrowserRouter>
      </ContextProvider>
      </TemplateProvider>      
  );
}

export default App;
