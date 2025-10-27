import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <main className={styles.main}>
      <h1>404 – Page Not Found</h1>
      <p>The page you are looking for has been moved, archived or never existed.</p>
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default NotFound;
