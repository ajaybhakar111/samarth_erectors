import { Link } from 'react-router-dom';
import { CtaBand } from '../components/Layout.jsx';
import { COMPANY, INDUSTRIES, SERVICES, PROJECTS } from '../data';

function Blueprint() {
  const d = (n) => ({ '--d': `${n * 0.18}s` });
  return (
    <svg className="blueprint" viewBox="0 0 480 400" role="img" aria-label="Line drawing of a steel frame carrying a pipe run">
      <g className="frame">
        {['M60 350V120', 'M200 350V120', 'M340 350V120', 'M40 120H360', 'M40 235H360', 'M60 235L200 120', 'M200 350L340 235'].map((p, i) => (
          <path key={p} d={p} pathLength="1" style={d(i)} />
        ))}
      </g>
      <path className="pipe" d="M20 285H130V175H270V300H460" pathLength="1" style={d(8)} />
      <g className="flanges">
        {[[130, 285], [130, 175], [270, 175], [270, 300]].map(([x, y]) => <circle key={x + '-' + y} cx={x} cy={y} r="9" style={d(13)} />)}
      </g>
    </svg>
  );
}

export default function Home() {
  const featured = PROJECTS[0];
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <h1>Piping, structure and equipment erection, delivered without drama.</h1>
            <p className="lead">Samarth Erectors has supported chemical, pharmaceutical, food and petrochemical plants since {COMPANY.since}, from drawings to shutdown.</p>
            <div className="actions">
              <Link to="/enquiry" className="btn">Request a quote</Link>
              <Link to="/projects" className="btn btn-ghost">See our projects</Link>
            </div>
          </div>
          <Blueprint />
        </div>
      </section>

      <section className="strip">
        <div className="wrap strip-in">
          <p><strong>{COMPANY.iso}</strong> certified</p>
          <p>Working in <strong>{INDUSTRIES.join(', ').toLowerCase()}</strong> plants</p>
          <p>Site engineers and supervisors on every job</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>One team from drawing to commissioning</h2>
            <p className="muted">Our site engineers and supervisors handle piping, structural fabrication, equipment erection and tank fabrication, so you deal with one contractor instead of five.</p>
            <Link to="/services" className="textlink">All services</Link>
          </div>
          <ul className="rows">
            {SERVICES.slice(0, 6).map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="dark section">
        <div className="wrap split">
          <div>
            <h2>Current opportunity</h2>
            <p className="muted-d">{featured.scope}</p>
          </div>
          <dl className="facts">
            <div><dt>Client</dt><dd>{featured.client}</dd></div>
            <div><dt>Location</dt><dd>All over india</dd></div>
            <div><dt>Status</dt><dd>{featured.status}</dd></div>
            <div><dt>Project cost</dt><dd>{featured.cost}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Why plant managers call us back</h2>
          <div className="trio">
            <div><h3>Minimal disruption</h3><p>Shutdown planning and sequenced site work keep your production interruptions short.</p></div>
            <div><h3>Equipment on hand</h3><p>Hydra, cranes, forklifts and lifting platforms are available on hire, so lifts are never waiting on a third party.</p></div>
            <div><h3>Certified quality</h3><p>Work runs under an {COMPANY.iso} quality system, with experienced supervisors on site.</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
