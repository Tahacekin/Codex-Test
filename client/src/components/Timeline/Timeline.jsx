import styles from './Timeline.module.css';

function Timeline({ steps, title, description }) {
  return (
    <section className={`${styles.wrapper} fade-in`}>
      {(title || description) && (
        <header className={styles.header}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      <div className={styles.timeline}>
        {steps.map((step) => (
          <div key={step.step} className={styles.step}>
            <div className={styles.badge}>{step.step}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
