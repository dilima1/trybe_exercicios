import React from 'react';

import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';

import './About.css';

class AboutMe extends React.Component {
  render() {
    return (
      <section id="about-me">
        <PersonalInfo />
        <Skills />
      </section>
    );
  }
}

export default AboutMe;
