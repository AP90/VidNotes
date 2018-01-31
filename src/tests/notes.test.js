import React from 'react';
import { shallow } from 'enzyme';

import Notes from '../components/notes';

describe('<Notes />', () => {
    const notes = ['this', 'is', 'a', 'test'];

    it('should render notes component', () => {
        const wrapper = shallow(<Notes notes={notes} />);
        expect(wrapper).toMatchSnapshot();
    });
});
