import React from 'react'
import PropTypes from "prop-types"

const TeamMember = props => {
  const {name, image, position, description} = props;
  return (
    <div className="item">
      <img src={image} />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>
        {description}
      </p>
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

