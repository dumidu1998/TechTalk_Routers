import React from 'react'
import { useParams } from 'react-router'

export default function Post() {
    const { postId } = useParams();
    return (
        <div>
            In the post
            <h3>{postId}</h3>
        </div>
    )
}
