import styles from './Footer.module.css';

const socials = [
  { label: 'Instagram', url: 'https://instagram.com/sharpstudio' },
  { label: 'Twitter', url: 'https://twitter.com/sharpstudio' },
  { label: 'Facebook', url: 'https://facebook.com/sharpstudio' },
  { label: 'TikTok', url: 'https://tiktok.com/@sharpstudio' }
];

const pages = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Works', url: '/works' },
  { label: 'Contact', url: '/contact' }
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3>SHARP</h3>
          <p>
            Fashion storytellers creating high-impact imagery for brands with daring vision.
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
        <span>© {new Date().getFullYear()} Sharp Collective. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
