import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { COMPANY } from '../data';

const NAV = [['/', 'Home'], ['/about', 'About us'], ['/services', 'Services'], ['/projects', 'Projects'], ['/machineries', 'Machineries'], ['/clients', 'Clients'], ['/gallery', 'Gallery'], ['/contact', 'Contact']];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-in">
          <Link to="/" className="brand">Samarth <span>Erectors</span></Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          <nav id="nav-links" className={open ? 'links open' : 'links'} aria-label="Main">
            {NAV.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
            <Link to="/enquiry" className="btn btn-sm">Request a quote</Link>
          </nav>
        </div>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="foot">
        <div className="wrap foot-in">
          <div>
            <p className="brand">Samarth <span>Erectors</span></p>
            <p className="muted-d">{COMPANY.iso} certified. Technical services for process plants since {COMPANY.since}.</p>
          </div>
          <div>
            <p className="foot-h">Pages</p>
            {NAV.slice(1, 6).map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}
          </div>
          <div>
            <p className="foot-h">Contact</p>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>
            <p className="muted-d">{COMPANY.address}</p>
          </div>
        </div>
        <div className="wrap foot-base">© {new Date().getFullYear()} Samarth Erectors. All rights reserved.</div>
      </footer>
    </>
  );
}

export function PageHead({ title, intro }) {
  return (
    <section className="pagehead">
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ text = 'Tell us about your plant, scope and timeline. We will come back with a clear quote.' }) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <h2>{text}</h2>
        <Link to="/enquiry" className="btn">Request a quote</Link>
      </div>
    </section>
  );
}
