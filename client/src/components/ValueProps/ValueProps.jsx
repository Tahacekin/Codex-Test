import styles from './ValueProps.module.css';

function ValueProps({ items, title, description }) {
  return (
    <section id="value-props" className={`${styles.wrapper} fade-in`}>
      {(title || description) && (
        <header className={styles.header}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ValueProps;
