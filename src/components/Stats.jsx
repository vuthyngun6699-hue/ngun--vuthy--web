import React from 'react';
import useCounter from '../hooks/useCounter';

function StatItem({ icon, end, label, subLabel }) {
  const [ref, value] = useCounter(end, 1500);
  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item">
        <i className={`bi ${icon}`}></i>
        <span ref={ref} className="purecounter">{value}</span>
        <p><strong>{label}</strong> <span>{subLabel}</span></p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <StatItem icon="bi-emoji-smile" end={232} label="Happy Clients" subLabel="consequuntur quae" />
          <StatItem icon="bi-journal-richtext" end={521} label="Projects" subLabel="adipisci atque cum quia aut" />
          <StatItem icon="bi-headset" end={1453} label="Hours Of Support" subLabel="aut commodi quaerat" />
          <StatItem icon="bi-people" end={32} label="Hard Workers" subLabel="rerum asperiores dolor" />
        </div>
      </div>
    </section>
  );
}
