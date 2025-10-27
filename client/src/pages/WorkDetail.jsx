import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import styles from './WorkDetail.module.css';

function WorkDetail() {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [error, setError] = useState(null);

  useReveal([work]);

  useEffect(() => {
    fetch(`/api/works/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Not found');
        }
        return res.json();
      })
      .then((data) => {
        setWork(data);
        setError(null);
      })
      .catch(() => {
        setError('Work not found.');
      });
  }, [id]);

  if (error) {
    return (
        <main className={styles.main}>
          <p>{error}</p>
          <Link to="/works">Back to launches</Link>
        </main>
    );
  }

  if (!work) {
    return null;
  }

  return (
    <main className={styles.main}>
      <section className={`${styles.header} fade-in`}>
        <span className={styles.badge}>Launch blueprint</span>
        <h1>{work.title}</h1>
        <p>{work.description}</p>
        <div className={styles.meta}>
          {work.year && <span>{work.year}</span>}
          {work.tagline && <span>{work.tagline}</span>}
        </div>
      </section>
      {work.ideaPrompt && (
        <section className={`${styles.idea} fade-in`}>
          <h2>Original prompt</h2>
          <p>{work.ideaPrompt}</p>
        </section>
      )}
      <section className={`${styles.gallery} fade-in`}>
        {work.gallery?.map((src) => (
          <img key={src} src={src} alt={`${work.title} still`} />
        ))}
      </section>
      {work.brandIdentity && (
        <section className={`${styles.section} fade-in`}>
          <h2>Brand identity</h2>
          <div className={styles.cardGrid}>
            {work.brandIdentity.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {work.capsule && (
        <section className={`${styles.section} fade-in`}>
          <h2>Capsule concepts</h2>
          <div className={styles.cardGrid}>
            {work.capsule.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {work.goToMarket && (
        <section className={`${styles.section} fade-in`}>
          <h2>Go-to-market</h2>
          <div className={styles.cardGrid}>
            {work.goToMarket.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {work.automation && (
        <section className={`${styles.section} fade-in`}>
          <h2>Automation</h2>
          <div className={styles.cardGrid}>
            {work.automation.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      <Link to="/works" className={styles.backLink}>
        ← Back to launches
      </Link>
    </main>
  );
}

export default WorkDetail;
