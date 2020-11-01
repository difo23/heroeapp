import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('', () => {


    test('should ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }

        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );


        expect(wrapper).toMatchSnapshot();

    })

    test('should ', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Juan'
            }

        }


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );


        expect(wrapper.find('.navbar').exists()).toBe(true)

    })


})
