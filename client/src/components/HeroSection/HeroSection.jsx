import styles from './HeroSection.module.css';

function HeroSection({ backgroundImage, headline, subheading, ctaLabel, ctaTarget }) {
  const handleScroll = () => {
    const el = document.querySelector(ctaTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.hero} fade-in`}>
      <div className={styles.backdrop} style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className={styles.overlay}>
        <div className={styles.copy}>
          <h1>{headline}</h1>
          <p>{subheading}</p>
        </div>
        {ctaLabel && (
          <button className={styles.scrollIndicator} onClick={handleScroll}>
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
