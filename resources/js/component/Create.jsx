import { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ title, content }).then(() => navigate("/"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Add Post</button>
        </form>
    );
}

export default Create;
