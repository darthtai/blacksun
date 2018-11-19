import React from 'react';
import { Header, Frame, Content, Words, Footer, createTheme, Arwes, ThemeProvider, Link } from 'arwes';

import { homeFrame } from '../components/organism/homeFrame';
import pattern from '../../resources/images/glow.png';

const theme = createTheme();

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Arwes animate show pattern={pattern}>
      <Header animate show>
        <div className='headerText'>
          <h1>
            <span>Welcome to the Black Sun</span>
          </h1>
        </div>
      </Header>
      <div className='mainContainer'>
        <Frame animate level={3} corners={4}>
          <Content className='mainContent'>
            <Words animate>The site is still under construction while I learn more about Gatsby and React :)</Words>
          </Content>
        </Frame>
      </div>
        <Footer animlate className='footer'>
          <Words animate>Check out the code</Words>
          <Link href='https://github.com/darthtai/blacksun' target='_blank'> here</Link>
        </Footer>
    </Arwes>
  </ThemeProvider>
);

export default IndexPage;
