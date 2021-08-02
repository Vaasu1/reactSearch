import { shallow } from 'enzyme';

import Suggesions from '../components/partials/suggesions';


describe("Suggest loading test", () => {
    test('Test Results Loading', () => {
        const data = {id:"1", title:"test", artist:"test", search:"test"}
        const wrapper = shallow(<Suggesions songs={data} />);
        setTimeout(()=>{
            expect(wrapper.instance().state.songs.length).toBe(1);
        })        
    });
})

