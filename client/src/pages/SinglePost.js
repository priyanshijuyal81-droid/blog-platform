import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../utils/api";
import formatDate from "../utils/dateFormatter";

function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.log("Error loading post");
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      alert("You are not authorized to delete this post");
    }
  };

  if (!post) return <p>Loading...</p>;

  const isAuthor = user && post.author?._id === user.user?.id;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>
        By {post.author?.username} | {formatDate(post.createdAt)}
      </p>
      <p>{post.content}</p>

      {isAuthor && (
        <>
          <Link to={`/edit/${post._id}`} style={{ marginRight: "10px" }}>
            Edit
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default SinglePost;