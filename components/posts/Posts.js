import { useState, useEffect } from "react"
import { onSnapshot, query, collection, orderBy } from "firebase/firestore"
import Post from "./Post"
import { db } from "../../firebase"


function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() =>
        onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }),
        [db]);

    console.log(posts);

    return (
        <div>

            {/* {posts.map(post => (
                <Post key={post.id}
                    id={post.id} username={post.username} userImg={post.userImg}
                    img={post.img} caption={post.caption} />
            ))

            } */}

        </div>
    )
}

export default Posts
