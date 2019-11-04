import React from 'react';
import YellowButton from "../common/yellow.button";
import SectionTitle from "../common/section-title";


const Welgee = () => {
  return (
    <div id="what-welgee">
      <SectionTitle jpTitle="WELgeeとは" enTitle="About"/>
      <h2 className="welgee">
        WELgee = <span className="yellow">WEL</span>come + refu<span className="yellow">gee</span>
      </h2>
      <p>
        私たちは、日本にやって来た難民の若者たちと誰もが活躍できる未来を作っています。
      </p>
      <YellowButton title="more" link="/about" />
      <style jsx>{`
        #what-welgee {
          align-items: center;
          flex-direction: column;
          display: flex;
          margin: 0 auto;
          border-top: 1px solid #333333;
          padding-top: 5rem;
          margin-top: 4rem;
        }
        .welgee {
          font-size: 2.6rem;
        }
        .yellow {
          color: #F7BD00;
        }
        p {
          margin: 0.5rem 0 4rem 0;
          font-size: 1.25rem;
          width: 30rem;
          line-height: 2.5rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Welgee

