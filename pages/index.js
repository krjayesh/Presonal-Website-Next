import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Jayesh Kumar • Interface Designer</title>
          <meta
            name="description"
            content="I'm a young ambitious designer creating delightful and accessible interface experience that people will love."
          />
          <meta
            property="og:title"
            content="Jayesh Kumar • Interface Designer"
          />
          <meta
            property="og:description"
            content="A raising gen-z UI designer from India."
          />
        </Head>
        <div className="home-container01">
          <span className="home-text">
            <span>
              I’m
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text02">Jayesh Kumar</span>
            <span>, </span>
            <span>I’m a 17 y/o boy from India.</span>
          </span>
          <span className="home-text05">
            <span>I&apos;m a young ambitious designer creating delightful</span>
            <br></br>
            <span>
              and accessible interface experience that people will love.
            </span>
          </span>
          <span className="home-text09">
            <span>I’m Jayesh Kumar,</span>
            <span>I’m a 17 y/o boy from India.</span>
          </span>
          <span className="home-text12">
            <span>I&apos;m a young ambitious designer</span>
            <span>creating delightful and accessible</span>
            <span>interface experience that people</span>
            <span>will love.</span>
          </span>
          <div className="home-container02">
            <span className="home-text17">Reach me at</span>
            <img
              alt="image"
              src="/playground_assets/hyphen.svg"
              className="home-image"
            />
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-container03">
                <img
                  alt="image"
                  src="/playground_assets/instagram.svg"
                  className="home-image01"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              <div className="home-container04">
                <img
                  alt="image"
                  src="/playground_assets/twitter.svg"
                  className="home-image02"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              <div className="home-container05">
                <img
                  alt="image"
                  src="/playground_assets/dribbble.svg"
                  className="home-image03"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <div className="home-container06">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp.svg"
                  className="home-image04"
                />
              </div>
            </a>
            <a
              href="mailto:krjayesh2004@gmail.com?subject="
              className="home-link04"
            >
              <div className="home-container07">
                <img
                  alt="image"
                  src="/playground_assets/mail.svg"
                  className="home-image05"
                />
              </div>
            </a>
          </div>
          <div className="home-container08">
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container09">
                <img
                  alt="image"
                  src="/playground_assets/instagram.svg"
                  className="home-image06"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container10">
                <img
                  alt="image"
                  src="/playground_assets/twitter.svg"
                  className="home-image07"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/dribbble.svg"
                  className="home-image08"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container12">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp.svg"
                  className="home-image09"
                />
              </div>
            </a>
            <a href="mailto:krjayesh2004@gmail.com?subject=">
              <div className="home-container13">
                <img
                  alt="image"
                  src="/playground_assets/mail.svg"
                  className="home-image10"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="home-container14">
          <img
            alt="image"
            src="/playground_assets/grinning%20face%20with%20sweat-1500h.webp"
            className="home-image11"
          />
          <span className="home-text18">
            I’ll upload a resume soon
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/color%20fade%20effect%201.svg"
          className="home-image12"
        />
        <img
          alt="image"
          src="/playground_assets/color%20fade%20effect%202.svg"
          className="home-image13"
        />
        <img
          alt="image"
          src="/playground_assets/color%20fade%20effect%20m1.svg"
          className="home-image14"
        />
        <img
          alt="image"
          src="/playground_assets/color%20fade%20effect%20m2.svg"
          className="home-image15"
        />
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #0f172a;
          }
          .home-container01 {
            flex: 0 0 auto;
            display: flex;
            z-index: 2;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            color: rgb(196, 196, 196);
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home-text02 {
            color: #8b5cf6;
          }
          .home-text05 {
            color: rgb(196, 196, 196);
            font-size: 2.34375vh;
            font-style: normal;
            margin-top: 1.694915254237288vh;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home-text09 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 1.52542vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 1.94915vh;
          }
          .home-text12 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 1.52542vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 1.94915vh;
          }
          .home-container02 {
            gap: 1.3888888888888888vw;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 3.90625vh;
            align-items: center;
            justify-content: center;
          }
          .home-text17 {
            color: rgb(196, 196, 196);
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home-image {
            height: 2.34375vh;
            object-fit: cover;
            margin-left: 0.6944444444444444vw;
            margin-right: 0.6944444444444444vw;
          }
          .home-link {
            display: contents;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            text-decoration: none;
            background-color: #1a243d;
          }
          .home-container03:hover {
            background-color: #8b5cf6;
          }
          .home-image01 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link01 {
            display: contents;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            text-decoration: none;
            background-color: #1a243d;
          }
          .home-container04:hover {
            background-color: #8b5cf6;
          }
          .home-image02 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link02 {
            display: contents;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            text-decoration: none;
            background-color: #1a243d;
          }
          .home-container05:hover {
            background-color: #8b5cf6;
          }
          .home-image03 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link03 {
            display: contents;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            text-decoration: none;
            background-color: #1a243d;
          }
          .home-container06:hover {
            background-color: #8b5cf6;
          }
          .home-image04 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link04 {
            display: contents;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            text-decoration: none;
            background-color: #1a243d;
          }
          .home-container07:hover {
            background-color: #8b5cf6;
          }
          .home-image05 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            align-items: flex-start;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-image06 {
            width: 100px;
            object-fit: cover;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-image07 {
            width: 100px;
            object-fit: cover;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-image08 {
            width: 100px;
            object-fit: cover;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-image09 {
            width: 100px;
            object-fit: cover;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
          }
          .home-image10 {
            width: 100px;
            object-fit: cover;
          }
          .home-container14 {
            gap: 0.6944444444444444vw;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            bottom: 7.8125vh;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .home-image11 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-text18 {
            color: #475569;
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home-image12 {
            top: 0px;
            left: 0px;
            height: 66.6015625vh;
            position: absolute;
            object-fit: cover;
          }
          .home-image13 {
            right: 0px;
            bottom: 0px;
            height: 86.9140625vh;
            position: absolute;
            object-fit: cover;
          }
          .home-image14 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-image15 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          @media (max-width: 420px) {
            .home-container01 {
              width: 100%;
            }
            .home-text {
              display: none;
            }
            .home-text05 {
              display: none;
            }
            .home-text09 {
              color: #c4c4c4;
              display: flex;
              font-size: 1.5254237288135593vh;
              font-style: normal;
              text-align: center;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 1.9491525423728813vh;
              flex-direction: column;
            }
            .home-text12 {
              color: #c4c4c4;
              display: flex;
              font-size: 1.5254237288135593vh;
              font-style: normal;
              margin-top: 1.694915254237288vh;
              text-align: center;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 1.9491525423728813vh;
              flex-direction: column;
            }
            .home-container02 {
              display: none;
            }
            .home-container08 {
              gap: 1.2195121951219512vw;
              width: auto;
              display: flex;
              margin-top: 1.694915254237288vh;
            }
            .home-container09 {
              width: 3.389830508474576vh;
              height: 3.389830508474576vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image06 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container10 {
              width: 3.389830508474576vh;
              height: 3.389830508474576vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image07 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container11 {
              width: 3.389830508474576vh;
              height: 3.389830508474576vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image08 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container12 {
              width: 3.389830508474576vh;
              height: 3.389830508474576vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image09 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container13 {
              width: 3.389830508474576vh;
              height: 3.389830508474576vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image10 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container14 {
              gap: 0.7317073170731707vw;
              width: 100%;
            }
            .home-image11 {
              height: 2.0338983050847457vh;
            }
            .home-text18 {
              color: #ffffff;
              font-size: 1.5254237288135593vh;
              line-height: 1.9491525423728813vh;
            }
            .home-image12 {
              width: 100%;
              height: auto;
              display: none;
            }
            .home-image13 {
              width: 80%;
              height: auto;
              display: none;
            }
            .home-image14 {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100vw;
              margin: auto;
              display: flex;
              position: absolute;
            }
            .home-image15 {
              left: 0px;
              right: 0px;
              width: 100vw;
              bottom: 0px;
              margin: auto;
              display: flex;
              position: absolute;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
