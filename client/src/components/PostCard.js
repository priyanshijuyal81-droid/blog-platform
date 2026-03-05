import { Link } from "react-router-dom";
import formatDate from "../utils/dateFormatter";

function PostCard({ post }) {
  return (
    <div className="card">
      <h3>
        <Link to={`/post/${post._id}`} style={{ textDecoration: "none", color: "#333" }}>
          {post.title}
        </Link>
      </h3>

      <p style={{ fontSize: "14px", color: "#555" }}>
        By {post.author?.username || "Unknown"} |{" "}
        {formatDate(post.createdAt)}
      </p>
    </div>
  );
}

export default PostCard;