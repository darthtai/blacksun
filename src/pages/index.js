import React from 'react';
import { Header, Project, Content, Words, Footer, createTheme, Arwes, ThemeProvider, Link, Row, SoundsProvider, createSounds, withSounds, Button } from 'arwes';

import { homeFrame } from '../components/organism/homeFrame';
import pattern from '../../resources/images/glow.png';
import test from '../../resources/sounds/test.mp3';

const theme = createTheme();

const mySounds = {
  shared: { volume: 1, },  // Shared sound settings
  players: {  // The player settings
    deploy: {  // With the name the player is created
      sound: { src: [test] }  // The settings to pass to Howler
    }
  }
};

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate show pattern={pattern}>
        <Header animate show>
          <div className='u-text-center'>
            <h1>
              <span>Welcome to the Black Sun</span>
            </h1>
          </div>
        </Header>
        <div className='mainContainer u-text-center'>
          <Project
            animate
            header='Welcome to my front end playground'
            headerSize='h3'
          >
            <Content className='mainContent'>
              <Words animate>The site is being worked on while I learn more about Gatsby and React</Words>
            </Content>
          </Project>
        </div>
        <Footer animate className='u-text-center'>
          <Words animate>Check out the code</Words>
          <Link href='https://github.com/darthtai/blacksun' target='_blank'> here</Link>
        </Footer>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);

export default IndexPage;
