import React from "react";
import "./App.css";
import styled from "styled-components";
import { url } from "inspector";

const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 33%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f0eff0;
  color: #e7473c;
  font-family: RingsideExtraWide-Book, Blank, Helvetica Neue, Helvetica,
    sans-serif;
  h1 {
    margin: 0px;
    font-size: 80px;
    padding: 10vh 0px 0px 72px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    line-height: 0.9;
  }

  h3 {
    font-size: 1.6em;
    line-height: 1.2;
  }

  .bottom {
    padding: 72px;
    .bottomDiv {
      max-width: 480px;
      width: 80%;
    }
    h3 {
      font-size: 1.6em;
      font-weight: 100;
      line-height: 1.2;
    }
    p.second {
      text-align: justify;
      text-indent: -0.5em;
      font-size: 17.44px;
    }
    .bottomgray {
      color: rgba(0, 0, 0, 0.6);
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style: none;
        box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 0px;
        display: inline-block;
        cursor: pointer;
        margin: 0px 14px 0.25em 0px;
        font-size: 15px;
        font-weight: 600;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }

      p {
        color: rgba(0, 0, 0, 0.5);
        font-size: 11.5px;
        line-height: 1.2;
        margin-top: 2em;
      }
    }
  }
`;

const RightArea = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  background-color: #e7473c;
  padding-left: 33%;
`;

const Section = styled.div`
  padding: 135px;
  height: 100%;
  background-image: linear-gradient(0deg,rgba(0,0,0,.08),transparent);
  img {
    width: 500px;
    height: 500px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

const Img = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url(/poster.png);
  background-size: cover;
`;

function App() {
  return (
    <>
      <Head>
        <h1>
          BEST
          <br />
          HORROR
          <br />
          SCENES
        </h1>
        <div className="bottom">
          <div className="bottomDiv">
            <h3>
              An ever growing collection featuring some of the best scenes in
              horror.
            </h3>
            <p className="second">
              “Best Horror Scenes” is a collection of scenes I feel are some of
              the most affecting in horror. Some may be simple black cat scares,
              others may be more subdued or nuanced. Many come from films that
              aren't necessarily “horror” but have elements or threads of
              horror.
            </p>
            <div className="bottomgray">
              <ul>
                <li>Newsletter</li>
                <li>Suggest a Scene</li>
                <li>YouTube</li>
                <li>Twitter</li>
                <li>Contact</li>
                <li>RSS</li>
                <li>Letterboxd</li>
              </ul>
              <p>
                Best Horror Scenes is a love letter to the Horror film genre by
                Brandon Durham. Most film clips contain major spoilers, and it
                is recommended you don’t watch the clip if you plan on seeing
                the film.
              </p>
            </div>
          </div>
        </div>
      </Head>
      <RightArea>
        <Section>
          <Title>38. Hereditary (2018)</Title>
          <Img />
        </Section>
        <Section>
          <Title>38. Hereditary (2018)</Title>
          <Img />
        </Section>
        <Section>
          <Title>38. Hereditary (2018)</Title>
          <Img />
        </Section>
      </RightArea>
    </>
  );
}

export default App;
