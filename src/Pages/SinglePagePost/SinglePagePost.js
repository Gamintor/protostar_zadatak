import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentSection from "../../Components/CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./SinglePagePost.css";

const SinglePagePost = ({ propsMessage }) => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [user, setUser] = useState([]);

    const { id } = useParams();

    const fetchPost = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json());
            setPost(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    const fetchComment = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(response => response.json());
            setComment(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    const fetchUser = async () => {
        const userId = Math.ceil(id / 10);
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`).then(response => response.json());
            setUser(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    useEffect(() => {
        fetchPost();
        fetchComment();
        fetchUser();
        console.log(`${propsMessage} SinglePagePost`);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="singlePagePost">
            <h3 id="titleSP">{post.title}</h3>
            <span id="bodySP">{post.body}</span>
            <span id="userNameSP">{user[0]?.name}</span>
            <CommentSection comments={comment} propsMessage={propsMessage} />
        </div>
    );
};

SinglePagePost.propTypes = {
    propsMessage: PropTypes.string,
};

export default SinglePagePost;
