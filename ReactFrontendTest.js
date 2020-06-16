// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles.css";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [formValues, setForm] = useState({
//     title: "",
//     description: ""
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/posts")
//       .then(res => {
//         setPosts(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const fetchAllPosts = () => {
//     axios
//       .get("http://localhost:3000/posts")
//       .then(res => {
//         setPosts(res.data);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/posts", formValues)
//       .then(res => {
//         fetchAllPosts();
//       })
//       .catch(err => console.log(err));
//     setForm({
//       title: "",
//       description: ""
//     });
//   };

//   const handleChange = e => {
//     setForm({
//       ...formValues,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="App">
//       {posts.length <= 0 && <h1>Loading...</h1>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formValues.title}
//           placeholder="title"
//           onChange={handleChange}
//           name="title"
//         />
//         <input
//           type="text"
//           value={formValues.description}
//           placeholder="description"
//           onChange={handleChange}
//           name="description"
//         />
//         <button type="submit">Add Post</button>
//       </form>
//       {posts.map(p => {
//         return <h1>{p.title}</h1>;
//       })}
//     </div>
//   );
// }
