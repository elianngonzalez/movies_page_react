import { useEffect , useState } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
import style from './MoviesGrid.module.css';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



export function MoviesGrid () {

    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');
    console.log(search);

    useEffect(() => {
        setLoading(true);
        const urlSearch = search ? `/search/movie?query=${search}` : '/discover/movie';

        get(urlSearch).then(data => {
            setLoading(false);
            setMovies(data.results);
        });
    }, [search]);

    if (Loading) {
        return <Spinner />;
    }


    return (<ul className={style.movieGrid}>
        {movies.map( (movie) => (
                <Moviecard key={movie.id} movie={movie} />
        ))}
    </ul>
    );}

