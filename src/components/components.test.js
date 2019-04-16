import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';
import HomeScreen from './HomeScreen'
import ContactList from './ContactList'

Enzyme.configure({ adapter: new Adapter() });

test('basic', () => {
    expect(1+1).toBe(2);

});

/* est('contact component', () => {
    const wrapper = shallow(
        <Contact name="Honza" phone="123" email="honza@honza.com" />
    );

    expect(wrapper.find('h2').text()).toBe('Honza');
    expect(wrapper.text()).toContain('Phone: 123');
    expect(wrapper.text()).toContain('Email: honza@honza.com')
});

test('contact component optional fields', () => {
    const wrapper = shallow(
        <Contact name="Honza" />
    );

    expect(wrapper.find('h2').text()).toBe('Honza');
    expect(wrapper.text()).not.toContain('Phone');
    expect(wrapper.text()).not.toContain('Email');
})

test('contact list', () => {
    const contacts= [
        {id: 1, name: 'Honza', phone: '2466433'},
        {id: 2, name: 'Eva', phone: '3446663', email:"eva@dddd.cz" },
        {id: 3, name: 'Jose', phone: '2456888', email:"jose@ffff.cz" }
    ]
    const wrapper = shallow(<ContactList contacts={contacts} />);

    expect(wrapper.find(Contact).length).toBe(3);

    expect(wrapper.text()).toContain('Honza');

});
 */
//group of tests

//testing the state of the App

describe('app component', () => {
    test('app init counter', () => {
        const wrapper = shallow(<HomeScreen />);

        expect(wrapper.state('counter')).toBe(0);
    })
})

//testing the state after the 3 click
test('app init counter click', () => {
    const wrapper = shallow(<HomeScreen />);

    //simulates user behaviour

    wrapper.find('#add_count').simulate('click');
    wrapper.find('#add_count').simulate('click');
    wrapper.find('#add_count').simulate('click');

    expect(wrapper.state('counter')).toBe(3);
})
