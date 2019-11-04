import React from 'react'
import AboutSectionTitle from "./about-section-title"
import PropTypes from "prop-types"

const WhiteBackgroundText = props => {
  const { enTitle, jpTitle, description, sectionId} = props
  return (
  <section id={sectionId} className="section-container">
    <AboutSectionTitle enTitle={enTitle} jpTitle={jpTitle} />
    <p>
      {description}
    </p>
    <style jsx>{`
      .section-container {
        margin-top: 100px;
      }
      .section-container p {
        margin-top: 50px;
        color: #333333;
        text-align: center;
        white-space: pre-wrap;
        line-height: 2rem;
      }
    `}</style>
  </section>
)}

WhiteBackgroundText.defaultProps = {
  sectionId: ''
}

WhiteBackgroundText.propTypes = {
  enTitle: PropTypes.string.isRequired,
  jpTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sectionId: PropTypes.string
}

export default WhiteBackgroundText
