import React from 'react'
import { useParams } from 'react-router';

export default function Post() {
    const { postid } = useParams();
    return (
        <div>
            This is my Post
            <h1>{postid}</h1>
        </div>
    )
}
