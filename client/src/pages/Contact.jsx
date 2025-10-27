import { useState } from 'react';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';
import useReveal from '../hooks/useReveal.js';
import styles from './Contact.module.css';

const socials = {
  instagram: 'https://instagram.com/aura.design',
  twitter: 'https://twitter.com/aura_design',
  facebook: 'https://facebook.com/aura.design',
  tiktok: 'https://tiktok.com/@auradesign'
};

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useReveal([form, status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to send');
        }
        return res.json();
      })
      .then((data) => {
        setStatus({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'There was an issue sending your message. Please try again.' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className={styles.main}>
      <ContactInfo email="hello@aura.studio" socials={socials} />
      <section className={`${styles.formSection} fade-in`}>
        <h2>Drop us a spark</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {status && <p className={`${styles.status} ${styles[status.type]}`}>{status.message}</p>}
      </section>
    </main>
  );
}

export default Contact;
