import styles from './MovieDetails.module.css';
import { get } from '../utils/httpClient';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Spinner } from '../components/Spinner';



export function MovieDetails () {
    const { movieId } = useParams();
    const [Isloading , setIsloading] = useState(true);
    const [movie, setMovie] = useState(null);

    
    useEffect(() => {
        setIsloading(true);

        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setIsloading(false);
        });
    }, [movieId]);


    if (Isloading) {
        return <Spinner />;
    }

    if (!movie) {
        return null;
    }

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imagenUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <div><strong>Title:</strong> {movie.original_title}</div>
                <p><strong>Description:</strong> {movie.overview}</p>
                <div><strong>Genere:</strong> {movie.genres.map(gen => gen.name).join(", ")}</div>
            </div>
        </div>
    );
}