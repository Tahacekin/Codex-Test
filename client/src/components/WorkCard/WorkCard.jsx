import styles from './WorkCard.module.css';

function WorkCard({ work, onClick }) {
  return (
    <article className={`${styles.card} fade-in`} onClick={onClick} role="button" tabIndex={0} onKeyUp={(e) => e.key === 'Enter' && onClick()}>
      <div className={styles.imageWrapper}>
        <img src={work.imageUrl} alt={work.title} />
      </div>
      <div className={styles.meta}>
        <h3>{work.title}</h3>
        {work.tagline && <p>{work.tagline}</p>}
      </div>
    </article>
  );
}

export default WorkCard;
