import React from 'react';
import ReactDOM from 'react-dom';
import ItemName from './ItemName';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
