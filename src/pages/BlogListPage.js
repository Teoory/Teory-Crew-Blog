import React from 'react';
import BlogList from "../components/BlogList";
import blogs from "./blog-content";
import './blogLists.css';

const BlogListPage = () => {
    return (
        <>
        <h1>Blogs</h1>
        <BlogList blogs={blogs} />
        </>
    )
}

export default BlogListPage;