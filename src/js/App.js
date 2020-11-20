import logo from "../logo/logo.svg";
import "../css/App.css";
import Navbar from "../js/Navbar";

function App() {
    return (
        <div className="grid-container">
            <a href="about.html" className="logo">
                <img src="resources/logo/logo_giver.svg" alt="" />
            </a>
            <Navbar />
            <div
                class="left-div"
                data-paroller-factor="1.6"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                <h2>Recent Giver posts</h2>
                <div class="left-post-div">
                    <div class="left-profile">
                        <img src="resources/imgs/0.jpeg" alt="" />
                        <a href="#">Navpreet Singh Devpuri</a>
                    </div>
                    <div class="post-img">
                        <img src="resources/imgs/giver1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div
                class="center-div"
                data-paroller-factor="0.4"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                <h1 class="stylo-font">Invest Trash, Harvest Love</h1>
                <div class="showcase-div">
                    <div class="showcase-options-div">
                        <div class="showcase-options">
                            <div class="showcase-options-container">
                                <div class="showcase-option">
                                    <div class="showcase-main-div">
                                        <h3 class="showcase-option-name">
                                            Givers
                                        </h3>
                                        <img
                                            src="resources/logo/logo_giver.svg"
                                            height="89"
                                            width="89"
                                        />
                                    </div>
                                    <div class="showcase-option-value">
                                        <h2>4</h2>
                                    </div>
                                </div>
                                <div class="showcase-option">
                                    <div class="showcase-main-div">
                                        <h3 class="showcase-option-name">
                                            Takers
                                        </h3>
                                        <img
                                            src="resources/logo/logo_taker.svg"
                                            height="89"
                                            width="89"
                                        />
                                    </div>
                                    <div class="showcase-option-value">
                                        <h2>4</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="product-price">
                                <h3>Total Trash exchanges</h3>
                                <h2>0</h2>
                            </div>
                            <div class="add-to-card-div">
                                <button
                                    class="bubbly-button"
                                    onclick="window.location='login.html';"
                                >
                                    Start/login Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Top Posts</h2>
                <div class="top-post-div">
                    <div class="top-profile-div">
                        <div class="top-profile">
                            <img src="resources/imgs/0.jpeg" alt="" />
                            <a href="#">
                                Navpreet Singh Devpuri at Punjab
                                <p>. 3 minutes ago</p>
                            </a>
                        </div>
                        <p class="post-discription">look at this Creativity.</p>
                    </div>
                    <div class="post-img">
                        <img src="resources/imgs/taker1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div
                class="right-div"
                data-paroller-factor="0.6"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
            >
                <h2>Recent Taker posts</h2>
                <div class="right-post-div">
                    <div class="right-profile-div">
                        <div class="right-profile">
                            <img src="resources/imgs/0.jpeg" alt="" />
                            <a href="#">
                                Navpreet Singh Devpuri at Punjab
                                <p>. 3 minutes ago</p>
                            </a>
                        </div>
                        <p class="post-discription">look at this Creativity.</p>
                    </div>
                    <div class="post-img">
                        <img src="resources/imgs/taker1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
