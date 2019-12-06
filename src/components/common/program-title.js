import React from 'react';
import PropTypes from 'prop-types'


const ProgramTitle = props => {
  const {number, enTitle, jpTitle} = props;
  return (
    <div className="header">
      <div className="circle">{number}</div>
      <h3>{enTitle}</h3>
      <p>{jpTitle}</p>
      <style jsx>{`
        .header {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          margin-top: 8rem;
        }
        .circle {
          position: absolute;
          width: 8rem;
          height: 8rem;
          border-radius: 4rem;
          background-color: #F7BD00;
          bottom: 0px;
          left: 0px;
          color: white;
          text-align: center;
          line-height: 5rem;
          font-size: 2.5rem;
          z-index: -1;
        }
        .header > h3 {
          width: max-content;
          font-family: "League Spartan";
          text-align: left;
          margin-right: 20px;
        }
        .header > p {
          width: max-content;
          font-size: 1.1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

ProgramTitle.propTypes = {
  enTitle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  jpTitle: PropTypes.string.isRequired,
}

export default ProgramTitle;
