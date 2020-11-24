// import "../css/navbar.scss";
import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "@material-ui/core";
// const signUp = (event) => {
//     // This is to prevent the page from refreshing when we submit the form
//     event.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((authUser) => {
//             return authUser.user.updateProfile({
//                 displayName: username,
//             });
//         })
//         .catch((error) => alert(error.message));

//     // Set user so that footer changes accordingly

//     // Close modal
//     setOpen(false);
// };

// const signIn = (event) => {
//     event.preventDefault();
//     auth.signInWithEmailAndPassword(email, password).catch((error) =>
//         alert(error.message)
//     );

//     // Close modal
//     setOpenSignIn(false);
// };
function Navbar() {
    const [pageSelected, setPageSelected] = useState(0);
    const [openSignIn, setOpenSignIn] = useState(true);
    const [openImageUpload, setOpenImageUpload] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);
    return (
        <div>
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
                    <button className="login">LOG IN</button>
                    <button className="login">SIGN UP</button>
                </div>
            </div>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div>yess</div>
            </Modal>
        </div>
    );
}

export default Navbar;
