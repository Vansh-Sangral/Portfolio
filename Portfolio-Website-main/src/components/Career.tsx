import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>II-year</h4>
                <h5>KEC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              A responsive quiz application that enables users to participate in topic-based quizzes, 
              track scores, receive instant feedback, and monitor their performance through an intuitive and user-friendly interface.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
               <h4>III-year</h4>
                <h5>KEC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              A full-stack real-time chat application built with the MERN stack, featuring secure authentication,
               instant messaging, online status indicators, and responsive user interfaces for seamless communication.
              
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IV-year</h4>
                <h5>KEC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Federated Graphic Knowledge Tracking (FGKT):
              A privacy-preserving federated learning framework integrated with knowledge graph tracking to enable secure, decentralized model training and intelligent relationship analysis across distributed data sources.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
