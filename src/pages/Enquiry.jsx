import { useState } from 'react';
import { PageHead } from '../components/Layout.jsx';
import { COMPANY, SERVICES } from '../data';

const empty = { name: '', company: '', email: '', phone: '', service: '', message: '' };

export default function Enquiry() {
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!v.name.trim()) x.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.';
    if (!v.message.trim()) x.message = 'Tell us briefly what you need.';
    setErr(x);
    if (Object.keys(x).length) return;
    // TODO: replace with a POST to your backend or a form service. For now it opens the visitor's email app.
    const body = Object.entries(v).map(([k, val]) => `${k}: ${val}`).join('\n');
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Enquiry from website')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (k, label, type = 'text') => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      <input id={k} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} />
      {err[k] && <span className="err">{err[k]}</span>}
    </div>
  );

  return (
    <>
      <PageHead title="Request a quote" intro="Share your scope and timeline. We reply with questions or a clear next step." />
      <section className="section">
        <div className="wrap narrow">
          {sent ? (
            <div className="done">
              <h2>Enquiry ready to send</h2>
              <p>Your email app should have opened with your details. If it did not, write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
              <button className="btn" onClick={() => { setV(empty); setSent(false); }}>Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="two">{field('name', 'Full name')}{field('company', 'Company')}</div>
              <div className="two">{field('email', 'Email', 'email')}{field('phone', 'Phone', 'tel')}</div>
              <div className="field">
                <label htmlFor="service">Service needed</label>
                <select id="service" value={v.service} onChange={set('service')}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.t}>{s.t}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea id="message" rows="6" value={v.message} onChange={set('message')} aria-invalid={!!err.message} />
                {err.message && <span className="err">{err.message}</span>}
              </div>
              <button className="btn" type="submit">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
