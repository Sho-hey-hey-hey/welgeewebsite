import React from 'react';

const JoinUsPage = () => {
  return (
    <div>
      <section id="top">
        <div className="contents-1">
          <h2>WELgeeサロン</h2>
          <h5>WELgee salon</h5>
          <hr />
          <p>
            WELgeeサロンは、<strong>「難民」という言葉の先の、ユニークな個性と出会う場</strong>です。<br />
            難民は、「避難民」つまり「避難をしている状態にいる人々」を指す言葉でありますが、<br />
            その言葉の先には、<strong>異なる価値観や、強い信念を持つ人々</strong>がいます。<br />
            私たちは、そんな彼らを「難民」ではなく、<strong>「志を持つ、多国籍な仲間」</strong>として、<br />
            彼らを<strong>「Internationals(インターナショナルズ)」</strong>と呼んでいます。
          </p>
        </div>
        <div className="img-salon"></div>
      </section>
      <style jsx>{`
        .img-salon {
          width: 100vw;
          height: 500px;
          margin-top: 100px;
          background-image: url("http://welgee.sakura.ne.jp/image/09292018%20WELgee%20Salon%20.JPG");
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  )
}

export default JoinUsPage
