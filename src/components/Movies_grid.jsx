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
    const [Page, setPage] = useState(1);

    const query = useQuery();
    const search = query.get('search');
    console.log(search);

    useEffect(() => {
        setLoading(true);
        const urlSearch = search 
        ? `/search/movie?query=${search}&${Page} ` : '/discover/movie?page='+Page;

        get(urlSearch).then(data => {
            setLoading(false);
            //setMovies(prevMovies => [...prevMovies, ...data.results]);
            setMovies(prevMovies => prevMovies.concat(data.results));
        });
    }, [search, Page]);


    return (
        <InfiniteScroll dataLength={movies.length} 
        next={()=>setPage((prevPage)=>prevPage + 1)} 
        hasMore={true}
        loader={<Spinner />}>
            <ul className={style.movieGrid}>
                {movies.map((movie) => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );}

