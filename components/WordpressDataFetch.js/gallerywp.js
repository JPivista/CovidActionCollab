import React, { useEffect, useState } from 'react'

const gallerywp = () => {

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title.rendered}</li>
            ))}
        </ul>
    )
}

export default gallerywp