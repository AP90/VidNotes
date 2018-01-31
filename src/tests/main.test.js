import React from 'react';
import { shallow } from 'enzyme';

import Main from '../components/main';

describe('<Main />', () => {
    it('should render main component', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper).toMatchSnapshot();
    });
});
