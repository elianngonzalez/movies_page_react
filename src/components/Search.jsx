import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.css';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export function Search() {
	const query = useQuery();
	const search = query.get('search');

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault()
	};

	return (
		<div className={styles.searchContainer}>
			<form className={styles.searchbox} onSubmit={handleSubmit} >
				<input className={styles.inputSearch} 
				type="text" 
				value={search} 
				onChange={(e) => {
					const value = e.target.value;
					history.push(`/?search=${value}`);
				}}
				arealabel="Search movies" 
				placeholder="Search..." />
				<FaSearch size={20} color="black" className={styles.buttonSearch} />
			</form>
		</div>
	)
}
