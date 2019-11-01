import React from 'react'
import PropTypes from "prop-types"

const TeamMember = props => {
  const {name, image, position, description} = props;
  return (
    <div className="item">
      <img src={image} />
      <h3>{name}</h3>
      <p className="position">{position}</p>
      <p className="description">
        {description}
      </p>
      <style jsx>{`
        .item {
          max-width: 400px;
          margin-top: 50px;
          text-align: center;
        }
        .item > img {
          display: block;
          width: 280px;
          height: 280px;
          border-radius: 140px;
          margin: 0 auto;
          margin-top: 20px;
        }
        .item h3 {
          font-size: 1.6rem;
          margin-top: 1rem;
        }
         .item > .position {
          margin-top: 30px;
          margin-bottom:  0.5rem;
        }
        .description {
          color: #333333;
          text-align: center;
          white-space: pre-wrap;
          line-height: 2rem;
        }
      `}</style>
    </div>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}
export default TeamMember

