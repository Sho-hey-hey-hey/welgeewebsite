import React from 'react';
import YellowButton from "../helper/yellow.button";
import PropTypes from "prop-types"
const TextImageBackground = props => {
  const { enTitle, jpTitle, description, buttonLink, backgroundImage} = props
  return (
    <section id="passion">
      <div className="filter">
        <div className="section-title">
          <h1>{enTitle}</h1>
          <h4>{jpTitle}</h4>
        </div>
        <p>
          {description}
        </p>
        <YellowButton title="more" link={buttonLink} />
      </div>
      <style jsx>{`
        #passion {
          background-image: url(${backgroundImage});
          background-color: gray;
          background-size: cover;
          background-position: center;
          margin-top: 100px;
        }
        .filter {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.7);
          padding-top: 70px;
          padding-bottom: 50px;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        p {
          margin: 2.5rem 0 3rem 0;
          font-size: 1.25rem;
          line-height: 2.5rem;
          text-align: center;
          white-space: pre-wrap;
          max-width: 800px;
        }
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
    </section>
  )
}

TextImageBackground.propTypes = {
  jpTitle: PropTypes.string.isRequired,
  enTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
}
export default TextImageBackground
