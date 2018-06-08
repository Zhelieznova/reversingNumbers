import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ItemName from './ItemName';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemName />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ok', () => {
  const tree = renderer
    .create(<ItemName name="Normal number: " value="120" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
