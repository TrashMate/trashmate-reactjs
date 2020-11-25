import logo from "../logo/logo.svg";
// import "../css/App.css";
import Navbar from "../js/components/Navbar";
import ImageUpload from "../js/ImageUpload";
import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "@material-ui/core";
import { db, auth } from "../js/firebase";
import Post from "../js/Post";
import Avatar from "@material-ui/core/Avatar";
import MenuPopupState from "./components/MenuPopupState";

function App() {
    const [posts, setPosts] = useState([]);
    const [pageSelected, setPageSelected] = useState(0);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openImageUpload, setOpenImageUpload] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);
    const [viewmine, setViewMine] = useState(false);
    const [viewwhichuser, setViewWhichUser] = useState("");
    const [viewsinglepost, setViewSinglePost] = useState(false);
    const [singlepostid, setSinglePostId] = useState("");
    // The below is what checks if you are logged in or not, and keeps you logged in on refresh

    const signUp = (event) => {
        // This is to prevent the page from refreshing when we submit the form
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username,
                });
            })
            .catch((error) => alert(error.message));
        // Set user so that footer changes accordingly
        // Close modal
        setOpenSignUp(false);
    };

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );
        // Close modal
        setOpenSignIn(false);
    };
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // if user has logged in...
                console.log(authUser);
                setUser(authUser);
            } else {
                // if user has logged out...
                setUser(null);
            }
        });

        return () => {
            // perform some cleanup actions
            unsubscribe();
        };
    }, [user, username]);

    useEffect(() => {
        // This is where the code runs
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                // every time a new post is added, this code fires up
                setPosts(
                    snapshot.docs.map((doc) => ({
                        postType: doc.postType,
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
    }, []);
    var giverCout = 0,
        takerCout = 0;
    for (var i = 0; i < posts.length; ++i) {
        if (posts[i].post.postType == "G") ++giverCout;
        else ++takerCout;
    }
    return (
        <div className="grid-container">
            <a href="about.html" className="logo">
                <img src="resources/logo/logo_giver.svg" alt="" />
            </a>
            <div className="navbar1">
                <div className="pages">
                    {[
                        { id: 0, name: "home" },
                        { id: 1, name: "contact" },
                        { id: 2, name: "about" },
                    ].map((page) => {
                        return (
                            <a
                                href="#"
                                className={
                                    pageSelected == page.id
                                        ? "selected-page"
                                        : ""
                                }
                                id="page-home"
                                style={{
                                    "background-image":
                                        'url("resources/icons/' +
                                        page.name +
                                        (pageSelected == page.id
                                            ? "-selected"
                                            : "") +
                                        '.svg")',
                                }}
                            ></a>
                        );
                    })}
                </div>
                <div className="profile">
                    {[{ id: 3, name: "search" }].map((page) => {
                        return (
                            <a
                                href="#"
                                className={
                                    pageSelected == page.id
                                        ? "selected-page"
                                        : ""
                                }
                                id="page-home"
                                style={{
                                    "background-image":
                                        'url("resources/icons/' +
                                        page.name +
                                        (pageSelected == page.id
                                            ? "-selected"
                                            : "") +
                                        '.svg")',
                                }}
                            ></a>
                        );
                    })}
                    {/* <a
                    href="#"
                    className={
                        pageSelected == page.id ? "selected-page" : ""
                    }
                    id="page-home"
                    style={{
                        "background-image":
                            'url("resources/icons/' +
                            page.name +
                            (pageSelected == page.id
                                ? "-selected"
                                : "") +
                            '.svg")',
                    }}
                ></a> */}

                    {!user ? (
                        <div>
                            <button
                                className="login"
                                onClick={() => setOpenSignIn(true)}
                            >
                                LOG IN
                            </button>
                            <button
                                className="login"
                                onClick={() => setOpenSignUp(true)}
                            >
                                SIGN UP
                            </button>
                        </div>
                    ) : (
                        <button
                            className="login"
                            onClick={() => auth.signOut()}
                        >
                            LOGOUT
                        </button>
                    )}
                </div>
            </div>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div className="app__modal">
                    <form className="app__signup">
                        <center>
                            <img
                                className="app__headerImage"
                                src="resources/logo/logo_giver.svg"
                                height="144px;"
                                alt=""
                            />
                        </center>

                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signIn}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </Modal>
            <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
                <div className="app__modal">
                    <form className="app__signup">
                        <center>
                            <img
                                className="app__headerImage"
                                src="resources/logo/logo_giver.svg"
                                height="144px;"
                                alt=""
                            />
                        </center>
                        <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signUp}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Modal>
            <div
                className="left-div"
                data-paroller-factor="1.6"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                {" "}
                {}
                <h2>Recent Giver posts</h2>
                {/* <div className="left-post-div">
                    <div className="left-profile">
                        <img src="resources/imgs/0.jpeg" alt="" />
                        <a href="#">Navpreet Singh Devpuri</a>
                    </div>
                    <div className="post-img">
                        <img src="resources/imgs/giver1.jpg" alt="" />
                    </div>
                </div> */}
                {console.log(posts)}
                {posts
                    .filter(({ id, post }) => post.postType === "G")
                    .map(({ id, post }) => (
                        <Post
                            key={id}
                            postId={id}
                            user={user}
                            username={post.username}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                            imagename={post.imagename}
                            viewwhichuser={setViewWhichUser}
                            viewsinglepost={setViewSinglePost}
                            postType={post.postType}
                        />
                    ))}
            </div>
            <div
                className="center-div"
                data-paroller-factor="0.4"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                <h1 className="stylo-font">Invest Trash, Harvest Love</h1>
                <div className="showcase-div">
                    <div className="showcase-options-div">
                        <div className="showcase-options">
                            <div className="showcase-options-container">
                                <div className="showcase-option">
                                    <div className="showcase-main-div">
                                        <h3 className="showcase-option-name">
                                            Giver's posts
                                        </h3>
                                        <img
                                            src="resources/logo/logo_giver.svg"
                                            height="89"
                                            width="89"
                                        />
                                    </div>
                                    <div className="showcase-option-value">
                                        <h2>{giverCout}</h2>
                                    </div>
                                </div>
                                <div className="showcase-option">
                                    <div className="showcase-main-div">
                                        <h3 className="showcase-option-name">
                                            Taker's posts
                                        </h3>
                                        <img
                                            src="resources/logo/logo_taker.svg"
                                            height="89"
                                            width="89"
                                        />
                                    </div>
                                    <div className="showcase-option-value">
                                        <h2>{takerCout}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="total-trash-ex-div">
                                <h3>Total Trash exchanges</h3>
                                <h2>0</h2>
                            </div>
                            <div className="add-to-card-div">
                                {!user ? (
                                    <button
                                        className="bubbly-button"
                                        onClick={() => setOpenSignUp(true)}
                                    >
                                        Start Now
                                    </button>
                                ) : (
                                    <div className="new-post-div">
                                        <ImageUpload
                                            username={user.displayName}
                                            closemodal={setOpenImageUpload}
                                            // Passing the 2 below so that I can reset those once upload is done
                                            viewwhichuser={setViewWhichUser}
                                            viewsinglepost={setViewSinglePost}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 id="topPosts">Top Posts</h2>
                {posts.map(({ id, post }) => (
                    <Post
                        key={id}
                        postId={id}
                        user={user}
                        username={post.username}
                        caption={post.caption}
                        imageUrl={post.imageUrl}
                        imagename={post.imagename}
                        viewwhichuser={setViewWhichUser}
                        viewsinglepost={setViewSinglePost}
                        postType={post.postType}
                    />
                ))}
                {/* <div className="top-post-div">
                    <div className="top-profile-div">
                        <div className="top-profile">
                            <Avatar
                                className="post__avatar"
                                alt={username}
                                src="/static/images/avatar/1.jpg"
                                // onClick={}
                            />
                            <a href="#">
                                Navpreet Singh Devpuri
                                <p>. 3 minutes ago</p>
                            </a>
                            {(true ||
                                (user &&
                                    auth.currentUser.email ===
                                        "admin@gmail.com")) && (
                                <div className="delete__Post">
                                    
                                    <MenuPopupState
                                        lang={""}
                                        datatopass={""}
                                        functiontopass={() => {
                                            console.log("yess");
                                        }}
                                        labeltopass="Delete this post"
                                    />
                                </div>
                            )}
                        </div>
                        <p className="post-discription">
                            look at this Creativity.
                        </p>
                    </div>
                    <div className="post-img">
                        <img src="resources/imgs/taker1.jpg" alt="" />
                    </div>
                </div> */}
            </div>
            <div
                className="right-div"
                data-paroller-factor="0.6"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                <h2>Recent Taker posts</h2>
                {/* <div className="right-post-div">
                    <div className="right-profile-div">
                        <div className="right-profile">
                            <img src="resources/imgs/0.jpeg" alt="" />
                            <a href="#">
                                Navpreet Singh Devpuri at Punjab
                                <p>. 3 minutes ago</p>
                            </a>
                        </div>
                        <p className="post-discription">
                            look at this Creativity.
                        </p>
                    </div>
                    <div className="post-img">
                        <img src="resources/imgs/taker1.jpg" alt="" />
                    </div>
                </div> */}
                {posts
                    .filter(({ id, post }) => post.postType === "T")
                    .map(({ id, post }) => (
                        <Post
                            key={id}
                            postId={id}
                            user={user}
                            username={post.username}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                            imagename={post.imagename}
                            viewwhichuser={setViewWhichUser}
                            viewsinglepost={setViewSinglePost}
                            postType={post.postType}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;
