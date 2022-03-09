import noPoster from "../placeholder.webp";

export function getMovieImg(path , width ) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : noPoster
}