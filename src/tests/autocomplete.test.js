import { shallow, mount } from 'enzyme';
import AutoComplete from '../index';
import data from '../mocks/data.json';

describe('AutoComplete Test', () => {
    it('test render', () => {
        const componentWrapper = shallow(<AutoComplete data={[]} />);
        expect(componentWrapper.html()).toMatchSnapshot();
    });

    it('test render with clear icon', () => {
        const componentWrapper = shallow(<AutoComplete
            placeholder="input here"
            data={[]}
            allowClear={true}
        />);
        expect(componentWrapper.html()).toMatchSnapshot();
    });

    it('test mount', () => {
        const componentWrapper = mount(<AutoComplete
            placeholder="input here"
            data={[]}
            allowClear={true}
        />);
        expect(componentWrapper.find('input').length).toEqual(1);
    });

    it('test input text', () => {
        const spySearch = jest.fn();
        const componentWrapper = mount(<AutoComplete
            placeholder="input here"
            data={data}
            allowClear={true}
            onSearch={spySearch}
        />);
        const mockEvent = {
            target: { value: "test" }
        };
        componentWrapper.find('input').simulate('change', mockEvent);
        setTimeout(() => {
            expect(spySearch).toBeCalled();
        }, 500);
    });

    it('test select a item', () => {
        const spySelect = jest.fn();
        const componentWrapper = mount(<AutoComplete
            placeholder="input here"
            data={data}
            allowClear={true}
            onSelect={spySelect}
        />);
        setTimeout(() => {
            componentWrapper.find('button').simulate('click');
            expect(spySelect).toBeCalled();
        }, 500);
    });
});
