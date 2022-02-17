import { MoviesGrid } from "./Movies_grid";
import styles from "./App.module.css";

export function App ()  {
    return (<div>
        <header>
            <h1 className={styles.title}>Movies</h1>
            <main>
                <MoviesGrid />  
            </main>
        </header>
    </div>);
};