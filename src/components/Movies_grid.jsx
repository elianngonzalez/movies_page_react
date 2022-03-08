import { useEffect , useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
import style from './MoviesGrid.module.css';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



export function MoviesGrid ({ search }) {

    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [hasmore, sethasMore] = useState(true);
    console.log(search);

    useEffect(() => {
        setLoading(true);
        const urlSearch = search 
        ? `/search/movie?query=${search}&page=${Page} ` : '/discover/movie?page=' + Page;

        get(urlSearch).then(data => {
            //setMovies(prevMovies => [...prevMovies, ...data.results]);
            setMovies(prevMovies => prevMovies.concat(data.results));
            sethasMore(data.total_pages > data.page);
            setLoading(false);

        });
    }, [search, Page]);


    return (
        <InfiniteScroll dataLength={movies.length} 
        next={()=>setPage((prevPage)=>prevPage + 1)} 
        hasMore={hasmore}
        loader={<Spinner />}>
            <ul className={style.movieGrid}>
                {movies.map((movie) => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );}

