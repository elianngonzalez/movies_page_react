import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get('search');

    const [SearchText, setSearchText] = useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/?search=${SearchText}`)
    };

    useEffect(() => {
        setSearchText(search || "" );
    } , [search]);

    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchbox} onSubmit={handleSubmit} >
                <input className={styles.inputSearch} type="text" value={SearchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." />
                <button className={styles.buttonSearch} type="submit"><FaSearch size={20} /></button>
            </form>
        </div>
    )
}
