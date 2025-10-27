import { useState } from 'react';
import styles from './FAQ.module.css';

function FAQ({ items, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`${styles.wrapper} fade-in`}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {items.map((item, index) => {
          const isOpen = index === activeIndex;
          return (
            <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span>{isOpen ? '–' : '+'}</span>
              </button>
              <div className={styles.answer} style={{ maxHeight: isOpen ? '280px' : '0px' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
