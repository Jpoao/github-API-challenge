import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/index";
import Search from "./pages/Search";

const Routes = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search" exact>
                <Search/>
            </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;