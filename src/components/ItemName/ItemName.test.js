import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import ItemName from './ItemName';

describe('components/ItemName', () => {
  it('renders', () => {
    const tree = shallow(<ItemName name="Normal number: " value="120" />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('calls handleChane with updated target.value', () => {
    const tree = shallow(<ItemName
      name="Normal number: "
      value="120"
      onError={jest.fn()}
    />);
    const instance = tree.instance();
    jest.spyOn(instance, 'handleChange');
    const testData = { target: { value: 'Test' } };
    tree.find('input').prop('onChange')(testData);
    expect(instance.handleChange).toHaveBeenCalledWith(testData);
  });
});
