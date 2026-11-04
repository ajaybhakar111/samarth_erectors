import { PageHead } from '../components/Layout.jsx';
import { COMPANY } from '../data';

export default function Contact() {
const mapUrl =
'https://www.google.com/maps?q=Bhoomi+Land+Mark+Sector+17+Khanda+Colony+New+Panvel+Raigad&output=embed';

const directionsUrl =
'https://www.google.com/maps/search/?api=1&query=Bhoomi+Land+Mark+Sector+17+Khanda+Colony+New+Panvel+Raigad';

return (
<> <PageHead
     title="Contact us"
     intro="Call, write or visit. Send an enquiry and we will respond as soon as we can."
   />

```
  <section className="section">
    <div className="wrap split">
      <dl className="facts light">
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>
              {COMPANY.phone}
            </a>
          </dd>
        </div>

        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </dd>
        </div>

        <div>
          <dt>Address</dt>
          <dd>{COMPANY.address}</dd>
        </div>

        <div>
          <dt>Hours</dt>
          <dd>{COMPANY.hours}</dd>
        </div>
      </dl>

      <div className="mapbox">
        <iframe
          title="Samarth Erectors Location"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    <div className="wrap">
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ marginTop: '24px', display: 'inline-block' }}
      >
        Get Directions ↗
      </a>
    </div>
  </section>
</>
)
};