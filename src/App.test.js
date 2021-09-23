import MyApp from './App';
import ReactDOM from 'react-dom';
import React from 'react';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
