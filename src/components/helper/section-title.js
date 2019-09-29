import React from 'react';

const SectionTitle = props => {
  const {jpTitle, enTitle} = props
  return (
    <div className="section-title">
      <h1>{jpTitle}</h1>
      <h4>{enTitle}</h4>
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
      `}</style>
    </div>
  )
}

export default SectionTitle;
