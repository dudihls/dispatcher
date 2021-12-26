import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { FlexLayout } from './components/FlexLayout/FlexLayout';
import { Icon } from './components/Icon/Icon';
import back from './assets/Icons/back.svg'

function App() {
  return (
    <FlexLayout direction='col' sidePadding={30}>
      <Button variant='secondary' size='md' icon={<Icon color='purple' src={back}/>}>HELLO WORLD</Button>
    </FlexLayout>
  );
}

export default App;
