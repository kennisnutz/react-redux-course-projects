import React from 'react';
import ProfileCard from './ProfileCard';

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="app">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistats</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                imageSrc={AlexaImage}
                title="Alexa"
                handle="@alexa99"
                description="Alexa was created by Amazon and helps users buy  items"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                imageSrc={CortanaImage}
                title="Cortana"
                handle="@cortana32"
                description="Cortana was created by Microsoft. And is a virtual assistant for its OS users"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                imageSrc={SiriImage}
                title="Siri"
                handle="@siriD1"
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
