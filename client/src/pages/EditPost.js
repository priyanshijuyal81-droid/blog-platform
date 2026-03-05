import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/posts/${id}`);
        setForm({ title: data.title, content: data.content });
      } catch (error) {
        console.log("Error loading post");
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/posts/${id}`, form);
      navigate(`/post/${id}`);
    } catch (error) {
      alert("You are not authorized to edit this post");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} required /><br /><br />
        <textarea name="content" value={form.content} onChange={handleChange} required /><br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;