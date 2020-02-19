import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import ProfileView from './components/ProfileView/ProfileView';

export default class Routes extends Component {
    render(){
        return (
            <Router>
                <Stack key="root" hideNavBar = {true}>
                    <Scene key="profileEdit" component={ProfileEdit} title="profileEdit" />
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register" />
                    {/* <Scene key="profileEdit" component={ProfileEdit} title="profileEdit" /> */}
                    <Scene key="profileView" component={ProfileView} title="profileView" />
                </Stack>
            </Router>
        );
    }
}