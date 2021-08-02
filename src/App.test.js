import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Index from './components/index'

describe("Child Component Index loading test", () => {
  test('renders learn react link', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Index />)).toEqual(true);
  });
})

