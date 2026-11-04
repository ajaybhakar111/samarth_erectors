import { useState } from 'react';
import { PageHead, CtaBand } from '../components/Layout.jsx';
import { PROJECTS, INDUSTRIES } from '../data';

export default function Projects() {
  const [f, setF] = useState('All');
  const list = PROJECTS.filter((p) => f === 'All' || p.industry === f);
  return (
    <>
      <PageHead title="Projects" intro="Recent and current work across process industries." />
      <section className="section">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter by industry">
            {['All', ...INDUSTRIES].map((i) => <button key={i} className={f === i ? 'on' : ''} aria-pressed={f === i} onClick={() => setF(i)}>{i}</button>)}
          </div>
          {list.length === 0 && <p className="muted">No projects listed for this industry yet. Try another filter.</p>}
          <div className="plist">
            {list.map((p) => (
              <article key={p.title + p.client} className="proj">
                <h3>{p.title}{p.sample && <span className="tag">Sample entry</span>}</h3>
                <p>{p.scope}</p>
                <dl>
                  <div><dt>Client</dt><dd>{p.client}</dd></div>
                  <div><dt>Location</dt><dd>{p.place}</dd></div>
                  <div><dt>Industry</dt><dd>{p.industry}</dd></div>
                  <div><dt>Status</dt><dd>{p.status}</dd></div>
                  <div><dt>Cost</dt><dd>{p.cost}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
