import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/posts", form);
      navigate("/");
    } catch (error) {
      alert("You must be logged in to create a post");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required /><br /><br />
        <textarea name="content" placeholder="Content" onChange={handleChange} required /><br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;