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
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/posts">Posts</Link>
                </button>
            </div >
        </>

    )
}
