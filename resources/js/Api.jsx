
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';


// Function to fetch posts
export const getPosts = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/posts"); // Adjust URL as needed
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; 
        // Return an empty array on error to prevent app crash
    }
};

export const createPost = async (data) => {
    return await axios.post(`${API_URL}/posts`, data);
};

export const deletePost = async (id) => {
    return await axios.delete(`${API_URL}/posts/${id}`);
};
