import { useEffect, useState } from 'react';
import Timeline from '../components/Timeline/Timeline.jsx';
import Slider from '../components/Slider/Slider.jsx';
import useReveal from '../hooks/useReveal.js';
import styles from './About.module.css';

function About() {
  const [about, setAbout] = useState(null);

  useReveal([about]);

  useEffect(() => {
    fetch('/api/about')
      .then((res) => res.json())
      .then(setAbout)
      .catch((err) => console.error('Failed to load about content', err));
  }, []);

  if (!about) {
    return null;
  }

  return (
    <main className={styles.main}>
      <section className={`${styles.intro} fade-in`}>
        <h1>{about.intro.title}</h1>
        {about.intro.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </section>
      <section className={`${styles.team} fade-in`}>
        <h2>The team</h2>
        <div className={styles.teamGrid}>
          {about.team.map((member) => (
            <article key={member.name}>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
      <Timeline steps={about.process} title="Our process" />
      <Slider images={about.sliderImages} title="Studio moments" />
    </main>
  );
}

export default About;
