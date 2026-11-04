import { PageHead, CtaBand } from '../components/Layout.jsx';
import { MACHINES } from '../data';

export default function Machineries() {
  return (
    <>
      <PageHead title="Machineries" intro="Material handling equipment on hire. Ask us for capacities and rates." />
      <section className="section">
        <div className="wrap">
          <ul className="rows wide">
            {MACHINES.map((m) => <li key={m.t}><h3>{m.t}</h3><p>{m.d}</p></li>)}
          </ul>
        </div>
      </section>
      <CtaBand text="Need equipment for a lift or shutdown? Send us the dates and location." />
    </>
  );
}
