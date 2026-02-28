import "../styles/Journey.css";

const Journey = () => {
  return (
    <section className="journey-section">
      <h2>Our Journey</h2>

      <div className="timeline">
        <div className="timeline-item">
          <span>2010</span>
          <p>Foundation established</p>
        </div>
        <div className="timeline-item">
          <span>2015</span>
          <p>Expansion to multiple states</p>
        </div>
        <div className="timeline-item">
          <span>2020</span>
          <p>Reached 50,000+ beneficiaries</p>
        </div>
        <div className="timeline-item">
          <span>2024</span>
          <p>National-level impact programs</p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
