import { PageHead, CtaBand } from '../components/Layout.jsx';
import { COMPANY, INDUSTRIES } from '../data';

export default function About() {
  return (
    <>
      <PageHead title="About Samarth Erectors" intro={`Technical services for process plants since ${COMPANY.since}.`} />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p>The Samarth group provides technical services to the chemical, pharmaceutical, food and petrochemical industries. We supply complete project drawings and plant design, and carry out the field work ourselves.</p>
            <p>A motivated team of experienced site engineers and supervisors handles piping, structural fabrication, equipment and machinery erection, site fabrication of storage tanks with or without shot blasting, painting and thermal insulation, and shutdown planning.</p>
            <p>We also supply skilled manpower and hire out material handling equipment, including Hydra, mobile cranes, forklifts, stacker, scissor lift and finger working platforms.</p>
          </div>
          <dl className="facts light">
            <div><dt>Established</dt><dd>{COMPANY.since}</dd></div>
            <div><dt>Certification</dt><dd>{COMPANY.iso}</dd></div>
            <div><dt>Industries</dt><dd>{INDUSTRIES.join(', ')}</dd></div>
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
