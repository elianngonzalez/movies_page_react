import { MoviesGrid } from "../components/Movies_grid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebauce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage () {
    const query = useQuery();
    const search = query.get('search');
    //taje query para resetear los estados(useState) del moviegrid destruyendo el componente y volviendo a renderizarlo al 
    //cambiar la key del componente (<MovieGrid />);
    //pero tambien podria traer todos los estados(useState) del componente MoviesGrid al 
    //LandingPage y resetearlos en el, pasando el estado como props() al componente MoviesGrid

    const debauncedSearch = useDebounce(search, 500);

    return (
        <div>
        <Search />
        <MoviesGrid key={debauncedSearch} search={debauncedSearch} />
        </div>);
}