import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemName from './ItemName';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemName />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ok', () => {
  const tree = shallow(<ItemName name="Normal number: " value="120" />);
  expect(tree).toMatchSnapshot();
});
