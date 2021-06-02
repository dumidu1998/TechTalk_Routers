import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default function Topics() {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            < div >
                <Link to="/posts">Posts</Link>
            </div >
        </>

    )
}
