import { useEffect, useState } from "react";
import API from "../utils/api";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get("/posts");
        setPosts(data);
      } catch (error) {
        console.log("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Posts</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px"
        }}
      />

      {filteredPosts.length === 0 ? (
        <p>No matching posts found</p>
      ) : (
        filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}

export default Home;