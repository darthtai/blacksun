import React from 'react';
import { Header, Project, Content, Words, Footer, createTheme, Arwes, ThemeProvider, Link, Row } from 'arwes';

import { homeFrame } from '../components/organism/homeFrame';
import pattern from '../../resources/images/glow.png';

const theme = createTheme();

const IndexPage = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default IndexPage;
