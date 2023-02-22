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
          <div className="home-container02">
            <span className="home-text09">
              Myself
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text10">Jayesh Kumar</span>
            <span className="home-text11">,</span>
          </div>
          <span className="home-text12">I’m a 17 y/o boy from India.</span>
          <span className="home-text13">
            <span>I&apos;m a young ambitious designer </span>
            <span>
              creating delightful and accessible interface experience that
              people will love.
            </span>
          </span>
          <div className="home-container03">
            <span className="home-text16">Reach me at</span>
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
              <div className="home-container04">
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
              <div className="home-container05">
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
              <div className="home-container06">
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
              <div className="home-container07">
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
              <div className="home-container08">
                <img
                  alt="image"
                  src="/playground_assets/mail.svg"
                  className="home-image05"
                />
              </div>
            </a>
          </div>
          <div className="home-container09">
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container10">
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
              <div className="home-container11">
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
              <div className="home-container12">
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
              <div className="home-container13">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp.svg"
                  className="home-image09"
                />
              </div>
            </a>
            <a href="mailto:krjayesh2004@gmail.com?subject=">
              <div className="home-container14">
                <img
                  alt="image"
                  src="/playground_assets/mail.svg"
                  className="home-image10"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="home-container15">
          <img
            alt="image"
            src="/playground_assets/grinning%20face%20with%20sweat-1500h.webp"
            className="home-image11"
          />
          <span className="home-text17">
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
          src="/playground_assets/color%20fade%20effect%20m1.svg"
          className="home-image12"
        />
        <img
          alt="image"
          src="/playground_assets/color%20fade%20effect%20m2.svg"
          className="home-image13"
        />
        <img
          src="/playground_assets/group%201%20%5B1%5D-1500h.png"
          alt="image"
          className="home-image14"
        />
        <img
          src="/playground_assets/group%202%20%5B1%5D-1500w.png"
          alt="image"
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
          .home-container02 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text09 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 2.21675vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.83251vh;
          }
          .home-text10 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 2.21675vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.83251vh;
          }
          .home-text11 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 2.21675vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.83251vh;
          }
          .home-text12 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 2.21675vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.83251vh;
          }
          .home-text13 {
            color: rgb(196, 196, 196);
            display: none;
            font-size: 2.21675vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.83251vh;
          }
          .home-container03 {
            gap: 1.3888888888888888vw;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 3.90625vh;
            align-items: center;
            justify-content: center;
          }
          .home-text16 {
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
          .home-image01 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link01 {
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
          .home-image02 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link02 {
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
          .home-image03 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link03 {
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
          .home-image04 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-link04 {
            display: contents;
          }
          .home-container08 {
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
          .home-container08:hover {
            background-color: #8b5cf6;
          }
          .home-image05 {
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            align-items: flex-start;
          }
          .home-container10 {
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
          .home-container11 {
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
          .home-container12 {
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
          .home-container13 {
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
          .home-container14 {
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
          .home-container15 {
            gap: 0.4166666666666667vw;
            flex: 0 0 auto;
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
          .home-text17 {
            color: #475569;
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.9296875vh;
          }
          .home-image12 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-image13 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-image14 {
            top: 0px;
            left: 0px;
            height: 66.6015625vh;
            position: absolute;
            object-fit: cover;
          }
          .home-image15 {
            right: 0px;
            bottom: 0px;
            height: 86.9140625vh;
            position: absolute;
            align-self: flex-end;
            object-fit: cover;
          }
          @media (max-width: 420px) {
            .home-container01 {
              width: 100%;
              padding-left: 13.866666666666667vw;
              padding-right: 13.866666666666667vw;
            }
            .home-text {
              display: none;
            }
            .home-text05 {
              display: none;
            }
            .home-container02 {
              flex-direction: row;
            }
            .home-text09 {
              color: #c4c4c4;
              display: flex;
              font-size: 2.2167487684729066vh;
              font-style: normal;
              text-align: left;
              align-items: flex-start;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 2.832512315270936vh;
              flex-direction: column;
            }
            .home-text10 {
              color: #8b5cf6;
              display: flex;
              font-size: 2.2167487684729066vh;
              font-style: normal;
              text-align: right;
              align-items: flex-end;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 2.832512315270936vh;
              margin-left: 1.0666666666666667vw;
              flex-direction: column;
            }
            .home-text11 {
              color: #c4c4c4;
              display: flex;
              font-size: 2.2167487684729066vh;
              font-style: normal;
              text-align: left;
              align-items: flex-start;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 2.832512315270936vh;
              flex-direction: column;
            }
            .home-text12 {
              color: #c4c4c4;
              display: flex;
              font-size: 2.2167487684729066vh;
              font-style: normal;
              text-align: center;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 2.832512315270936vh;
              flex-direction: column;
            }
            .home-text13 {
              color: #c4c4c4;
              display: flex;
              font-size: 2.2167487684729066vh;
              font-style: normal;
              margin-top: 2.4630541871921183vh;
              text-align: center;
              font-family: Circular Std Book;
              font-weight: 400;
              line-height: 2.832512315270936vh;
              flex-direction: column;
            }
            .home-container03 {
              display: none;
            }
            .home-container09 {
              gap: 2.6666666666666665vw;
              display: flex;
              margin-top: 2.4630541871921183vh;
              justify-content: center;
            }
            .home-container10 {
              width: 4.926108374384237vh;
              height: 4.926108374384237vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image06 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container11 {
              width: 4.926108374384237vh;
              height: 4.926108374384237vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image07 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container12 {
              width: 4.926108374384237vh;
              height: 4.926108374384237vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image08 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container13 {
              width: 4.926108374384237vh;
              height: 4.926108374384237vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image09 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container14 {
              width: 4.926108374384237vh;
              height: 4.926108374384237vh;
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #1a243d;
            }
            .home-image10 {
              width: auto;
              height: 2.0338983050847457vh;
            }
            .home-container15 {
              gap: 0.7317073170731707vw;
            }
            .home-image11 {
              height: 2.955665024630542vh;
            }
            .home-text17 {
              color: #ffffff;
              font-size: 2.2167487684729066vh;
              line-height: 2.832512315270936vh;
            }
            .home-image12 {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100vw;
              margin: auto;
              display: flex;
              z-index: 1;
              position: absolute;
            }
            .home-image13 {
              left: 0px;
              right: 0px;
              width: 100vw;
              bottom: 0px;
              margin: auto;
              display: flex;
              z-index: 1;
              position: absolute;
            }
            .home-image14 {
              display: none;
            }
            .home-image15 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
