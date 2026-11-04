import { PageHead, CtaBand } from '../components/Layout.jsx';
import { CLIENTS } from '../data';

export default function Clients() {
  return (
    <>
      <PageHead title="Clients" intro="Plants that trust us with their piping, structures and equipment." />
      <section className="section">
        <div className="wrap clients">
          {CLIENTS.map((c, i) => <p key={i} className={c.sample ? 'client sample' : 'client'}>{c.name}</p>)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
