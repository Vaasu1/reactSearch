import { configure, shallow } from 'enzyme';

import Index from '../components/index';
import Suggesions from '../components/partials/suggesions';


describe("Child Component Suggest loading test", () => {
    test('renders learn react link', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.containsMatchingElement(<Suggesions />)).toEqual(true);
    });
})

