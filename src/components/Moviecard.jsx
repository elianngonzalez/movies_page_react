import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';

export function Moviecard({movie})  {
    const imagenUrl = `https://image.tmdb.org/t/p/w400${movie.poster_path}` ;
    return (
        
        <li className={style.movieCard}>
            <Link to ={"/Movies/" + movie.id}>
            <img width={230} height={347} className={style.movieCardImage} src={imagenUrl} alt="" />
            <h5>{movie.title}</h5>
            </Link>
        </li>
        
    );
}