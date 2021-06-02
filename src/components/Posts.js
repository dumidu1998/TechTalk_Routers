import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import Post from './Post';

export default function Posts() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>This My Posts</div>
            <div>
                <Link to={`${url}/post1`} >Post1</Link>
            </div>
            <div>
                <Link to={`${url}/post2`} >Post2</Link>
            </div>
            <div>
                <Link to={`${url}/post3`} >Post3</Link>
            </div>
            <Switch>
                <Route exact path={path}>
                    <div>This My Posts</div>

                </Route>

                <Route path={`${path}/:postId`}>
                    <Post />
                </Route>

            </Switch>



        </div>
    )
}
