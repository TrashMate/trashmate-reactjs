import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { storage, db } from "../js/firebase";
import "../css/ImageUpload.css";
import Textarea from "react-expanding-textarea";

function ImageUpload({ username, closemodal, viewwhichuser, viewsinglepost }) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    const [postType, setPostType] = useState(null);
    // const [message, setMessage] = useState("");

    const handleChangeImage = (e) => {
        // this will pick the FIRST file selected (to avoid selecting many)
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // This is what uploads the image to Firebase
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        // Post image URL inside db
                        db.collection("posts").add({
                            // timestamp is used here to figure out the time the image was uploaded, which is gonna determine the order in which we display the posts (latest at the top)
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username,
                            imagename: image.name,
                            postType: postType,
                        });

                        // Reset everything once upload process is completed
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                        closemodal(false);

                        // Scroll back to top and reset other states so that it goes back to default list
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                        viewwhichuser("");
                        viewsinglepost(false);
                    });
            }
        );
    };

    function progressWidth() {
        return {
            width: `${progress}%`,
        };
    }
    return (
        <div className="imageupload">
            <Textarea
                type="text"
                maxLength="3000"
                placeholder="Enter a caption..."
                onChange={(event) => setCaption(event.target.value)}
            />
            {/* <div className="button-wrap">
  <label class ="new-button" for="upload"> Upload CV
  <input id="upload" type="file" >
</div> */}
            {/* <div className="button-wrap">
                <label className="new-button" for="upload"></label>
                <input type="file" id="upload" onChange={handleChange} />
            </div> */}
            <input type="file" id="upload" onChange={handleChangeImage} />
            <div class="type">
                <input
                    type="radio"
                    id="Giver"
                    name="postType"
                    value="giver"
                    onClick={(event) => setPostType("G")}
                />
                <label for="male">Giver</label>
                <input
                    type="radio"
                    id="Taker"
                    name="postType"
                    value="taker"
                    onClick={(event) => setPostType("T")}
                />
                <label for="female">Taker</label>
            </div>
            {/* <div className="message">{}</div> */}
            <div class="w3-light-grey w3-round-xlarge">
                <Button
                    disabled={!(image && postType)}
                    className="w3-container w3-blue w3-round-xlarge"
                    style={progressWidth()}
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </div>
        </div>
    );
}

export default ImageUpload;
