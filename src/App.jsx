//import { MoviesGrid } from "./components/Movies_grid";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";

import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
//import { MovieDetails } from "./pages/MovieDetails";



export function App ()  {
    return (<div className={styles.bg}>
        <header>
                <Router>
                    <Link to ="/"><h1 className={styles.title}>Peliculas</h1></Link>

                <Switch>
                    <Route path="/Movies/:movieId"  > <MovieDetails /></Route> 
                    {/* react-router 6 <Route path="/" element={ <LandingPage /> } /> */}
                    <Route path="/" > <LandingPage /> </Route> 
                </Switch>
            </Router>
        </header>
    </div>);
};