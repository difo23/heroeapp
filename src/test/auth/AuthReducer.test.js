/**
 * state  = {
 *  name = 'xxxxx',
 *  logged = true
 * }
 */
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


describe('AuthReducer test', () => {

    test('should to return state by default', () => {

        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false });
    })

    test('should Login: to authenticate and to set user name', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Darleny'
            }
        }


        const state = authReducer({}, action)
        expect(state).toEqual({ logged: true, name: 'Darleny' });

    })

    test('should Logout: to delete the name of user and set logged in false ', () => {

        const action = {
            type: types.logout
        }
        const state = authReducer({ name: 'Darleny', logged: true }, action)
        expect(state).toEqual({ logged: false });

    })


})