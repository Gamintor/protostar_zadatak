import React, { useEffect, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Toolbar.css";

const Toolbar = ({ propsMessage, setPosts }) => {
    const [selectedID, setSelectedID] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const initalRender = useRef(true);

    const fetchPostByID = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts${selectedID !== "all" ? `?userId=${selectedID}` : ""}`).then(response => response.json());
            setPosts(data);
        } catch (error) {
            console.error(error);
            console.log("GET request failed!");
        }
    };

    const fetchPostByTerm = async () => {
        if (!isNaN(selectedID)) {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts${selectedID !== "all" ? `?userId=${selectedID}` : ""}`).then(response => response.json());
                setPosts(data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())));
            } catch (error) {
                console.error(error);
                console.log("GET request failed!");
            }
        } else {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json());
                setPosts(data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())));
            } catch (error) {
                console.error(error);
                console.log("GET request failed!");
            }
        }
    };

    useEffect(() => {
        console.log(`${propsMessage} Toolbar`);
        if (initalRender.current) {
            initalRender.current = false;
            return;
        }
        fetchPostByID();
        // eslint-disable-next-line
    }, [selectedID]);

    return (
        <div className="toolbar">
            <div id="searchDiv">
                <input type="text" id="search" size="25" minLength="3" autoComplete="off" placeholder="Search" onChange={event => setSearchTerm(event.target.value)} />
                <button id="searchBtn" onClick={fetchPostByTerm}>
                    <FontAwesomeIcon icon={faSearch} id="icon" />
                </button>
            </div>
            <div id="filterDiv">
                <div>
                    <label htmlFor="filter">Filter By User's name:</label>
                    <select onChange={event => setSelectedID(event.target.value)}>
                        <option value="all">--Choose an option--</option>
                        <option value="10">Clementina DuBuque</option>
                        <option value="9">Glenna Reichert</option>
                        <option value="8">Nicholas Runolfsdottir</option>
                        <option value="7">Kurtis Weissnat</option>
                        <option value="6">Dennis Schulist</option>
                        <option value="5">Chelsey Dietrich</option>
                        <option value="4">Patricia Lebsack</option>
                        <option value="3">Clementine Bauch</option>
                        <option value="2">Ervin Howell</option>
                        <option value="1">Leanne Graham</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

Toolbar.propTypes = {
    propsMessage: PropTypes.string,
    setPosts: PropTypes.func,
};

export default Toolbar;
