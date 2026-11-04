import { Link } from 'react-router-dom';
import { PageHead } from '../components/Layout.jsx';

export default function NotFound() {
  return (
    <>
      <PageHead title="Page not found" intro="That address does not exist or has moved." />
      <section className="section"><div className="wrap"><Link to="/" className="btn">Back to home</Link></div></section>
    </>
  );
}
