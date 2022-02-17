import style from './MovieCard.module.css';


export function Moviecard({movie})  {
    const imagenUrl = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
    return (<li className={style.movieCard}>
            <img width={230} height={347} className={style.movieCardImage} src={imagenUrl} alt="" />
            <div>{movie.title}</div>
            </li>
    )
}