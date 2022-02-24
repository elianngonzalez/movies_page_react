import { useEffect , useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
//import movies from './movies.json';
import style from './MoviesGrid.module.css';


export function MoviesGrid () {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        get('/discover/movie').then(data => {
            setMovies(data.results);
        });
    }, []);
    return (<ul className={style.movieGrid}>
        {movies.map( (movie) => (
                <Moviecard key={movie.id} movie={movie} />
        ))}
    </ul>
    );}

