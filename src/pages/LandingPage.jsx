import { MoviesGrid } from "../components/Movies_grid";
import { Search } from "../components/Search";

export function LandingPage () {
    return (
        <div>
        <Search />
        <MoviesGrid />
        </div>);
}