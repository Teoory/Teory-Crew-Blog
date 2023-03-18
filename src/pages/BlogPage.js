import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommetForm';
import useUser from '../hooks/useUser';
import blogs from './blog-content';
import './BlogStyle.css'

const BlogPage = () => {
    const [blogInfo, setBlogInfo] = useState({ upvotes:0, comments: [] });
    const { blogId } = useParams();

    const { user, isLoading } = useUser();
    
    
    useEffect(() => {
        const loadBlogInfo = async () => {
            const response = await axios.get(`/api/blogs/${blogId}`);
            const newblogInfo = response.data;
            setBlogInfo(newblogInfo);
        }
        
        loadBlogInfo();
    }, []);
    
    const blog = blogs.find(blog => blog.name === blogId);
    
    const addUpvote = async () => {
        const response = await axios.put(`/api/blogs/${blogId}/upvote`);
        const updatedblog = response.data;
        setBlogInfo(updatedblog);
    }
    
    if (!blog) {
        return <NotFoundPage />
    }
    
    return (
        <div className="page-body">
            
        <h1>{blog.title}</h1>
        <div className="upvotes-section">
            {user 
                ? <button onClick={addUpvote}>Oy Ver! </button>
                : <button>Oy vermek için giriş yap</button>}
            <p>Bu blogda toplam {blogInfo.upvotes} oy bulunmakta!</p>
        </div>
        {blog.content.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
        ))}
        {user 
            ? <AddCommentForm
                blogName={blogId}
                onBlogUpdated={updatedblog => setBlogInfo(updatedblog)} />
            : <button>Yorum yazmak için giriş yap</button>}
        <CommentsList comments={blogInfo.comments} />
        </div>
    )
}

export default BlogPage;