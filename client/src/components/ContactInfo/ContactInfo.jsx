import styles from './ContactInfo.module.css';

function ContactInfo({ email, socials }) {
  return (
    <section className={`${styles.wrapper} fade-in`}>
      <h2>Get in touch</h2>
      <p>
        Let's start your fashion journey. Share your concept and let's craft something unforgettable together.
      </p>
      <a className={styles.email} href={`mailto:${email}`}>
        {email}
      </a>
      <div className={styles.socials}>
        {Object.entries(socials).map(([network, url]) => (
          <a key={network} href={url} target="_blank" rel="noreferrer">
            {network}
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
