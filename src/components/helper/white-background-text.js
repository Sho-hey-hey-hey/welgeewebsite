import React from 'react'
import AboutSectionTitle from "./about-section-title"
import PropTypes from "prop-types"
import Layout from "../layout"

const WhiteBackgroundText = props => {
  const { enTitle, jpTitle, description} = props
  return (
  <section id="top-msg" className="section-container">
    <AboutSectionTitle enTitle={enTitle} jpTitle={jpTitle} />
    <p>
      {description}
    </p>
    <style jsx>{`
      #top-msg {
        margin-top: 100px;
      }
      #top-msg > p {
        margin-top: 50px;
        color: #333333;
        text-align: center;
        white-space: pre-wrap;
        line-height: 2rem;
      }
    `}</style>
  </section>
)}

WhiteBackgroundText.propTypes = {
  enTitle: PropTypes.string.isRequired,
  jpTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
}

export default WhiteBackgroundText
