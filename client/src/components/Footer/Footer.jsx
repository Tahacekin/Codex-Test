import styles from './Footer.module.css';

const socials = [
  { label: 'Instagram', url: 'https://instagram.com/aura.design' },
  { label: 'Twitter', url: 'https://twitter.com/aura_design' },
  { label: 'Facebook', url: 'https://facebook.com/aura.design' },
  { label: 'TikTok', url: 'https://tiktok.com/@auradesign' }
];

const pages = [
  { label: 'Home', url: '/' },
  { label: 'Studio', url: '/about' },
  { label: 'Launches', url: '/works' },
  { label: 'Contact', url: '/contact' }
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3>AURA</h3>
          <p>
            AI-powered design studio taking creative sparks from idea to fully merchandised, Shopify-ready brands.
          </p>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            {pages.map((page) => (
              <li key={page.label}>
                <a href={page.url}>{page.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span>© {new Date().getFullYear()} Aura Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
