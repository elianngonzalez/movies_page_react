import { Moviecard } from './Moviecard';
import movies from './movies.json';
import style from './MoviesGrid.module.css';
export function MoviesGrid () {
    return (<ul className={style.movieGrid}>
        {movies.map( (movie) => (
                <Moviecard key={movie.id} movie={movie} />
        ))}
    </ul>
    );}