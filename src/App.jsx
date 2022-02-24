//import { MoviesGrid } from "./components/Movies_grid";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";

import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
//import { MovieDetails } from "./pages/MovieDetails";



export function App ()  {
    return (<div>
        <header>
                <Router>
                    <Link to ="/"><h1 className={styles.title}>Movies</h1></Link>

                <Routes>
                    <Route path="/Movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={ <LandingPage /> } />

                </Routes>
            </Router>
        </header>
    </div>);
};