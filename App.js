import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './src/Home/Component';
import Chat from './src/Chat/Component';
import StoryBookUI from './storybook';

 class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="chat" component={Chat} title="Chat"/>
        </Stack>
      </Router>
    );
  }
}

// module.exports = process.env.STORYBOOK ? StoryBookUI : App;
export default StoryBookUI;
