import React from 'react';
import { shallow } from 'enzyme';

import Email from '../components/email';

describe('<Email />', () => {
    it('should render email component', () => {
        const wrapper = shallow(<Email />);
        expect(wrapper).toMatchSnapshot();
    });
});
