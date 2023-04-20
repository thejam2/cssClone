import React from 'react';
import './App.css';
import styled from 'styled-components';


const Head = styled.div`
  color: #e7473c;
  font-family : RingsideExtraWide-Book,Blank,Helvetica Neue,Helvetica,sans-serif;
 `;


function App() {
  return (
    <div className="App">
      <Head>
        <h1>BEST HORROR SCENES</h1>
        <div className="bottom">
          <h3>An ever growing collection featuring some of the best scenes in horror.</h3>
          <p>“Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in horror. Some may be simple black cat scares, others may be more subdued or nuanced. Many come from films that aren't necessarily “horror” but have elements or threads of horror.</p>
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
              Best Horror Scenes is a love letter to the Horror film genre by Brandon Durham. Most film clips contain major spoilers, and it is recommended you don’t watch the clip if you plan on seeing the film.
            </p>
          </div>
        </div>
      </Head>
    </div>
  );
}

export default App;
