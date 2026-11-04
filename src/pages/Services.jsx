import { PageHead, CtaBand } from '../components/Layout.jsx';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <>
      <PageHead title="Services" intro="Everything a process plant needs from design through erection, under one contractor." />
      <section className="section">
        <div className="wrap">
          <ul className="rows wide">
            {SERVICES.map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
