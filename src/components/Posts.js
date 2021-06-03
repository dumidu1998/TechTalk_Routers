import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Post from './Post';
import Register from './Register';

export default function Posts() {
    const { url } = useRouteMatch();
    return (
        <div>
            this is post<br />
            <Link to={`${url}/post1`} >My post 1</Link><br />
            <Link to={`${url}/post2`} >My post 2</Link><br />
            <Link to={`${url}/post3`} >My post 3</Link><br />
            <Link to={`${url}/register`} >Register</Link>

            <Switch >
                {/* /posts */}
                <Route exact path={url}>
                    This my posts home
                </Route>
                <Route path={`${url}/register`} >
                    <Register />
                </Route>
                <Route path={`${url}/:postid`} >
                    <Post />
                </Route>
            </Switch>
        </div >
    )
}
