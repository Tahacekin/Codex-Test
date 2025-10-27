import styles from './ContactInfo.module.css';

function ContactInfo({ email, socials }) {
  return (
    <section className={`${styles.wrapper} fade-in`}>
      <h2>Launch with us</h2>
      <p>
        Share the spark you want to bring to market. AURA will return with brand foundations, product mockups and a store ready to ship.
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
