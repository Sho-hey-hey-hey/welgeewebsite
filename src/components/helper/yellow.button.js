import React from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import TextImageBackground from "./text-img-background"

const YellowButton = props => {
  const {title, link} = props
  return (
    <div>
      <Link to={link} style={{textDecoration: 'none', color: 'white', width: 240}} ><span>{title}</span></Link>
      <style jsx>{`
        span {
          background-color: #FFBF00;
          padding: 0.6rem 6rem;
          cursor: pointer;
          text-align: center;
          font-family: "League Spartan";
          font-weight: bold;
          width: 240px;
          margin: 0 auto;
          border-radius: 5rem;
          font-size: 1rem;
          transition: all 0.3s ease 0s;
        }
        span:hover {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  )
}

YellowButton.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default YellowButton;
