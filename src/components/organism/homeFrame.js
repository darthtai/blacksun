import React from 'react';
import { Frame, Content, createTheme } from 'arwes';

const homeFrame = () => (
  <Frame animate layer='primary' level={1} corners={3}>
    <Content>
      <p>test</p>
    </Content>
  </Frame>
);

export default homeFrame;