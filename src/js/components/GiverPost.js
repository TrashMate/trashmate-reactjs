import "../css/navbar.scss";
import React, { useState, useEffect } from "react";
function GiverPost() {
    const [giverPosts, setGiverPosts] = useState(0);
    return (
        <div class="left-post-div">
            <div class="left-profile">
                <img src="resources/imgs/0.jpeg" alt="" />
                <a href="#">Navpreet Singh Devpuri</a>
            </div>
            <div class="post-img">
                <img src="resources/imgs/giver1.jpg" alt="" />
            </div>
        </div>
    );
}

export default GiverPost;
