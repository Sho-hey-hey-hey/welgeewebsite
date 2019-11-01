import React from 'react';
import PropTypes from "prop-types"

const AboutSectionTitle = ({enTitle, jpTitle}) => {
  return (
    <div className="section-title">
      <h1>{enTitle}</h1>
      <h4>{jpTitle}</h4>
      <div className="red-line" />
      <style jsx>{`
        .section-title h1{
          justify-content: center;
          display: flex;
          margin: 0;
        }
        .section-title h4{
          justify-content: center;
          display: flex;
          margin: 0.8rem 0;
        }
        .red-line {
          width: 60px;
          height: 3px;
          background: #FC627A;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

AboutSectionTitle.propTypes = {
  jpTitle: PropTypes.string.isRequired,
  enTitle: PropTypes.string.isRequired,
}

export default AboutSectionTitle;
