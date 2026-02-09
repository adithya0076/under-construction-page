import React from 'react';
import './Connect.css';

const Connect = () => {
  return (
    <footer className="connect-section">
      <div className="connect-inner">
        <div className="connect-panel">
          <h2 className="connect-title">CONNECT</h2>

          <div className="connect-items">
          <div className="connect-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.78 3.06a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.11-.45c.98.4 2.01.66 3.06.78A2 2 0 0 1 22 16.92z" stroke="#ff6b23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="connect-text">0800 754 773</div>
          </div>

          <div className="connect-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16v16H4z" stroke="#ff6b23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="#ff6b23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="connect-text">info@alps-contractors.co.nz</div>
          </div>

          <div className="connect-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" stroke="#ff6b23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="2" stroke="#ff6b23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="connect-text">Auckland, New Zealand</div>
          </div>
          </div>

          <div className="connect-footer">© 2026 ALPS CONTRACTORS LIMITED. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
};

export default Connect;
