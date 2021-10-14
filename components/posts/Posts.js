import Post from "./Post"


const post_data = [
    {
        id: "123",
        username: "omid.b",
        userImg: "https://lh3.googleusercontent.com/ogw/ADea4I63hAY1m6qVwise20ijlooItppdeTvwS52Yh1t1=s32-c-mo",
        img: "/images/sample1.jpg",
        caption: "This is image."

    }, {
        id: "1234",
        username: "omid.b",
        userImg: "https://lh3.googleusercontent.com/ogw/ADea4I63hAY1m6qVwise20ijlooItppdeTvwS52Yh1t1=s32-c-mo",
        img: "/images/sample1.jpg",
        caption: "This is image."

    }
]

function Posts() {
    return (
        <div>

            {post_data.map(post => (
                <Post key={post.id}
                    id={post.id} username={post.username} userImg={post.userImg}
                    img={post.img} caption={post.caption} />
            ))

            }

        </div>
    )
}

export default Posts
