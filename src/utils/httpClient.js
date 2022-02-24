
const api = 'https://api.themoviedb.org/3'

export function get ( path ) {
    return fetch( api + path ,{
            headers:{
                Authorization: 
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmFmZTFmMTVhY2FjMjUyY2VhZTMwODllMzk4YWVmYiIsInN1YiI6IjYyMTcxMTYxODhiYmU2MDA0Mjc1NThlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4zcyNuzV5BrirNUfi3aICDP9m1H6SxAPA_xyfOz0MQ',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(response => response.json())
}