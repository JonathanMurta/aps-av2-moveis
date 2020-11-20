import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import {UsuarioContext} from '../contexts/user'

const Routes = () =>
{
    const {user} = useContext(UsuarioContext)
    console.warn({user})

    return (
        <NavigationContainer>
        { {user}.user ?
            <AppRoutes />
            :
            <AuthRoutes />
        }
        </NavigationContainer>
    )
}

export default Routes;