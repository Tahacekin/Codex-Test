import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery/Gallery.jsx';
import useReveal from '../hooks/useReveal.js';

function Works() {
  const [items, setItems] = useState([]);

  useReveal([items]);

  useEffect(() => {
    fetch('/api/works')
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error('Failed to load works', err));
  }, []);

  return <main>{items.length > 0 && <Gallery items={items} title="Portfolio" description="Select a campaign to view full details." />}</main>;
}

export default Works;
