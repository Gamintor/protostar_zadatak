import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./SinglePost.css";

const SinglePost = ({ title, body, comments, id, user, propsMessage }) => {
    useEffect(() => {
        console.log(`${propsMessage} SinglePost`);
        // eslint-disable-next-line
    }, []);

    return (
        <Link to={`/protostar_zadatak/post/${id}`} target="_blank" rel="noopener noreferrer" className="singlePost">
            <h3 id="title">{title}</h3>
            <span id="body">{body}</span>
            <span id="userName">{user[0]?.name}</span>
            <CommentSection comments={comments} propsMessage={propsMessage} />
        </Link>
    );
};

SinglePost.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            postId: PropTypes.number,
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            body: PropTypes.string,
        })
    ),
    id: PropTypes.number,
    user: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            username: PropTypes.string,
            email: PropTypes.string,
            adress: PropTypes.object,
            phone: PropTypes.string,
            website: PropTypes.string,
            company: PropTypes.object,
        })
    ),
    propsMessage: PropTypes.string,
};

export default SinglePost;
