import React from 'react'

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';


describe('<Navbar/> Test ', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Jesus'
        }

    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />

            </MemoryRouter>
        </AuthContext.Provider>

    )
    test('should Snapshot', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should test name', () => {

        expect(wrapper.find('.text-info').text().trim()).toBe('Jesus')

    })

    test('should button', () => {

        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

    })



})
