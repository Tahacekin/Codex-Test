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
        <Link to="/works">Back to works</Link>
      </main>
    );
  }

  if (!work) {
    return null;
  }

  return (
    <main className={styles.main}>
      <section className={`${styles.header} fade-in`}>
        <h1>{work.title}</h1>
        <p>{work.description}</p>
        <div className={styles.meta}>
          {work.location && <span>{work.location}</span>}
          {work.year && <span>{work.year}</span>}
        </div>
      </section>
      <section className={`${styles.gallery} fade-in`}>
        {work.gallery?.map((src) => (
          <img key={src} src={src} alt={`${work.title} still`} />
        ))}
      </section>
      {work.credits && (
        <section className={`${styles.credits} fade-in`}>
          <h2>Credits</h2>
          <ul>
            <li>
              <span>Photographer</span>
              <span>{work.credits.photographer}</span>
            </li>
            <li>
              <span>Stylist</span>
              <span>{work.credits.stylist}</span>
            </li>
            {work.credits.models && (
              <li>
                <span>Models</span>
                <span>{work.credits.models.join(', ')}</span>
              </li>
            )}
          </ul>
        </section>
      )}
      <Link to="/works" className={styles.backLink}>
        ← Back to works
      </Link>
    </main>
  );
}

export default WorkDetail;
