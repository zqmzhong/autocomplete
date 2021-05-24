/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import AutoComplete from '../index';

describe('AutoComplete Test', () => {
    it('test render', () => {
        const componentWrapper = shallow(<AutoComplete data={[]} />);
        expect(componentWrapper.html()).toMatchSnapshot();
    });

    //   it('', () => {
    //     const Button = require('../button').default
    //     const componentWrapper = shallow(<Button buttonName={'mockButtonName'}/>);
    //     expect(componentWrapper.html()).toMatchSnapshot();
    //   });
});
/* eslint-enable no-undef */
