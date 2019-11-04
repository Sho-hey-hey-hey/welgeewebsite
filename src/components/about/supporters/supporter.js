import React from 'react';
import PropTypes from 'prop-types'

const  SupporterMember  =  props =>  {
  const {
    memberImage,
    memberName,
    memberPosition,
    memberMessage,
  } = props
  return (
    <div id="messages" className="container">
      <div className="items">
        <div className="item">
          <img src={memberImage} />
          <div className="text">
            <h3 className="global-text">{memberName}</h3>
            <h5 className="global-text">{memberPosition}</h5>
            <div className="red-line" />
            <p className="global-text">{memberMessage}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #messages .item {
          width: 100%;
          max-width: 760px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: start;
          margin: 0 auto;
        }
        #messages .item img {
          display: block;
          margin: 0 auto;
          margin-top: 150px;
          width: 100%;
          max-width: 260px;
          border-radius: 130px;
        }
        #messages .item .text {
          width: 100%;
          max-width: 460px;
          margin-top: 100px;
        }
        #messages .item h3 {
          text-align: left;
          font-weight: normal;
          margin-bottom: 15px;
        }
        #messages .item h5 {
          text-align: left;
          font-weight: normal;
        }
        #messages .item p {
          text-align: left;
        }
        .red-line {
          width: 60px;
          height: 3px;
          background: #FC627A;
          margin: 0 auto 0.6rem auto;
        }
      `}</style>
    </div>
    
  )
}

SupporterMember.propTypes = {
  memberImage: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  memberPosition: PropTypes.string.isRequired,
  memberMessage: PropTypes.string.isRequired,
}

export default SupporterMember;
