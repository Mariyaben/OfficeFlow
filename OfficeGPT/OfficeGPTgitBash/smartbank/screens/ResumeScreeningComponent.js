// ResumeScreeningComponent.js

import React from 'react';

const ResumeScreeningComponent = () => {
  return (
    <div>
      <iframe
        src="http://localhost:8501"  // URL of the Streamlit ATS application
        title="Applicant Tracking System"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ResumeScreeningComponent;
