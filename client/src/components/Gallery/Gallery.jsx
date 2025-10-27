import { useNavigate } from 'react-router-dom';
import WorkCard from '../WorkCard/WorkCard.jsx';
import styles from './Gallery.module.css';

function Gallery({ items, title, description }) {
  const navigate = useNavigate();

  return (
    <section className={`${styles.wrapper} fade-in`}>
      {(title || description) && (
        <header className={styles.header}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      <div className={styles.grid}>
        {items.map((item) => (
          <WorkCard key={item.id} work={item} onClick={() => navigate(`/works/${item.id}`)} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
