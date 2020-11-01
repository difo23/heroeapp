/* eslint-disable react/react-in-jsx-scope */
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import React from 'react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';


describe('<PrivateRoute/> Test', () => {

    // Para simular el local storage.


    Storage.prototype.setItem = jest.fn();

    test('should private route when I am logged ', () => {

        const props = {
            location: {
                pathname: '/mavel'
            }
        }


        // Usamos mount en vez de shallow para no limitarnos con HOC MemoryRoute
        const wrapper = mount(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span> Componente de prueba</span>}

                    {...props}
                />
            </MemoryRouter>
        )


        expect(
            wrapper.find('span').exists()
        ).toBe(true);

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/mavel')

    })


    test('should block the component if the user is not authenticated ', () => {

        const props = {
            location: {
                pathname: '/mavel'
            }
        }


        // Usamos mount en vez de shallow para no limitarnos con HOC MemoryRoute
        const wrapper = mount(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span> Componente de prueba</span>}

                    {...props}
                />
            </MemoryRouter>
        )


        expect(
            wrapper.find('span').exists()
        ).toBe(false);

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/mavel')

    })



})
