import React, { useEffect, useState } from "react";
import SinglePost from "../Components/SinglePost/SinglePost";
import Toolbar from "../Components/Toolbar/Toolbar";
import PropTypes from "prop-types";

const HomePage = ({ propsMessage }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchPosts = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());
            setPosts(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    const fetchComments = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json());
            setComments(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
            setUsers(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchComments();
        fetchUsers();
        console.log(`${propsMessage} HomePage`);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1 id="mainTitle">Home Page</h1>
            <Toolbar propsMessage={propsMessage} setPosts={setPosts} />
            <div id="posts">
                {posts &&
                    posts.map(e => {
                        const comms = comments.filter(com => com.postId === e.id);
                        const user = users.filter(user => user.id === e.userId);
                        return <SinglePost title={e.title} body={e.body} key={e.id} id={e.id} comments={comms} user={user} propsMessage={propsMessage} />;
                    })}
            </div>
        </div>
    );
};

HomePage.propTypes = {
    propsMessage: PropTypes.string,
};

export default HomePage;
