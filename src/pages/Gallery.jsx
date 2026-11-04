import { useEffect, useState } from 'react';
import { PageHead } from '../components/Layout.jsx';
import { GALLERY } from '../data';

function Photo({ g, onClick }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div className="ph" role="img" aria-label={g.alt}>Add photo</div>;
  return <button className="ph" onClick={onClick}><img src={g.src} alt={g.alt} loading="lazy" onError={() => setBad(true)} /></button>;
}

export default function Gallery() {
  const [sel, setSel] = useState(null);
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setSel(null);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <>
      <PageHead title="Gallery" intro="Fabrication and erection work from our sites." />
      <section className="section">
        <div className="wrap grid">
          {GALLERY.map((g) => <Photo key={g.src} g={g} onClick={() => setSel(g)} />)}
        </div>
      </section>
      {sel && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={sel.alt} onClick={() => setSel(null)}>
          <img src={sel.src} alt={sel.alt} />
          <button className="btn btn-sm" onClick={() => setSel(null)}>Close</button>
        </div>
      )}
    </>
  );
}
