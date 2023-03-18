import React from 'react';
import { Link } from "react-router-dom";

const BlogList = ( { blogs }) => {
    return (
        <>
        {blogs.map(blog => (
            <div>
                <Link key={blog.name} className="blog-list-item" to={`/blogs/${blog.name}`}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content[0].substring(0, 150)}...</p>
                </Link>
            </div>
        ))}
        </>
    )
}

export default BlogList;