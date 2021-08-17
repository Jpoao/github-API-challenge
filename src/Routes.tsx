import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Index";

const Routes = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search" exact>
                <h1>SEARCH</h1>
            </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;