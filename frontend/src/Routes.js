import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProfileEdit1 from './components/ProfileEdit/ProfileEdit1';
import ProfileEdit2 from './components/ProfileEdit/ProfileEdit2';
import ProfileView from './components/ProfileView/ProfileView';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import PostCreate from './components/PostCreate/PostCreate';
import ViewCourses from './components/Course/ViewCourses';
import AddCourse from './components/Course/AddCourse';


export default class Routes extends Component {
    render(){
        /* <Scene key="profileEdit" component={ProfileEdit} title="profileEdit" /> */
        return (
            <Router>
                <Stack key="root" hideNavBar = {true}>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register" />
                    <Scene key="profileview" component={ProfileView} title="profileView" />
                    <Scene key="profileedit1" component={ProfileEdit1} title="profileEdit" />
                    <Scene key="profileedit2" component={ProfileEdit2} title="profileEdit" />
                    <Scene key="postlist" component={PostList} title="PostList"/>
                    <Scene key="postview" component={Post} title="PostView"/>
                    <Scene key="postcreate" component={PostCreate} title="PostCreate"/> 
                    <Scene key="viewcourses" component={ViewCourses} title="ViewCourses"/>
                    <Scene key="addcourse" component={AddCourse} title="AddCourse"/>
                    
                    
                    
                    
                    
                </Stack>
            </Router>
        );
    }
}