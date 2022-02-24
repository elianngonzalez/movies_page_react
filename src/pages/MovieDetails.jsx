import styles from './MovieDetails.module.css';
import { get } from '../utils/httpClient';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';


export function MovieDetails () {
    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return <div className={styles.detailsContainer}>Loading...</div>;
    }

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imagenUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <div><strong>title:</strong> {movie.original_title}</div>
                <p><strong>description:</strong> {movie.overview}</p>
            </div>
        </div>
    );
}