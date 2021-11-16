import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = ({ comments, propsMessage }) => {
    useEffect(() => {
        console.log(`${propsMessage} CommentSection`);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="comments">
            <h2 id="comSectionTitle">Comments:</h2>
            {comments.length &&
                comments.map(com => {
                    return (
                        <div id="comment" key={com.id}>
                            <h3 id="comName">{com.name}</h3>
                            <span id="comEmail">{com.email}</span>
                            <p id="comBody">{com.body}</p>
                        </div>
                    );
                })}
        </div>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            postId: PropTypes.number,
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            body: PropTypes.string,
        })
    ),
    propsMessage: PropTypes.string,
};

export default CommentSection;
