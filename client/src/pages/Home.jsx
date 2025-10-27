import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import ValueProps from '../components/ValueProps/ValueProps.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Timeline from '../components/Timeline/Timeline.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import useReveal from '../hooks/useReveal.js';

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [works, setWorks] = useState([]);

  useReveal([homeData, works]);

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then(setHomeData)
      .catch((err) => console.error('Failed to load home content', err));

    fetch('/api/works')
      .then((res) => res.json())
      .then((data) => setWorks(data.slice(0, 4)))
      .catch((err) => console.error('Failed to load works', err));
  }, []);

  if (!homeData) {
    return null;
  }

  return (
    <main>
      <HeroSection {...homeData.hero} />
      <ValueProps items={homeData.values} title="Why choose us" description="Precision visuals for brands engineered to stand out." />
      <Gallery items={works} title={homeData.galleryIntro.title} description={homeData.galleryIntro.description} />
      <Timeline steps={homeData.process} title="Process" description="A streamlined arc that keeps your production sharp from discovery to delivery." />
      <FAQ items={homeData.faqs} title="FAQs" />
    </main>
  );
}

export default Home;
