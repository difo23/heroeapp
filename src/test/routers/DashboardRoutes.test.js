/* eslint-disable react/react-in-jsx-scope */
import { mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import React from 'react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../auth/AuthContext';


describe('<DashboarRoutes /> Test', () => {

    // Para simular el local storage.


    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Jesus'
        }

    }

    test('should private route when I am logged ', () => {




        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();


    })


    test('should block the component if the user is not authenticated ', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('.text-info').text().trim()).toBe('Jesus');


    })



})
