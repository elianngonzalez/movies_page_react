import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';
import noPoster from "../placeholder.webp"

export function Moviecard({movie})  {
    const imagenUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : noPoster ;
    return (
        
        <li className={style.movieCard}>
            <Link to ={"/Movies/" + movie.id}>
            <img width={230} height={347} className={style.movieCardImage} src={imagenUrl} alt="" />
            <h5>{movie.title}</h5>
            </Link>
        </li>
        
    );
}