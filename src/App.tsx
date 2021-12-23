import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { FlexLayout } from './components/FlexLayout/FlexLayout';
import { Icon } from './components/Icon/Icon';

function App() {
  return (
    <FlexLayout direction='col' sidePadding={30}>
      <Button variant='primary' size='md' icon={<Icon color='white' name='back'/>}>HELLO WORLD</Button>
    </FlexLayout>
  );
}

export default App;
