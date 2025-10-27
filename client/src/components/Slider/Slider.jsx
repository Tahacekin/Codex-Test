import { useState } from 'react';
import styles from './Slider.module.css';

function Slider({ images, title }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={`${styles.wrapper} fade-in`}>
      {title && <h2>{title}</h2>}
      <div className={styles.slider}>
        <button onClick={prev} aria-label="Previous image">←</button>
        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((image) => (
              <figure key={image.src} className={styles.slide}>
                <img src={image.src} alt={image.alt} />
                {image.alt && <figcaption>{image.alt}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
        <button onClick={next} aria-label="Next image">→</button>
      </div>
      <div className={styles.dots}>
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === index ? styles.active : ''}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;
