import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../utils/api";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";

function Profile() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const { data } = await API.get("/posts");
        const myPosts = data.filter(
          (post) => post.author?._id === user?.user?.id
        );
        setPosts(myPosts);
      } catch (error) {
        console.log("Error fetching user posts");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchUserPosts();
  }, [user]);

  if (!user) return <p>Please login to view your profile.</p>;

  if (loading) return <LoadingSpinner />;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{user.user.username}'s Posts</h2>

      {posts.length === 0 ? (
        <p>You have not created any posts yet.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}

export default Profile;