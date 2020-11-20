import "../css/navbar.scss";
import React, { useState, useEffect } from "react";
function Navbar() {
    const [pageSelected, setPageSelected] = useState(0);
    return (
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
                        ></a>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
